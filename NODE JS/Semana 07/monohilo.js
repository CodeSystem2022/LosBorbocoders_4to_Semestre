console.log('Hola a todos')

var i = 0;
setInterval(function() {
    console.log(i);
    i++;
    //if( i === 5){
    //    console.log('Forzamos un error');
    //    var a = 3 + z;
    //}
}, 1000); // se activa cada 1 segundo, se cancela con ctr+c

console.log('Ultima instrucción');