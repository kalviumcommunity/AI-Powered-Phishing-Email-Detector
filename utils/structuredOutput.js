// Define the schema as a reusable string for prompting
export const schemaPrompt = `
Schema:
{
  "verdict": "phishing" | "suspicious" | "benign",
  "danger_score": 0-100,
  "reasons": ["short reasons for classification"],
  "actions": ["recommended actions for user"],
  "iocs": {
    "urls": ["..."],
    "domains": ["..."],
    "attachments": ["..."]
  },
  "confidence": 0.0-1.0
}

Rules:
- Output strictly in JSON format.
- If unsure, set verdict to "suspicious".
- Do not add commentary.
`;