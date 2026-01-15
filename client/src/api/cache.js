const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

export function getCached(url) {
    const normalizedUrl = normalizeUrl(url);
    const entry = cache.get(normalizedUrl);

    if (!entry) return null;

    if (Date.now() - entry.timestamp > CACHE_TTL) {
        cache.delete(normalizedUrl);
        return null;
    }

    return entry.data;
}

export function setCache(url, data) {
    const normalizedUrl = normalizeUrl(url);
    cache.set(normalizedUrl, {
        data,
        timestamp: Date.now(),
    });
}

export function clearCache() {
    cache.clear();
}

export function clearCacheForUrl(url) {
    const normalizedUrl = normalizeUrl(url);
    cache.delete(normalizedUrl);
}

function normalizeUrl(url) {
    try {
        const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
        return parsed.href.toLowerCase().replace(/\/$/, '');
    } catch {
        return url.toLowerCase().trim();
    }
}
