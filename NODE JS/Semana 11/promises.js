
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}
function hablar(nombre) {
    return new Promise( (resolve, reject) => { 
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); 
            reject('Hay un error');
        }, 1000);
    });
}

console.log('Iniciando');
hola('Ariel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios) //.then retorna un valor
    .then((nombre) => {
        console.log('Terminando');
    })
    .catch(error => {
        console.log('error: ');
        console.log(error);
    })
