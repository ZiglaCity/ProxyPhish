const isLocal = import.meta.env.VITE_ENV === 'local';
const API_KEY = import.meta.env.VITE_VIRUSTOTAL_API_KEY;

async function scanLocal(urlToCheck) {
    if (!API_KEY) {
        throw new Error('VirusTotal API key not configured');
    }

    const formData = new URLSearchParams();
    formData.append('url', urlToCheck);

    const response = await fetch('https://www.virustotal.com/api/v3/urls', {
        method: 'POST',
        headers: {
            'x-apikey': API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
            errorData?.error?.message || `VirusTotal API error: ${response.status}`,
        );
    }

    const data = await response.json();
    const analysisId = data.data.id;

    const analysisResult = await fetch(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
        { headers: { 'x-apikey': API_KEY } },
    );

    if (!analysisResult.ok) {
        throw new Error('Failed to fetch analysis results');
    }

    return analysisResult.json();
}

async function scanProduction(urlToCheck) {
    const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlToCheck }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error || `API error: ${response.status}`);
    }

    return response.json();
}

export async function scanURL(urlToCheck) {
    return isLocal ? scanLocal(urlToCheck) : scanProduction(urlToCheck);
}
