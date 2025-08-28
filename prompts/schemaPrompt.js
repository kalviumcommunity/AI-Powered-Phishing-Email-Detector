// src/prompts/schemaPrompt.js
export const schemaPrompt = `
Classify the email strictly in the following JSON schema:

{
  "verdict": "phishing | benign | suspicious",
  "danger_score": "0-100",
  "reasons": ["reason1", "reason2"],
  "actions": ["action1", "action2"],
  "iocs": {
    "urls": ["..."],
    "domains": ["..."],
    "attachments": ["..."]
  },
  "confidence": "0-1"
}
`;