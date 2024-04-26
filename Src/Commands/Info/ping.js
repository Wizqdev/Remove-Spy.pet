const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Check The Bot's Ping And Its Api Ping",
    run: async (client, interaction) => {
        const botPing = Math.round(client.ws.ping);
        const apiPing = Date.now() - interaction.createdTimestamp;

        const embed = new EmbedBuilder ()
            .setColor('#2C2F33')
            .setTitle(':green_circle: Ping')
            .addFields(
                { name: 'Bot Ping:', value: `${botPing}ms`, inline: false },
                { name: 'Discord API Ping:', value: `${apiPing}ms`, inline: false }
            );

        interaction.reply({ embeds: [embed] });
    }
};
