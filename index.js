// Import the discord.js modules required
const { Client } = require('discord.js');
const config = require("./config.json");
const client = new Client

// Bot Initialize:
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`); // Confirms that the bot has logined
    
    client.user.setActivity('how to get by js developer', { type: 'PLAYING' }); // Set bot activity
});

// Optional feature: Shows message content and it's author in the console
client.on("message", message => {
    console.log(`${message.author.username} said: ${message.content}`)
});

// Bot login into server 
client.login(config.token);
