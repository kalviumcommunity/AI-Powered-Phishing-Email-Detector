# 🛡️ AI-Powered Phishing Email Detector

Detect phishing emails using the power of AI, NLP, and LLMs. This tool intelligently analyzes email content to determine whether it's safe, suspicious, or phishing — going beyond traditional rule-based filters.

---

## 🚀 Project Overview

Phishing emails are one of the most prevalent cyber threats today. This tool uses modern AI techniques to identify deceptive language, suspicious links, and known phishing templates — and provides structured insights to end users.

---

## 🧠 Features

- 🔎 **LLM-based Analysis** (e.g., GPT-4): Understands tone, urgency, and social engineering patterns
- 🧩 **Function Calling**: Extracts and checks links, sender addresses, domains
- 📚 **RAG (Retrieval-Augmented Generation)**: Compares email with a database of known phishing templates
- 📦 **Structured Output**: JSON verdict with score, reasons, and recommendations
- ✨ **Prompt Engineering**: Tuned prompts to detect manipulation and malicious intent

---

## 📁 Example Output

```json
{
  "verdict": "phishing",
  "danger_score": 92,
  "reasons": [
    "Unusual sender domain",
    "Urgent language: 'account suspended'",
    "Malicious shortened URL",
    "Email asks for credentials"
  ],
  "suggestion": "Do not click any links or reply. Report to security team."
}
