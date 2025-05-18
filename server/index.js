import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import Url from '../models/Url.js';

dotenv.config();
connectDB();

const app = express();

app.get('/:shortId', async (req, res) => {
  try {
    const urlEntry = await Url.findOne({ shortId: req.params.shortId });
    if (urlEntry) {
      return res.redirect(urlEntry.originalUrl);
    } else {
      return res.status(404).send('Short URL not found');
    }
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🌐 Redirect server running on http://localhost:${PORT}`);
});
