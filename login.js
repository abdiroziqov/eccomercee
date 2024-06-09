// show password icon
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.src = type === 'password' ? '/image/eye.svg' : '/image/eye-closed.svg';
});

// login form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email.length < 5) {
        alert('Email must be at least 5 characters long');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    const loginData = {
        email: email,
        password: password
    };
    localStorage.setItem('loginData', JSON.stringify(loginData));


});
    //  success message
    alert('Account created successfully!');
});