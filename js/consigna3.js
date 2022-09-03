
// Ingresar un Numero y la Palabra Hola, la cantidad de veces del alerta del mensaje será igual al numero ingresado.

let numeroIngresado = Number(prompt("Ingresa tu numero favorito"));
let mensaje = prompt('Ingresá la palabra "Hola"').toUpperCase();

if (mensaje === 'HOLA'){
    for (let i = 1; i <= numeroIngresado; i++) {
        alert(mensaje)
    }
}else{
    alert('Por favor, ingresá la palabra "Hola"')
}