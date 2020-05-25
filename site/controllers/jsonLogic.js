const fs = require ('fs');

const operacionesJSON = {
    leerSinParseJSON : function(archivoJSON) {
        return fs.readFileSync(archivoJSON,{encoding:"utf-8"})
    },
    leerJSON : function(archivoJSON) {
        const archivo = fs.readFileSync(archivoJSON,{encoding:"utf-8"})
        return JSON.parse(archivo);
    },
    escribirJSON : function(newJSON, oldJSON) {
        const archivo = JSON.stringify(newJSON,'utf-8')
        return fs.writeFileSync(oldJSON,archivo);
    },
    agregarJSON : function(elemento,archivoJSON) {
        let archivoParseado = this.leerJSON(archivoJSON);
        archivoParseado.push(elemento);
        this.escribirJSON(archivoParseado,archivoJSON);
    }
}

module.exports = operacionesJSON;