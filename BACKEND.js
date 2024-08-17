
const FIXED_KEY = 'MiClaveFija'; 

function xorCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function cipherPassword() {
    const password = document.getElementById('password').value;

    if (!password) {
        alert('Por favor ingresa una contraseña.');
        return;
    }

    const outputPassword = xorCipher(password, FIXED_KEY);
    document.getElementById('outputPassword').value = outputPassword;
}
