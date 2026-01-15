# ProxyPhish Client

The frontend application for ProxyPhish - a URL security scanner.

## Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Create `.env` file:

    ```
    VITE_VIRUSTOTAL_API_KEY=your_api_key_here
    ```

3. Run development server:

    ```bash
    npm run dev
    ```

4. Build for production:
    ```bash
    npm run build
    ```

## Environment Variables

| Variable                  | Description                        |
| ------------------------- | ---------------------------------- |
| `VITE_VIRUSTOTAL_API_KEY` | Your VirusTotal API key (required) |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
