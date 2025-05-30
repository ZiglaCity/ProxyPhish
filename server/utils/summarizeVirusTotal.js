function summarizeVirusTotal(data) {
  const attributes = data?.data?.attributes;

  if (!attributes) {
    console.error("Invalid data structure from VirusTotal response.");
    return { error: "Invalid data" };
  }

  const results = attributes.results || {};
  const stats = attributes.stats || {};

  const totalEngines = Object.keys(results).length;

  const summary = {
    total_engines: totalEngines,
    malicious_count: stats.malicious || 0,
    suspicious_count: stats.suspicious || 0,
    clean_count: stats.harmless || 0,
    undetected_count: stats.undetected || 0,
    timeout_count: stats.timeout || 0,
  };

  if (summary.malicious_count > 0) {
    summary.verdict = "Malicious";
    summary.message = `${summary.malicious_count} engine(s) flagged this URL as malicious.`;
  } else if (summary.suspicious_count > 0) {
    summary.verdict = "Suspicious";
    summary.message = `${summary.suspicious_count} engine(s) marked this URL as suspicious.`;
  } else {
    summary.verdict = "Safe";
    summary.message = `No engines flagged this URL. Scanned by ${summary.total_engines} engines.`;
  }

  console.log("Summary:", summary);

  return summary;
}

module.exports = { summarizeVirusTotal };
