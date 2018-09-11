const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('pong');
    };
    // If the message is "what is my avatar"
    if (msg.content === '!getMyAvatar') {
        // Send the user's avatar URL
        msg.reply(msg.author.avatarURL);
    };
});

client.login(auth.token);
