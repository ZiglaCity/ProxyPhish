export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const API_KEY = process.env.VIRUSTOTAL_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const formData = new URLSearchParams();
        formData.append('url', url);

        const submitResponse = await fetch('https://www.virustotal.com/api/v3/urls', {
            method: 'POST',
            headers: {
                'x-apikey': API_KEY,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        if (!submitResponse.ok) {
            const error = await submitResponse.json().catch(() => ({}));
            return res.status(submitResponse.status).json({ 
                error: error?.error?.message || 'Failed to submit URL' 
            });
        }

        const submitData = await submitResponse.json();
        const analysisId = submitData.data.id;

        const analysisResponse = await fetch(
            `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
            {
                headers: { 'x-apikey': API_KEY },
            }
        );

        if (!analysisResponse.ok) {
            return res.status(500).json({ error: 'Failed to fetch analysis results' });
        }

        const analysisData = await analysisResponse.json();
        return res.status(200).json(analysisData);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
