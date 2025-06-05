require('dotenv').config();
const axios = require('axios');

async function askOpenAI(url) {
    const prompt = `Analyze this URL: "${url}" and determine if it's likely a phishing website. 
                Respond with short, direct reasoning. Mention if it's suspicious and why. your response structure should be in this format;
                // {
                //     "result": "Suspicious",
                //     "rank": 8,
                //     "source": "Hybrid",
                //     "reasons": [
                //         "Contains keyword: 'login'",
                //         "Suggests potential credential phishing"
                //     ],
                //     "timestamp": "2025-05-04T10:45:00Z"
                // }

                // where the ranks imply the following result; 
                // | Rank (1-10) | Interpretation     | Verdict     |
                // | ----------- | ------------------ | ----------- |
                // | 1 - 3         | Likely Safe        | ✅ Safe      |
                // | 4 - 6         | Suspicious Signs   | ⚠️ Warning  |
                // | 7 - 10        | High Risk Phishing | ❌ Dangerous | `;

  try {
    console.log(process.env.OPENAI_API_KEY)
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: "user",
            content: prompt
            }
        ],
        temperature: 0.2,
        max_tokens: 100
        }, {
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        }
        });
        console.log(process.env.OPENAI_API_KEY)
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI error:", error.response?.data || error.message);
        return "OpenAI failed to respond. Proceeded with rule-based logic only.";
    }
}

module.exports = { askOpenAI };
