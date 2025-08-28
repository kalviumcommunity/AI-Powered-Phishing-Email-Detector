import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

// Initialize client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Load base prompt
const basePrompt = fs.readFileSync("prompts/classify_email.txt", "utf8");

// Load sample email
const emailContent = fs.readFileSync("samples/sample_email.txt", "utf8");

// Combine prompt and email
const fullPrompt = `${basePrompt}\n\nEmail:\n${emailContent}`;

async function runDetection() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // Or gpt-4o if you have it
      messages: [
        { role: "system", content: "You are a phishing detection engine." },
        { role: "user", content: fullPrompt },
      ],
      temperature: 0, // deterministic
    });

    const rawOutput = response.choices[0].message.content;

    // Try parsing JSON safely
    try {
      const result = JSON.parse(rawOutput);
      console.log("=== AI Classification Result ===");
      console.log(JSON.stringify(result, null, 2));
    } catch (err) {
      console.error("Model did not return valid JSON. Raw output:");
      console.log(rawOutput);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

runDetection();