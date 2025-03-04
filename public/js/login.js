document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const email = document.getElementById('loginEmail').value;
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: document.getElementById('loginPassword').value
            })
        });
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userEmail', email);
            window.location.href = '/dashboard.html';
        } else {
            if (data.msg === 'Invalid credentials') {
                alert('Email is not registered or password is incorrect. Please register first.');
            } else {
                alert(data.msg || 'Login failed. Please try again.');
            }
        }
    } catch (error) {
        alert('Error during login. Please check your connection and try again.');
        console.error('Login error:', error);
    }
});