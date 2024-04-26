const { Collection, PermissionBitField } = require('discord.js');
const ms = require('ms');
const client = require('../../bot'); 
const colors = require('colors');
const cooldowns = new Collection();

module.exports = {
    name: "interactionCreate",
    runOnce: true,
    
    run: async (interaction, client) => {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return; 
            try { 
                command.run(client, interaction); 
            } catch (error) {
                console.error(error);
                interaction.reply({ content: 'There Was An Error While Executing This Command!', ephemeral: true });
            }
        }
    } 
}; 
