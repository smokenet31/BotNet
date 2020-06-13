const { Client,MessageEmbed } = require('discord.js');
const client = new Client();
const clearMessage = require('./clearMessage.js')
require('dotenv').config();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('online');

    //console.log(client.user.presence.status);
    //const testChannel = client.channels.find(channel => channel.name === 'test');
    

})




client.on('message', message => {
    // Recive el mensaje

    
    console.log(message.content);
    if (message.content == 'ping'){
        message.reply('pong');
    }


    if (message.content === 'hello' || message.content === 'Hello'){
        message.channel.send(`Hello ${message.author}`);

    }

    if (message.content.includes('!test')){
        message.channel.send('Bien ahi que andas testeando perry');
    }

    if(message.content === '!smoke'){
        message.channel.send('https://www.twitch.tv/smokenet');
    }

    if (message.content === '!random'){
        var random =  Math.floor(Math.random() * 10);
        message.channel.send(`El numero random es: ${random}`);
    }

     if (message.content === '!pretty') {
     const embed = new MessageEmbed()
     .setTitle('Hola')
     .setColor(0xff0000)
     .setAuthor('Smoke', 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg')
     .setDescription('Hola soy un bot')
     message.channel.send(embed);
    }


     
     clearMessage(message);
     


})
    

client.login(process.env.BOT_TOKEN);