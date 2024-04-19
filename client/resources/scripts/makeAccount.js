function redirectToLoginPage() {
    event.preventDefault();

    var formData = {
        Username: document.getElementById("Username").value, // Make sure the ID matches the HTML element
        Password: document.getElementById("Password").value, // Make sure the ID matches the HTML element
        Fname: document.getElementById("Fname").value, // Make sure the ID matches the HTML element
        Lname: document.getElementById("Lname").value // Make sure the ID matches the HTML element
    };

    fetch('http://localhost:5029/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = './login.html';
        } else {
            console.error('Error submitting form:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
}