//Requires
const fs = require('fs');

let listarTabla = (base, limite = 10) =>{
	let tabla = '';

	for(let i= 1; i<=limite; i++)
	{
		tabla += `${base} x ${i} = ${base * i} \r\n`;
	}
	console.log(tabla.red);
}


let crearArchivo = (base, limite = 10) =>{
	return new Promise((resolve, reject) => {

if(!Number(base)){ reject('No es un numero'); return;}

		let tabla = '';

		for(let i= 1; i<=limite; i++)
		{
			tabla += `${base} x ${i} = ${base * i} \r\n`;
		}

		fs.writeFile(`tablas/archivoTabla${base}.txt`,tabla,(err) => {
			if(err) reject(err)
			else
			resolve(`archivoTabla${base}.txt`);
		});
	});
}

module.exports = { crearArchivo, listarTabla }




