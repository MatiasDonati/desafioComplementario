
// El cliente elige A o B una cierta cantidad de veces seteada en en el for (ej: i <= 10), o bien puede ingresar cualquier otro caracter.
// Al finalizar el cilco nos dara el resultado de cual de las dos letras tiene mas votos o si hay un empate.

let eleccionUsuario = "";
let cantidadDeVotos = Number(prompt('Ingresa un numero ! Ese Numero será la cantidad de veces que Votes.. Que viva la democracia!!!'))
let a = 0;
let b = 0;
let votoImpugnado = 0;
let sumaA;
let sumaB;
let sumavotoImpugnado;
let palabraVoto


for (let i = 1; i <= cantidadDeVotos; i++) {
    let eleccionUsuario = prompt('Elegí A o B, tenes ' +cantidadDeVotos + ' votos!').toUpperCase();
    if (eleccionUsuario === 'A'){
        a++;
    } else if (eleccionUsuario === 'B'){
        b++;
    }else{
        votoImpugnado++
        alert('A o B !!')
    }
    sumaA = a
    sumaB = b
    sumavotoImpugnado = votoImpugnado
}
if (sumaA > sumaB) {
    alert('A ganó!! recibió '+sumaA +' votos!')
} else if (sumaB > sumaA) {
    alert('B ganó!! recibió '+sumaB +' votos!')
} else {
    if (sumavotoImpugnado > 1){
        palabraVoto = ' votos impugnados'
    }else {
        palabraVoto = ' voto impugnado'
    }
    alert('Se ha dado un Empate, ambos han obtenido ' + sumaA + ' votos y ha habido '+ sumavotoImpugnado + palabraVoto)
}
