
// El cliente elige A o B una cierta cantidad de veces seteada en en el for (ej: i <= 10), o bien puede ingresar cualquier otro caracter.
// Al finalizar el cilco nos dara el resultado de cual de las dos letras tiene mas votos o si hay un empate.

let eleccionUsuario = "";
let a = 0;
let b = 0;
let sumaA;
let sumaB;


for (let i = 1; i <= 10; i++) {
    let eleccionUsuario = prompt('Elegí A o B, tenes 5 votos!').toUpperCase();
    if (eleccionUsuario === 'A'){
        a++;
    } else if (eleccionUsuario === 'B'){
        b++;
    }else{
        alert('A o B !!')
    }
    sumaA = a
    sumaB = b
}
if (sumaA > sumaB) {
    alert('A ganó!! recibió '+sumaA +' votos!')
} else if (sumaB > sumaA) {
    alert('B ganó!! recibió '+sumaB +' votos!')
} else {
    alert('Se ha dado un Empate.')
}
