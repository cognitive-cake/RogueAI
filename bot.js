const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login('NDg4Njc2NjM1NTI5NDQ1Mzc2.DnkyXg.0ytt9jEpX0rngRf6Djqvr-hyxcA');
