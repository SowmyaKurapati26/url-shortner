import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const commands = [
  {
    name: 'shorturl',
    description: 'Generates a short URL',
    options: [
      {
        name: 'url',
        type: 3,
        description: 'The long URL to shorten',
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log('⏳ Registering slash commands...');
  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
  console.log('✅ Slash commands registered!');
} catch (error) {
  console.error(error);
}
