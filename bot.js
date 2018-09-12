const { Client, RichEmbed } = require('discord.js');
const auth = require('./auth.json');
const client = new Client();

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

    // If the message is "how to embed"
    if (msg.content === 'how to embed') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
        const embed = new RichEmbed()
            // Set the title of the field
            .setTitle('A slick little embed')
            // Set the color of the embed
            .setColor(0xFF0000)
            // Set the main content of the embed
            .setDescription('Hello, this is a slick embed!');
        // Send the embed to the same channel as the message
        msg.channel.send(embed);
    }
});

client.login(auth.token);
