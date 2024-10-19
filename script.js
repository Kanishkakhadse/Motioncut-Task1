document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('username-error').classList.remove('active');
    document.getElementById('password-error').classList.remove('active');

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate input
    let valid = true;
    if (username === "") {
        document.getElementById('username-error').classList.add('active');
        valid = false;
    }
    if (password === "") {
        document.getElementById('password-error').classList.add('active');
        valid = false;
    }

    // If valid, you can proceed with form submission
    if (valid) {
        alert("Login successful!");
        // Here, you can add the actual login logic (e.g., API call).
    }
});