# 🔗 Discord URL Shortener Bot

A powerful Discord bot that generates short URLs using a custom Express.js backend and MongoDB. Supports persistent storage and real-time redirection through a local or custom domain.

---

## 🚀 Features

- Slash command `/shorturl` to generate short URLs.
- Generates short IDs using `nanoid`.
- Stores long → short URL mappings in MongoDB.
- Express backend to handle redirection.
- Easily deployable to platforms like Render, Railway, or Vercel.

---

## 🧱 Technologies Used

- **Node.js**
- **discord.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **nanoid**
- **concurrently**

---

## 📁 Project Structure

```

discord-url-shortener/
├── bot/                # Discord bot code
│   ├── index.js
│   ├── command.js
│   └── utils/
│       └── shortener.js
├── server/             # Express redirect backend
│   └── index.js
├── models/             # MongoDB URL model
│   └── Url.js
├── config/
│   └── db.js
├── .env                # Environment variables
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SowmyaKurapati26/url-shortner.git
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
MONGO_URI=mongodb_url
BASE_URL=req_base_url
```

### 4. Register Slash Commands

```bash
npm run register:commands
```

### 5. Start the Bot and Server

```bash
npm run start:all
```

> This runs both the bot and redirect server concurrently using `concurrently`.

---

## 🔗 Example Usage

In your Discord server, run:

```
/shorturl url=https://example.com/very/long/link
```

Bot replies:

```
🔗 Short URL: http://localhost:8000/abc123 (sample)
```

Visit `http://localhost:8000/abc123` in your browser → Redirects to original long URL.

---

## 📜 License

MIT License. Use freely, credit appreciated!

