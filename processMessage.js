

exports.on = function(mensaje) {
    if (mensaje.includes('!') && mensaje.slice(0, 1) === '!' ){ 
        return true;
        }
    }

