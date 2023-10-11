console.log('Start of the program'); 

setTimeout(() => {
    console.log('1st Timeout'); 
}, 3000);

setTimeout(() => {
    console.log('2nd Timeout'); 
}, 0);

setTimeout(() => {
    console.log('3rd Timeout'); 
}, 0);

console.log('End of the program'); 

