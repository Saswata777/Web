document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Get the input values
    const firstName = document.getElementById('firstName').value;
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('retypePassword').value;

    // Get the warning message element
    const warningMessage = document.getElementById('warningMessage');

    // Initialize a message
    let message = '';

    // Check if first name is blank
    if (firstName.trim() === '') {
        message = 'First name is required.';
    } 
    // Check if passwords don't match
    else if (password !== retypePassword) {
        message = 'Passwords do not match. Please try again.';
    }

    // If there is a message, prevent form submission and show the message
    if (message !== '') {
        event.preventDefault(); // Prevent form submission
        warningMessage.textContent = message;
    } else {
        warningMessage.textContent = ''; // Clear the message if no errors
    }
});
