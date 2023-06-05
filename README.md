# YT-to-GPT: Enrich your YouTube Experience with AI Insights

![Showcase GIF](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY4YzE5ZWY4NzMxMmViYjYxY2VhNjQ3ZTVhNGRhNmZhODI0OTI0ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/5BiRT5Z3ayOTTN3gWJ/giphy.gif)

## Overview

YT-to-GPT is a tool that lets you explore the content of YouTube videos in a whole new light. With features like summaries, insights, and fact-checking, you can extract valuable information, all powered by AI. It's like having a conversation with ChatGPT, but with added context from the video.

To start using YT-to-GPT, all you need to do is to sign in via Google.

[**Get Started**](https://yt-to-gpt.devjamin.com)

## How to Use

1. Copy the URL of a YouTube video into the input box on the homepage.
2. Hit 'Continue' and get ready to dive deeper into the content of the video.

## Token System

To ensure the sustainability of my wallet and protect the service from misuse, I've implemented a token system. Each message you send will consume one token. Don't worry, your tokens are refilled every day!

## Behind the Scenes

Curious about how it works? Here's a simplified overview:

1. When you insert a video URL on our homepage, the server fetches the transcript of the video.
2. You are then navigated to a chat interface, where the transcript becomes part of the initial state.
3. Each time you send a message, the state is updated and the required data is sent to an API route for processing.
4. Your interactions with the system also involve token checks, which are integrated with the nextauth state. Token refreshes are triggered when you sign in or send chat messages.

## Feedback and Support

I'm always excited to hear from you! If you have any feedback, questions, or issues, please feel free to reach out.
