document.getElementById('calculate-btn').addEventListener('click', function() {
    const dniInput = document.getElementById('dni-input').value.trim();

    if (dniInput === '' || isNaN(dniInput) || dniInput.length !== 8 || parseInt(dniInput) < 0 || parseInt(dniInput) > 99999999) {
        showAlert('Por favor, introduce un número de DNI válido.', 'danger');
        return;
    }

    const dni = parseInt(dniInput, 10);
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letter = letters[dni % 23];
    const resultado = `DNI: ${dni}-${letter}`;
    showAlert(resultado, 'success');
});

document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
});

function showAlert(message, type) {
    const alertContainer = document.getElementById('result-container');
    alertContainer.innerHTML = ''; 
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;
    alertContainer.appendChild(alertDiv);
}
