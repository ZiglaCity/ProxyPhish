const { askOpenAI } = require("../utils/openHelper");
const { scanURL } = require("../utils/virusTotalHelper");
const { ziglaAnalitics } = require("../utils/analyzer");
const { summarizeVirusTotal } = require("../utils/summarizeVirusTotal");

exports.checkUrl = async (req, res) => {
  const { url } = req.body;

  try {
    let openAIReason = "";
    let fallbackReason = "";
    let rank = 1;

    const data = await scanURL(url);

    if (data) {
      const result = summarizeVirusTotal(data);

      //make sure the summarized data here... contains rank, final verdict, and reasons...(probably 70/ 80 flagged as safe)
      //also instead of just send the data with a bunch of the results... refactore the results starting from the milicous, suspicios, good, unknown...
      return res.json({ data, result });
    }
    try {
      openAIReason = await askOpenAI(url);
      if (!openAIReason || !openAIReason.rank) {
        throw new Error("Invalid response from OpenAI");
      }
      rank = openAIReason.rank;
    } catch (err) {
      console.log("OpenAI failed. Using ZiglaAnalytics...");
      fallbackReason = ziglaAnalitics(url);
      rank += fallbackReason.rankBoost;
    }

    const finalVerdict = rank >= 6 ? "High Risk Phishings" : "Likely Safe";
    finalVerdict =
      rank >= 3 && finalVerdict == "Likely Safe"
        ? "Suspicious Signs"
        : "Likely Safe";

    res.json({
      result: openAIReason.result ? openAIReason.result : finalVerdict,
      rank,
      source: openAIReason.rank ? "OpenAI" : "ZiglaAnalytics",
      reasons: openAIReason.reasons
        ? openAIReason.reasons
        : fallbackReason.reasons,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
};
