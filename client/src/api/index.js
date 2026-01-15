import { scanURL } from './virusTotal';
import { summarizeVirusTotal } from './summarize';
import { ziglaAnalytics } from './analyzer';
import { getCached, setCache, clearCacheForUrl } from './cache';

export async function checkUrl(url, forceRefresh = false) {
    if (forceRefresh) {
        clearCacheForUrl(url);
    }

    const cached = getCached(url);
    if (cached) {
        return { ...cached, fromCache: true };
    }

    const data = await scanURL(url);

    if (!data) {
        throw new Error('No data received from VirusTotal');
    }

    const { summary, formatedData } = summarizeVirusTotal(data);

    let result;
    if (!formatedData || formatedData.length === 0) {
        const fallback = ziglaAnalytics(url);
        result = {
            data,
            result: {
                verdict: fallback.rankBoost >= 3 ? 'Suspicious' : 'Likely Safe',
                reasons: fallback.reasons,
            },
            formatedData: [],
        };
    } else {
        result = {
            data,
            result: summary,
            formatedData,
        };
    }

    setCache(url, result);
    return result;
}
