export const fewShotPrompt = `
${/* Example 1 - phishing */""}
Email Example 1:
Sender: security@paypal.com
Subject: Verify your account immediately
Body: "Click here to confirm your details or your account will be locked."
Output:
{
  "verdict": "phishing",
  "danger_score": 95,
  "reasons": ["Urgency pressure", "Suspicious link"],
  "actions": ["Do not click links", "Report to SOC"],
  "iocs": {
    "urls": ["http://fakepaypal.com"],
    "domains": ["fakepaypal.com"],
    "attachments": []
  },
  "confidence": 0.95
}

${/* Example 2 - benign */""}
Email Example 2:
Sender: hr@company.com
Subject: Meeting schedule update
Body: "The meeting is postponed to tomorrow at 3 PM."
Output:
{
  "verdict": "benign",
  "danger_score": 5,
  "reasons": ["Normal internal communication"],
  "actions": ["No action needed"],
  "iocs": {
    "urls": [],
    "domains": [],
    "attachments": []
  },
  "confidence": 0.99
}

${/* Example 3 - suspicious */""}
Email Example 3:
Sender: unknown@randommail.com
Subject: Free gift card
Body: "Claim your $1000 Amazon gift card now."
Output:
{
  "verdict": "suspicious",
  "danger_score": 70,
  "reasons": ["Too good to be true offer"],
  "actions": ["Do not click links", "Mark as spam"],
  "iocs": {
    "urls": ["http://scam-link.com"],
    "domains": ["scam-link.com"],
    "attachments": []
  },
  "confidence": 0.8
}
`;