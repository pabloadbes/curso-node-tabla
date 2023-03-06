const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {
    let salida = '', consola = '';
    const fileName = `./salida/tabla-${ base }.txt`;

    for( let i = 1; i <= hasta; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
        consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
    }

    if ( listar ) {
        console.log(`========================================`.blue);
        console.log(`Tabla del `.trap, colors.red( base ));
        console.log(`========================================`.blue);

        console.log( consola );
    }

    try {
        fs.writeFileSync( fileName, salida )
        return `Archivo tabla del ${ base } creado`;

    } catch (error) {
        return `Error al intentar crear el archivo tabla del ${ base }`;
    }
}

module.exports = {
    crearArchivo
}