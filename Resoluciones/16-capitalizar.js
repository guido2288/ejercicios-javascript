const capitalizar = (string = "") => {

    let resp = "";

    for (let i = 0; i < string.length; i++) {
        if(i === 0){
            resp += string[i].toUpperCase();
        }else{
            resp += string[i]
        }
        
    }

    return resp ? resp : ""

}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""