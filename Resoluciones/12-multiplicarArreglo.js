const multiplicarArreglo = (array =[]) => {
    return array.reduce((acum, current) => acum * current, 1)
}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1