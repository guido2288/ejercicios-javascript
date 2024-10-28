const numeroDeAes = (cadena = "") => {

    let count = 0;

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === "a"){
            count ++
        }
        
    }

    return count;

}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0