
// Adivinar la Palabra "ESC"

let entrada =  prompt('Adivina la Palabra', 'ej: Casa').toUpperCase();

while (entrada != 'ESC') {

    switch (entrada) {
        case 'CASA':
            alert('NOOO!, intentalo de nuevo amigui!');
            break;
        case 'HOLA':
            alert('NO NO!, intentalo de nuevo amigui!');
            break;
        case 'CHAU':
            alert('NOP!, intentalo de nuevo amigui!');
            break;
        default:
            alert('Tenes que adivinar la palabra, una pista: empieza con "E"');
            break;
    }

    entrada = prompt('Infrese otra palabra!').toUpperCase();

}

alert('Felicitaciones la palabra era ESC!!')