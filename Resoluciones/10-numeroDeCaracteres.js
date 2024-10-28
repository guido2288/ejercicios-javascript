const numeroDeCaracteres = ( cadena, caracter ) => {

    let count = 0;

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === caracter){
            count ++
        }
        
    }

    return count;

}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4