const bmi = (peso, altura) => {

    let IMC = (peso / altura ** 2).toFixed(1);   

    if( IMC < 18.5 ) { return 'Bajo de peso'}
    if(IMC > 18.5 && IMC < 24.9) {return 'Normal'}
    if(IMC > 25 && IMC < 29.9) {return'Sobrepeso' }
    if(IMC >= 30){return 'Obeso'    }

};

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"