import { scanURL } from './virusTotal';
import { summarizeVirusTotal } from './summarize';
import { ziglaAnalytics } from './analyzer';

export async function checkUrl(url) {
    const data = await scanURL(url);

    if (!data) {
        throw new Error('No data received from VirusTotal');
    }

    const { summary, formatedData } = summarizeVirusTotal(data);

    if (!formatedData || formatedData.length === 0) {
        const fallback = ziglaAnalytics(url);
        return {
            data,
            result: {
                verdict: fallback.rankBoost >= 3 ? 'Suspicious' : 'Likely Safe',
                reasons: fallback.reasons,
            },
            formatedData: [],
        };
    }

    return {
        data,
        result: summary,
        formatedData,
    };
}
