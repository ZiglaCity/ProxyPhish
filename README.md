# ProxyPhish

**ProxyPhish** is a lightweight, fast, and reliable tool that checks whether a given URL is legitimate or a potential phishing trap. Built with React and Tailwind CSS, ProxyPhish provides real-time scanning using the VirusTotal API.

---

## Version 1.0 (Current)

> **Note:** Version 1.0 operates entirely on the client-side. Due to deployment constraints with managing separate frontend and backend services, the current implementation calls the VirusTotal API directly from the browser. This eliminates the need for a dedicated server and simplifies deployment to a single static hosting service.
>
> The `/server` directory contains experimental backend code for future versions that may include additional features like rate limiting, API key protection, and OpenAI-powered analysis.

---

## Features

- Scan any URL for phishing and malware threats
- Real-time results from 70+ security engines via VirusTotal
- In-memory caching to avoid redundant API calls (30-minute TTL)
- Clean threat analysis dashboard with visual indicators
- Mobile-friendly responsive design
- Toast notifications for user feedback
- Dark cyber-themed UI

---

## Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, Vite
- **API:** VirusTotal API v3
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## Preview

![Image](https://github.com/user-attachments/assets/93e7f69e-1868-4345-aca3-679961e49578)

![Image](https://github.com/user-attachments/assets/d4da00cd-bd17-498f-9044-0db3e3a5f428)

---

## Live Demo

[https://proxyphish.vercel.app/](https://proxyphish.vercel.app/)

---

## Getting Started

### Prerequisites

- Node.js (v20+)
- VirusTotal API Key (free at [virustotal.com](https://www.virustotal.com))

### Installation

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
   VITE_VIRUSTOTAL_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in browser:**

   Navigate to `http://localhost:5173`

---

## Project Structure

```
ProxyPhish/
├── client/
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
│   └── package.json
└── server/                     # Future backend (not used in v1)
```

---

## API Rate Limits

VirusTotal free tier allows 4 requests per minute. The in-memory cache helps reduce API calls by storing results for 30 minutes.

---

## Roadmap

- [ ] Deploy backend for API key protection
- [ ] Add URL history/bookmarks
- [ ] Implement OpenAI-powered threat explanations
- [ ] Add browser extension

---

## Author

Developed by [ZiglaCity](https://github.com/ZiglaCity)

---

## License

MIT License - see [LICENSE](LICENSE) for details.
