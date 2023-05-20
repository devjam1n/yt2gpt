import { Configuration, OpenAIApi } from "openai";

// Create a new Configuration object with the API key passed in as an environment variable
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create a new OpenAIApi object with the Configuration object
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You act as a ChatBOT about this transscript from a YouTube video. Peform any prompts user wants, in the scope of the video context." },
        { role: "system", content: "Video transscript: " },
        { role: "user", content: "How long time has the timeinms been used for computers?" },
      ],
    });
    return Response.json(completion.data.choices[0].message.content);
  } catch (error) {
    if (error.response) {
      return Response.json({ error: error?.response?.status });
    } else {
      return Response.json({ error: error?.response?.status });
    }
  }
}
