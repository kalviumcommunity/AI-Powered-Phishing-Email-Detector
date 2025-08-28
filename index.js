// // 


// import fs from "fs";
// import dotenv from "dotenv";
// import OpenAI from "openai";

// import { systemPrompt } from "./prompts/systemPrompt.js";
// import { schemaPrompt } from "./prompts/schemaPrompt.js";
// import { cotPrompt } from "./prompts/cotPrompt.js";
// import sampleEmail from "./samples/sampleEmail.json" with { type: "json" };

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// function buildPrompt(email) {
//   return `
// ${schemaPrompt}

// ${cotPrompt}

// Email Metadata:
// - Sender: ${email.sender}
// - Subject: ${email.subject}
// - Extra Context: ${email.metadata ? email.metadata : "None"}

// Email Body:
// ${email.body}
// `;
// }

// async function runDetection() {
//   try {
//     const userPrompt = buildPrompt(sampleEmail);

//     const response = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: systemPrompt },
//         { role: "user", content: userPrompt },
//       ],
//       temperature: 0,
//     });

//     const rawOutput = response.choices[0].message.content;

//     try {
//       const result = JSON.parse(rawOutput);
//       console.log("=== AI Classification Result ===");
//       console.log(JSON.stringify(result, null, 2));
//     } catch (err) {
//       console.error("Model did not return valid JSON. Raw output:");
//       console.log(rawOutput);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// runDetection();

import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

import { systemPrompt } from "./prompts/systemPrompt.js";
import { buildPrompt } from "./prompts/userPrompt.js";
import sampleEmail from "./samples/sampleEmail.json" with { type: "json" };

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runDetection() {
  try {
    const fullPrompt = buildPrompt(sampleEmail);

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: fullPrompt },
      ],
      temperature: 0,
    });

    const rawOutput = response.choices[0].message.content;

    try {
      const result = JSON.parse(rawOutput);
      console.log("=== AI Classification Result ===");
      console.log(JSON.stringify(result, null, 2));

      // Save structured result for later use
      fs.writeFileSync("result.json", JSON.stringify(result, null, 2));
      console.log("\n✅ Saved to result.json");
    } catch (err) {
      console.error("⚠️ Model did not return valid JSON. Raw output:");
      console.log(rawOutput);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

runDetection();