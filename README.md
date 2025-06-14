# ProxyPhish

**ProxyPhish** is a lightweight, fast, and reliable tool that checks whether a given URL is legitimate or a potential phishing trap. Built with a custom backend and a clean React + Tailwind frontend, ProxyPhish provides real-time scanning using multiple security engines.

---

## What It Does

- Accepts any URL from the user.
- Sends the URL to a backend API for validation.
- Checks for phishing patterns and threat intelligence.
- Displays scan results clearly to the user.
- Gracefully handles empty or invalid results.
- Designed with accessibility and dark mode support.

---

## Built With

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Icons:** Lucide
- **Deployment:** VPS (Nginx), GitHub Actions

---

## Preview

![Image](https://github.com/user-attachments/assets/93e7f69e-1868-4345-aca3-679961e49578)

![Image](https://github.com/user-attachments/assets/d4da00cd-bd17-498f-9044-0db3e3a5f428)

---

## Live Demo

[https://proxyphish.ziglacity.dev](https://proxyphish.ziglacity.dev)  
_The app is yet to be hosted...._

---

## Prerequisites

- Node.js (v20.x+) & npm
- Git

---

## Running Locally

1.  **Clone:**

    ```bash
    git clone https://github.com/ZiglaCity/ProxyPhish.git
    cd ProxyPhish
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd ../server
    npm install
    ```

4.  **Environment (.env):**

    - Create `.env` files in both frontend and backend with the required variables.
    - Reach out to [ME](https://github.com/ZiglaCity) for the development environment variables and paste them into the `.env`s.

5.  **Run:**

    ```bash
    # In backend
    npm run dev

    # In frontend (in a separate terminal)
    npm run dev
    ```

---

## About the Developer

Developed by [ME](https://github.com/ZiglaCity) as part of a cybersecurity project to help individuals stay safe online.

---

## License

MIT

**This project is open-source under the MIT License.**
