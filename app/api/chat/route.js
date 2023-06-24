import { Configuration, OpenAIApi } from "openai";
import { getServerSession } from "next-auth/next";
import { connectToDB } from "@utils/database";
import User from "@models/user";
import refreshTokens from "@utils/refreshTokens";

// Create a new Configuration object with the API key passed in as an environment variable
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create a new OpenAIApi object with the Configuration object
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  // get next-auth serverSession
  const session = await getServerSession({ req: request });

  // if not signed in, return error
  if (!session) {
    return Response.json({ error: "You must be signed in to use this endpoint" }, { status: 401 });
  }

  // get user profile
  await connectToDB();
  let userAccount = await User.findOne({ email: session.user.email });

  userAccount = await refreshTokens(userAccount); // refresh tokens

  // if user has no tokens, return error
  if (userAccount?.tokens === 0) {
    return Response.json({ error: "You have no tokens left" }, { status: 401 });
  }

  const body = await request.json();
  const { transscript, messages } = body;

  // create new messages
  const newMessages = messages.map((message) => {
    if (message.role === "system") {
      return { role: "system", content: message.content };
    } else {
      return { role: "user", content: message.content };
    }
  });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      messages: [{ role: "system", content: `You are a knowledgeable assistant capable of understanding and responding to queries about a given YouTube video transcript: ${transscript}` }, ...newMessages],
    });

    // remove 1 token from user
    await User.updateOne({ email: session.user.email }, { $inc: { tokens: -1 } });

    return Response.json(completion.data.choices[0].message.content, { status: 200 });
  } catch (error) {
    if (error?.response) {
      return Response.json({ error: error?.response?.status }, { status: error?.response?.status });
    } else {
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  }
}
