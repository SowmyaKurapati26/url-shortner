import { nanoid } from 'nanoid';
import Url from '../../models/Url.js';

export async function generateShortUrl(originalUrl, baseUrl) {
  const shortId = nanoid(6);
  const shortUrl = `${baseUrl}/${shortId}`;
  await Url.create({ shortId, originalUrl });
  return shortUrl;
}
