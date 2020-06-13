

module.exports = function (message){
    const processMessage = require('./processMessage.js');
    var mensaje = message.content;
    if (processMessage.verifica(mensaje)){  //Verifica que el mensaje tenga '!'
        
        
        if (mensaje.slice(6, 7) === ' ' && mensaje.slice(0, 6) === '!clear'){

        
        var res = mensaje.slice(7); //Selecciona el lugar del string que esta el numero
        var rest = Number(res); //convierte el string en numero
        if (isNaN(rest) || rest > 99 || rest < 1){
            message.channel.send('Error, escriba !clear (cantidad "Numerica" que desea eliminar del 1 al 99)');
        } else{
            rest += 1; //le suma 1 para que elimine el mensaje del comando + el que queramos eliminar
        var num_mensaje = rest.toString(); //Convierte en String para que funcione
        message.channel.bulkDelete(num_mensaje); //Borra el mensaje con la cantidad deseada
        message.channel.send(`Se borraron ${res} mensajes`)
            .then(function (botMessage) {
                botMessage.delete({
                'timeout': 5000
                });

            })
            .catch(console.error);
        }
        }
        else {
            message.channel.send('Error de Sintaxys, escriba !clear (cantidad que desea eliminar) del 1 al 99')
        }
    
    }
};