const  argv  = require('./config/yargs').argv;
var colors = require('colors');

const {crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando)
{
	case 'crear':
		console.log('crear');
		crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.blue}`)).catch(e => console.log(e));
	break;
	case 'listar':
		console.log('Tabla de multiplicar '.blue + argv.base);
		listarTabla(argv.base, argv.limite); //.then(tabla => console.log('Listo')).catch(e => console.log(e));
	break;
	default:
		console.log('Comando no reconocido');
}

 


