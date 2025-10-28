function validateForm(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    clearErrorMessages();
    document.getElementById('successMessage').textContent = '';

    if (name === '') {
        displayError('nameError', 'Name is required.');
        isValid = false;
    }

    if (email === '') {
        displayError('emailError', 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('emailError', 'Please enter a valid email address (e.g., user@domain.com).');
        isValid = false;
    }
 if (password === '') {
        displayError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (confirmPassword === '') {
        displayError('confirmPasswordError', 'Confirming the password is required.');
        isValid = false;
    } else if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (message === '') {
        displayError('messageError', 'A message is required.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        return false;
    } else {
        event.preventDefault(); 
        document.getElementById('successMessage').textContent = 'Registration successful! (Form not submitted to server)';
        document.getElementById('registrationForm').reset();
        return false; 
    }
}

function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrorMessages() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}