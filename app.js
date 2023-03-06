const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();

//Método manual
/*
console.log(process.argv);
const [,,arg3 = '--base=10'] = process.argv;
console.log(arg3);
const [,base] = arg3.split('=');
console.log( base*1 );
console.log( base );
*/


crearArchivo( argv.b, argv.l, argv.h )
    .then( console.log )
    .catch( console.log );