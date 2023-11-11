const fs = require('fs'); 
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    
    
    })
}

leer(`${__dirname}/archivo.txt`, console.log);
