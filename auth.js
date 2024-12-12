document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('loginPassword').value;
            const userName= document.getElementById('loginUserName').value;
            if (userName && password) {
                localStorage.setItem('user', JSON.stringify({ userName }));
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            if (name && email && password) {
                localStorage.setItem('user', JSON.stringify({ name, email, password }));
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});