// Importing Modules
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { color } = require('colors'); 

// Loading Env 
require('dotenv').config();

// Importing Handlers
const LoadEvents = require("./Handlers/Event") 
const LoadCommands = require("./Handlers/Command") 

// Creating The Client Instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
    ],
    partials: [Partials.Channel]
});



// Loading Event
LoadEvents(client); 
    
// Loading Commands
LoadCommands(client); 

// Starting The Bot
client.login(process.env.BotToken);