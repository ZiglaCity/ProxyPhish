export function finalizeStatsCount(analysis) {
    const suspiciousCount = analysis?.malicious_count + analysis?.suspicious_count;
    const totalCount = analysis?.total_engines;
    return { suspiciousCount, totalCount };
}
