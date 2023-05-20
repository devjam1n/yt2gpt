import { Configuration, OpenAIApi } from "openai";

// Create a new Configuration object with the API key passed in as an environment variable
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create a new OpenAIApi object with the Configuration object
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const body = await request.json();
  const { transscript, messages } = body;

  console.log(transscript);
  console.log(messages);

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
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: `You are a knowledgeable assistant capable of understanding and responding to queries about a given YouTube video transcript: ${transscript}` }, ...newMessages],
    });
    return Response.json(completion.data.choices[0].message.content, { status: 200 });
  } catch (error) {
    if (error.response) {
      return Response.json({ error: error?.response?.status });
    } else {
      return Response.json({ error: error?.response?.status });
    }
  }
}
