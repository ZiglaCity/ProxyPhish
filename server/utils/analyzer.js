function ziglaAnalitics(url) {
    const reasons = [];
    let rankBoost = 0;

    const suspiciousKeywords = ['login', 'verify', 'update', 'secure', 'bank', 'account', 'password'];
    const knownShorteners = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl'];

    suspiciousKeywords.forEach(word => {
        if (url.includes(word)) {
            reasons.push(`Contains suspicious keyword: "${word}"`);
            rankBoost += 1;
        }
    });

    knownShorteners.forEach(shortener => {
        if (url.includes(shortener)) {
            reasons.push(`Uses URL shortener: "${shortener}"`);
            rankBoost += 2;
        }
    });

    if (url.match(/^https?:\/\/(\d{1,3}\.){3}\d{1,3}/)) {
        reasons.push("Uses IP-based URL (commonly suspicious)");
        rankBoost += 2;
    }

    const subdomainCount = url.split('.').length;
    if (subdomainCount > 4) {
        reasons.push("URL has many subdomains");
        rankBoost += 1;
    }

    return {
        reasons: reasons.length > 0 ? reasons : ["No obvious phishing patterns detected"],
        rankBoost: rankBoost || 0
    };
}

module.exports = { ziglaAnalitics };
