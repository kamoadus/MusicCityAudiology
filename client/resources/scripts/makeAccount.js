function checkPasswordMatch(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMatchMessage");

    if (password === confirmPassword) {
            message.innerHTML = "Passwords match.";
            message.style.color = "green";
    } else {
            message.innerHTML = "Passwords do not match!";
            message.style.color = "red";
     }
}

function redirectToLoginPage(){
    window.location.href = "login.html";
}