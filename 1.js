document.getElementById('verify-btn').addEventListener('click', function() {
    const edadInput = document.getElementById('age-input').value.trim();

    if (edadInput === '' || isNaN(edadInput) || parseInt(edadInput) <= 0 || parseInt(edadInput) > 99) {
        showAlert('Por favor, introduce una edad válida (entre 1 y 99 años).', 'danger');
        return;
    }

    const edad = parseInt(edadInput, 10);

    if (edad >= 18) {
        showAlert('¡Eres mayor de edad y puedes conducir!', 'success');
    } else {
        showAlert('Eres menor de edad y no puedes conducir aún.', 'info');
    }
});

function showAlert(message, type) {
    const alertContainer = document.getElementById('age-verification-section');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} mt-3`;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;

    const existingAlert = alertContainer.querySelector('.alert');
    if (existingAlert) {
        alertContainer.removeChild(existingAlert);
    }

    alertContainer.appendChild(alertDiv);
}
