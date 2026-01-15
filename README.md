# ProxyPhish

**ProxyPhish** is a lightweight, fast, and reliable tool that checks whether a given URL is legitimate or a potential phishing trap. Built with React and Tailwind CSS, ProxyPhish provides real-time scanning using the VirusTotal API.

---

## Version 1.0 (Current)

> **Note:** Version 1.0 uses a Vercel serverless function to proxy requests to the VirusTotal API. This approach keeps the API key secure on the server while avoiding CORS issues that occur when calling external APIs directly from the browser.
>
> The `/server` directory contains experimental backend code for future versions that may include additional features like rate limiting and OpenAI-powered analysis.

---

## Features

- Scan any URL for phishing and malware threats
- Real-time results from 70+ security engines via VirusTotal
- In-memory caching to avoid redundant API calls (30-minute TTL)
- Rescan functionality for cached or failed results
- Clean threat analysis dashboard with visual indicators
- Mobile-friendly responsive design
- Toast notifications for user feedback
- Dark cyber-themed UI

---

## Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, Vite
- **Backend:** Vercel Serverless Functions
- **API:** VirusTotal API v3
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## Preview

![Image](https://github.com/user-attachments/assets/93e7f69e-1868-4345-aca3-679961e49578)

![Image](https://github.com/user-attachments/assets/d4da00cd-bd17-498f-9044-0db3e3a5f428)

---

## Live Demo

[https://proxyphish.vercel.app](https://proxyphish.vercel.app)

---

## Getting Started

### Prerequisites

- Node.js (v20+)
- VirusTotal API Key (free at [virustotal.com](https://www.virustotal.com))

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ZiglaCity/ProxyPhish.git
   cd ProxyPhish/client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment:**

   Create a `.env` file in the `client` directory:

   ```
   VITE_ENV=local
   VITE_VIRUSTOTAL_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in browser:**

   Navigate to `http://localhost:5173`

### Production Deployment (Vercel)

1. **Set root directory** to `client` in Vercel dashboard

2. **Add environment variable:**

   - Name: `VIRUSTOTAL_API_KEY`
   - Value: your API key

3. **Deploy** - Vercel will automatically build and deploy

> **Note:** In production, do not set `VITE_ENV` or set it to `production`. The app will use the serverless function at `/api/scan` to proxy requests.

---

## Project Structure

```
ProxyPhish/
├── client/
│   ├── api/
│   │   └── scan.js             # Vercel serverless function
│   ├── src/
│   │   ├── api/
│   │   │   ├── index.js        # Main API entry point
│   │   │   ├── virusTotal.js   # VirusTotal API integration
│   │   │   ├── summarize.js    # Response processing
│   │   │   ├── analyzer.js     # Fallback URL analysis
│   │   │   └── cache.js        # In-memory caching
│   │   ├── components/         # React components
│   │   ├── lib/                # Utility functions
│   │   ├── App.jsx             # Main application
│   │   └── index.css           # Global styles
│   ├── .env.example            # Environment template
│   ├── vercel.json             # Vercel configuration
│   └── package.json
└── server/                     # Experimental backend (not used in v1)
```

---

## Environment Variables

| Variable                  | Location         | Description                                         |
| ------------------------- | ---------------- | --------------------------------------------------- |
| `VITE_ENV`                | `.env`           | Set to `local` for development, omit for production |
| `VITE_VIRUSTOTAL_API_KEY` | `.env`           | API key for local development                       |
| `VIRUSTOTAL_API_KEY`      | Vercel Dashboard | API key for production serverless function          |

---

## API Rate Limits

VirusTotal free tier allows 4 requests per minute. The in-memory cache helps reduce API calls by storing results for 30 minutes.

---

## Roadmap

- [x] Serverless function for API key protection
- [ ] Add URL history/bookmarks
- [ ] Implement OpenAI-powered threat explanations
- [ ] Add browser extension

---

## Author

Developed by [ZiglaCity](https://github.com/ZiglaCity)

---

## License

MIT License - see [LICENSE](LICENSE) for details.
