const transcribir = (string) => {
    let resp = ""

    for (let i = 0; i < string.length; i++) {
        
        switch (string[i]) {
            case "G":
                resp += "C"
                break;
            case "C":
                resp += "G"
                break;
            case "T":
                resp += "A"
                break;
            case "A":
                resp += "U"
                break;
        }

    }

    return resp;

}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"