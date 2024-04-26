const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'botinfo',
    description: "Gives The Bot Information",
    run: async (client, interaction) => {
        const ownerInfo = "Wizq";
        const websiteLink = "https://wizq.dev";
        const botGithubLink = "https://github.com/example-bot";
        const botVersion = "1.0.0";
        const discordJsVersion = require('discord.js').version;
        const onlineSinceTimestamp = client.readyTimestamp;
        const onlineSince = calculateUptime(onlineSinceTimestamp);

        const embed = new EmbedBuilder()
            .setTitle("Bot Information")
            .setColor("#2C2F33")
            .addFields(
                { name: "Owner Info", value: ownerInfo, inline: false },
                { name: "Owner's Website", value: `[Link](${websiteLink})`, inline: false },
                { name: "Bot Github Link", value: `[GitHub](${botGithubLink})`, inline: false },
                { name: "Bot Version", value: botVersion, inline: false },
                { name: "Bot Discord.js Version", value: discordJsVersion, inline: false },
                { name: "Online Since", value: onlineSince, inline: false }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};

function calculateUptime(startTime) {
    const currentTime = Date.now();
    const uptimeInSeconds = Math.floor((currentTime - startTime) / 1000);
    const days = Math.floor(uptimeInSeconds / (3600 * 24));
    const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = uptimeInSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
