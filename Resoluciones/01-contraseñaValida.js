
const contrasenaValida = (pass) => {

    if( pass === "2Fj(jjbFsuj" || pass === "eoZiugBf&g9" ){
        return true;
    }

    return false;
}


// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false