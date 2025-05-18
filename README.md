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
git clone https://github.com/your-username/discord-url-shortener.git
cd discord-url-shortener
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
MONGO_URI=mongodb://127.0.0.1:27017/urlshortener
BASE_URL=http://localhost:PORT
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
🔗 Short URL: http://localhost:8000/abc123
```

Visit `http://localhost:8000/abc123` in your browser → Redirects to original long URL.

---

## 🌍 Deployment Tips

* Deploy the `server/` folder on [Render](https://render.com) or [Railway](https://railway.app).
* Use a custom domain like `https://short.ly` and update your `.env` file's `BASE_URL`.
* Optionally add analytics, click tracking, or a web dashboard.

---

## 📜 License

MIT License. Use freely, credit appreciated!

