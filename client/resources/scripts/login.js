async function submitForm() {
    console.log('is this even running')
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

    //  => {
    //     if (response.ok) {
            // alert('Login successful!');
            // //console.log(response)
            // //window.location.href = './appointment.html';
        // } else {
        //     alert('Login failed. Please try again');
        // }
    // })
    // .catch(error => {
    //     console.error('Error submitting form:', error);
    //     alert('An error occurred while processing your request. Please try again later.');
    // });
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