const capitalizar = (string = "") => {

    let array = string?.split(" ");
    let resp = []
    for (let i = 0; i < array.length; i++) {

        let word = ""
        
        for (let j = 0; j < array[i].length; j++) {
            if(j == 0){
                word += array[i][j].toUpperCase()
            }else{
                word += array[i][j]
            }
            
        }

        resp.push(word)
        
    }

    return resp.join(" ");
}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""