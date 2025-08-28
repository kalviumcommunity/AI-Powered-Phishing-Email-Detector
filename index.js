// 

import dotenv from "dotenv";
import OpenAI from "openai";
import { systemPrompt } from "./prompts/systemPrompt.js";
import { schemaPrompt } from "./prompts/schemaPrompt.js";
import { fewShotPrompt } from "./prompts/fewShotPrompt.js";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Dynamic email input
const email = {
  sender: "it-support@secure-microsoft-login.com",
  subject: "Reset your Microsoft password",
  body: "We detected unusual login attempts. Reset your password immediately: http://bit.ly/ms-reset",
};

async function runDetection() {
  const fullPrompt = `
${schemaPrompt}

${fewShotPrompt}

Now classify this email:

Sender: ${email.sender}
Subject: ${email.subject}
Body: ${email.body}
Output:
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: fullPrompt },
    ],
    temperature: 0,
  });

  console.log(response.choices[0].message.content);
}

runDetection();