export const oneShotPrompt = (email) => `
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

### Example Input:
Sender: no-reply@apple-security.com  
Subject: Action Required – Verify Your Apple ID  
Body: "We detected unusual activity. Please login here: http://fake-apple-login.com"

### Example Output:
{
  "verdict": "phishing",
  "danger_score": 95,
  "reasons": [
    "Suspicious domain pretending to be Apple",
    "Urgency and account lock threat"
  ],
  "actions": [
    "Do not click the link",
    "Report to security team",
    "Block sender domain"
  ],
  "iocs": {
    "urls": ["http://fake-apple-login.com"],
    "domains": ["apple-security.com"],
    "attachments": []
  },
  "confidence": 0.98
}

---

### New Input:
Sender: ${email.sender}  
Subject: ${email.subject}  
Body: "${email.body}"
`;