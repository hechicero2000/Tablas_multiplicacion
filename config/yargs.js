var colors = require('colors');

const opc = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}	
}

const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar'.white,opc)
.command('crear','Crea la tabla de multiplicar'.white,opc)
.help()
.argv;

module.exports = {argv}