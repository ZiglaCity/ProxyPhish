const axios = require("axios");
const API_KEY = process.env.VIRUSTOTAL_API_KEY;

async function scanURL(urlToCheck) {
  try {
    const formData = new URLSearchParams();
    formData.append("url", urlToCheck);

    const response = await axios.post(
      "https://www.virustotal.com/api/v3/urls",
      formData.toString(),
      {
        headers: {
          "x-apikey": API_KEY,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(
      `This is the response: ${JSON.stringify(response.data, null, 2)}`
    );
    const analysisId = response.data.data.id;

    const analysisResult = await axios.get(
      `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
      {
        headers: { "x-apikey": API_KEY },
      }
    );
    console.log(`This is the analysisId ${analysisId}`);

    return analysisResult.data;
  } catch (err) {
    console.error("VirusTotal error:", err.response?.data || err.message);
    throw err;
  }
}

module.exports = { scanURL };
