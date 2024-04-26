const { EmbedBuilder } = require('discord.js');
const SpyPetBotIDS = require('../../Utils/spy-pet-bots-id');

module.exports = {
    name: 'ban-spypet',
    description: "Ban All Spy.pet Bot Accounts",
    run: async (client, interaction) => {
        try {
            const fetchEmbed = new EmbedBuilder()
                .setColor('#2C2F33')
                .setDescription('Fetching Bot IDS');
            await interaction.reply({ embeds: [fetchEmbed] });

            const ids = await SpyPetBotIDS();

            fetchEmbed.setDescription(`Fetched Bot IDS: ${ids.length}`);
            await interaction.editReply({ embeds: [fetchEmbed] });

            let deletedCount = 0;

            for (const id of ids) {
                await interaction.guild.members.ban(id, { reason: 'Spy.pet Bot Account' });
                deletedCount++;
                const finalEmbed = new EmbedBuilder()
                    .setColor('#2C2F33')
                    .setDescription(`Banning Spy.pet Bot Account ${deletedCount}/${ids.length}`)
                    .addFields(
                        { name: "User ID", value: id ? id.toString() : "Unknown ID", inline: true }
                    )
                    .setFooter({ text: `This Bot Was Made By wizq.dev`}); 

                await interaction.editReply({ embeds: [finalEmbed] });
            }

            await interaction.followUp('All Bots Have Been Banned!');
        } catch (error) {
            console.error('Error banning Spy.pet Bot Accounts:', error);
            await interaction.reply('Error Banning Spy.pet Bot Accounts. Please Try Again Later.');
        }
    }
};
