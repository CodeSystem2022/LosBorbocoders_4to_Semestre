let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i ===3){ 
    clearInterval(intervalo); //detenemos la funcion
}
i++;
}, 1000);

setImmediate(() => {
    console.log(`Saludo inmediato`);
});

//require();

console.log(__filename);
