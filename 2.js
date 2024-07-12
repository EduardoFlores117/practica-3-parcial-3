document.getElementById('check-btn').addEventListener('click', function() {
    let nota = parseInt(document.getElementById('grade-input').value);
    let alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = '';

    if (nota > 0 && nota <= 3) {
        showAlert('Tu nota es muy deficiente 😭', 'danger');
    } else if (nota > 3 && nota <= 5) {
        showAlert('Tu nota es insuficiente 🤐', 'warning');
    } else if (nota > 5 && nota <= 6) {
        showAlert('Tu nota es suficiente 🙂', 'info');
    } else if (nota > 6 && nota <= 7) {
        showAlert('Tu nota es buena 😊', 'primary');
    } else if (nota > 7 && nota <= 8) {
        showAlert('Tu nota es notable 🤐', 'success');
    } else if (nota > 8 && nota <= 10) {
        showAlert('Tu nota es SOBRESALIENTE, parfait! 😎', 'success');
    } else {
        showAlert('Uy, verifica si el número insertado es mayor que 0 🤨', 'danger');
    }
});

function showAlert(message, type) {
    let alertContainer = document.getElementById('alert-container');
    let alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;
    alertContainer.appendChild(alertDiv);
}