import { schemaPrompt } from "../utils/structuredOutput.js";

export function buildPrompt({ sender, subject, body, metadata }) {
  return `
${schemaPrompt}

Email Metadata:
- Sender: ${sender}
- Subject: ${subject}
- Extra Context: ${metadata ? metadata : "None"}

Email Body:
${body}
`;
}