// Check if user is logged in
const token = localStorage.getItem('token');
if (!token) {
    alert('Please login first!');
    window.location.href = '/login.html';
}

document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.getElementById('forgotEmail').value
            })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Password reset email sent!');
        } else {
            alert(data.msg || 'Password reset request failed');
        }
    } catch (error) {
        alert('Error during password reset request');
    }
});