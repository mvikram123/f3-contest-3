// Signup Function
function signup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('password').value;
  
    // Validate form fields
    if (!username || !password|| !email|| !confirm_password) {
      document.getElementById('signup-error').innerText = 'Please fill in all fields.';
      document.getElementById('signup-success').innerText = '';
      return;
    }
  
    // Generate access token
    const accessToken = generateAccessToken();
  
    // Save user state in local storage
    const user = {
      username: username,
      password: password,
      accessToken: accessToken
    };
    localStorage.setItem('user', JSON.stringify(user));
  
    // Show success message
    document.getElementById('signup-error').innerText = '';
    document.getElementById('signup-success').innerText = 'Signup successful! Redirecting...';
  
    // Redirect to profile page after 2 seconds
    setTimeout(function () {
      window.location.href = '/profile';
    }, 2000);
  }
  
  // Logout Function
  function logout() {
    // Clear user state from local storage
    localStorage.removeItem('user');
  
    // Redirect to signup page
    window.location.href = '/signup';
  }
  
  // Generate Access Token
  function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
}