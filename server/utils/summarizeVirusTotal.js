function summarizeVirusTotal(data) {
    console.log(data);
    const results = data.attributes.results;
    const stats = data.attributes.stats;
  
    const summary = {
        total_engines: Object.keys(results).length,
        malicious_count: stats.malicious,
        suspicious_count: stats.suspicious,
        clean_count: stats.harmless,
        undetected_count: stats.undetected,
        timeout_count: stats.timeout ?? 0
    };
  
    if (summary.malicious_count > 0) {
        summary.verdict = "Malicious";
        summary.message = `${summary.malicious_count} engine(s) flagged this URL as malicious.`;
    }
    else if (summary.suspicious_count > 0) {
        summary.verdict = "Suspicious";
        summary.message = `${summary.suspicious_count} engine(s) marked this URL as suspicious.`;
    }
    else {
        summary.verdict = "Safe";
        summary.message = `No engines flagged this URL. Scanned by ${summary.total_engines} engines.`;
    }
  
    return summary;
}
  

module.exports = { summarizeVirusTotal };