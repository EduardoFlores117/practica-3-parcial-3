document.getElementById('add-btn').addEventListener('click', function() {
    let cadenas = [];
    let input;

    while (true) {
        input = prompt('Inserta el texto (o presiona Cancelar para terminar):');
        if (input === null) {
            break;
        }
        cadenas.push(input);
    }

    if (cadenas.length > 0) {
        document.getElementById('display-section').innerText = cadenas.join(' - ');
    } else {
        document.getElementById('display-section').innerText = 'No se ingresaron cadenas.';
    }
});

document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
});