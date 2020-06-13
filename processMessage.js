
module.exports.verifica = function(mensaje) {
    if (mensaje.includes('!') && mensaje.slice(0, 1) === '!'){
        if(mensaje.includes('!clear')){

            return true;
        }
        }
    }

