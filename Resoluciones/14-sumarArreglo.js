const sumarArreglo = ( array = [] , initialP, finalP ) => {

    let init = initialP;
    let result = 0;

    while (init <= finalP) {
        
        result+=array[init]
        init++
    }

    return result

}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 1, 1)) // 0