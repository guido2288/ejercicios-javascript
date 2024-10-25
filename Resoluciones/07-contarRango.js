const contarRango = (a , b) => {

    let count = 0;

    for (let i = a + 1; i < b; i++) {
        if( i !== b ) count ++
    };

    return count;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0