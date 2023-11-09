//6.1 Configurar variables de entorno

/*let saludo = 'Hola';
console.log(saludo);*/

/*let nombre = process.env.NOMBRE 
console.log('Hola ' + nombre);*/

//6.2 Pruebas para aclarar conceptos

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es: ' + web);