// // src/prompts/schemaPrompt.js
// export const schemaPrompt = `
// Classify the email strictly in the following JSON schema:

// {
//   "verdict": "phishing | benign | suspicious",
//   "danger_score": "0-100",
//   "reasons": ["reason1", "reason2"],
//   "actions": ["action1", "action2"],
//   "iocs": {
//     "urls": ["..."],
//     "domains": ["..."],
//     "attachments": ["..."]
//   },
//   "confidence": "0-1"
// }
// `;

// export const schemaPrompt = `
// Schema:
// {
//   "verdict": "phishing" | "suspicious" | "benign",
//   "danger_score": 0-100,
//   "reasons": ["short reasons for classification"],
//   "actions": ["recommended actions for user"],
//   "iocs": {
//     "urls": ["..."],
//     "domains": ["..."],
//     "attachments": ["..."]
//   },
//   "confidence": 0.0-1.0
// }

// Rules:
// - Output strictly in JSON format.
// - If unsure, set verdict to "suspicious".
// - Do not add commentary.
// `;