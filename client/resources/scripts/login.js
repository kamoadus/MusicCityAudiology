async function submitForm() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let response = await fetch('http://localhost:5029/api/user/'+ username + '/' + password)
    let data = await response.json();
    console.log(data);
    if(data != 0) {
        alert('Login successful!');
        localStorage.setItem('userId', data);
        window.location.href = './appointment.html';
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