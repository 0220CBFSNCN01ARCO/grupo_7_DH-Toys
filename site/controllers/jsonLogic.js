const fs = require ('fs');

const jsonOperations = {
    readJSON : function(JSONfile) {
        const file = fs.readFileSync(JSONfile,{encoding:"utf-8"})
        return JSON.parse(file);
    },
    writeJSON : function(newJSON, oldJSON) {
        const file = JSON.stringify(newJSON,'utf-8')
        return fs.writeFileSync(oldJSON,file);
    },
    addToJSON : function(element,JSONfile) {
        let parsedFile = this.readJSON(JSONfile);
        parsedFile.push(element);
        this.writeJSON(parsedFile,JSONfile);
    }
}

module.exports = jsonOperations;