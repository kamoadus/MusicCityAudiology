function checkPasswordsMatch() {
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMatchMessage = document.getElementById("passwordMatchMessage");
    
    if (password !== confirmPassword) {
        passwordMatchMessage.innerHTML = "Passwords do not match";
    } else {
        passwordMatchMessage.innerHTML = "";
    }
}

var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function() { stickyNav(); };

    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-50px";
        } else {
            navbar.style.top = "0"; 
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

function redirectToLoginPage() {
    event.preventDefault();

    var formData = {
        Username: document.getElementById("Username").value, 
        Password: document.getElementById("Password").value,
        Fname: document.getElementById("Fname").value, 
        Lname: document.getElementById("Lname").value 
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

