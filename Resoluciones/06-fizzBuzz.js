const fizzBuzz = (num) => {
    if(num % 3 == 0 && num % 5 !== 0) {
        return "fizz"
    } 

    if(num % 5 == 0 && num % 3 !== 0){ 
      return "buzz"
    }

    if(num % 5 == 0 && num % 3 == 0){ 
        return "fizzbuzz" 
    }

    return num
    
}

console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8