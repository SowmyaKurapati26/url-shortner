import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { generateShortUrl } from './utils/shortener.js';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
  connectDB();
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'shorturl') {
    const longUrl = interaction.options.getString('url');

    try {
      const shortUrl = await generateShortUrl(longUrl, process.env.BASE_URL);
      await interaction.reply(`🔗 Short URL: ${shortUrl}`);
    } catch (err) {
      console.error(err);
      await interaction.reply('❌ Failed to generate short URL.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
