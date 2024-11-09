const passwordInput = document.getElementById('password');
const passwordMessage = document.getElementById('passwordMessage');

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length < 8) {
        passwordMessage.textContent = 'Password must be at least 8 characters long.';
        passwordMessage.style.color = 'red';
    } else {
        passwordMessage.textContent = '';
    }
});
