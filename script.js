document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;

    // Simple validation message
    if (name && email) {
        alert(`Thank you, ${name}, for registering. We will contact you soon!`);
    } else {
        alert('Please fill in all the required fields.');
    }

    // Reset form fields
    this.reset();
});
