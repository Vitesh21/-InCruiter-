document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.getElementById('registerEmail').value,
                password: document.getElementById('registerPassword').value
            })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Registration successful!');
            localStorage.setItem('token', data.token);
            window.location.href = '/login.html';
        } else {
            alert(data.msg || 'Registration failed');
        }
    } catch (error) {
        alert('Error during registration');
    }
});