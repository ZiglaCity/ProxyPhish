export async function scanURL(urlToCheck) {
    const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlToCheck }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error || `API error: ${response.status}`);
    }

    return response.json();
}
