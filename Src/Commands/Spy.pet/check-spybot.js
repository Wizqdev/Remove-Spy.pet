const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

require('dotenv').config();


async function CheckSpyBot(guildId) {
    const url = `https://kickthespy.pet/getBot?id=${guildId}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error === 'Bot not found') {
            return [];
        } else {
            throw error;
        }
    }
}

module.exports = {
    name: 'check-spybot',
    description: "Check's If There's Any SpyBot In Your Server",
    run: async (client, interaction) => {
        try {
            const guildId = process.env.GuildID; 
            if (!guildId) {
                throw new Error("Guild ID is not provided in the environment variable.");
            }

            const botData = await CheckSpyBot(guildId);

            const embed = new EmbedBuilder()
                .setTitle("SpyBot Check")
                .setColor("#2C2F33");

            if (botData.length > 0) {
                embed.setDescription(`There are ${botData.length} SpyBots In This Server.`);
                botData.forEach(bot => {
                    embed.addField("SpyBot", `Username: ${bot.username}\nID: ${bot.id}`, false);
                });
            } else {
                embed.setDescription("There's No SpyBot In Your Server ");
            }

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error checking SpyBots:', error);
            await interaction.reply('Error Checking SpyBots. Please Try Again Later.');
        }
    }
};
