const { Client,MessageEmbed } = require('discord.js');
const client = new Client();
const processMessage = require('./processMessage.js');
require('dotenv').config();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('online');

    console.log(client.user.presence.status);
    //const testChannel = client.channels.find(channel => channel.name === 'test');
    //console.log(testChannel);

})




client.on('message', message => {
    // Recive el mensaje
    console.log(message);

    function processMessage() {
        var mensaje = message.content;
        if (mensaje.includes('!') && mensaje.slice(0, 1) === '!' ){ 
            return true;
            }
        }
    
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
     .setDescription('Hola soy un bot');
     message.channel.send(embed);
    }

    var mensaje = message.content;
    if (processMessage(mensaje)){  //Verifica que el mensaje tenga '!' y ademas incluya !clear
        
         
         if (mensaje.slice(6, 7) === ' ' && mensaje.slice(0, 6) === '!clear'){

         
         var res = mensaje.slice(7); //Selecciona el lugar del string que esta el numero
         var rest = Number(res); //convierte el string en numero
         console.log(rest); //guarda el numero!!!!!!!
         rest += 1; //le suma 1 para que elimine el mensaje del comando + el que queramos eliminar
         var n = rest.toString(); //Convierte en String para que funcione

         message.channel.bulkDelete(n); //Borra el mensaje con la cantidad deseada
         console.log('Messages Deleted');
         message.channel.send(`Se borraron ${res} mensajes`);
        }
        else {
            message.channel.send('Error de Sintaxys, escriba !clear (cantidad que desea eliminar)');
        }
       
    }
})
    

client.login(process.env.BOT_TOKEN);