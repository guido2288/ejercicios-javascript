const sumarRango = (a , b) => {

    let count = 0;

    for (let i = a; i <= b; i++) {
        count += i
        
    }

    return count

}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0