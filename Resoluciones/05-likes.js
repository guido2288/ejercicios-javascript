const likes = (cantidad) => {

    if(cantidad < 1000 ){
        return cantidad.toString()
    }
    if(cantidad > 1000 && cantidad < 1000000){
        return `${Math.floor(cantidad / 1000)}K`
    }

    if(cantidad > 1000000){
        return `${Math.floor(cantidad / 1000000)}M`
    }

}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"