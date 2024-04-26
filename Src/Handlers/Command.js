const fs = require('fs');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');

const rest = new REST({ version: '10' }).setToken(process.env.BotToken);

module.exports = async (client) => { 
    const commands = [];
    client.commands = new Map();
    fs.readdirSync('./Src/Commands').forEach(dir => {
        console.log(` Loaded Commands For: ${dir}`);
        const cmdFiles = fs.readdirSync(`./Src/Commands/${dir}`).filter(file => file.endsWith('.js')); 
        for (const file of cmdFiles) {
            try {
                const cmd = require(`../Commands/${dir}/${file}`);
                commands.push(cmd);
                client.commands.set(cmd.name, cmd);
                console.log(`     ${file}`.bold.yellow);
            } catch (error) {
                console.error(` Error Loading Command ${file}:`.bold.red, error);
            }
        }
    });

    try {
        await rest.put(process.env.GuildID ?
            Routes.applicationGuildCommands(process.env.BotID, process.env.GuildID) :
            Routes.applicationCommands(process.env.BotID),
            { body: commands }
        );
        console.log(` Client - Application (/) Commands Registered`.bold.green);
    } catch (error) {
        console.log(` Client - Failed To Register Application (/) Commands`.bold.red + `${error}`.bold.underline);
    }
};

/* 
This Command Handler Was Made By @flaxeneel2 
His Github Like: https://github.com/flaxeneel2
*/