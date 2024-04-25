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

    function displayAppointments() {

        var storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (!storedAppointments || Date.now() - storedAppointments.timestamp > 5 * 60 * 1000) {
            fetch('http://localhost:5029/api/appointment')
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('appointments', JSON.stringify({ data: data, timestamp: Date.now() }));
                    renderAppointments(data);
                })
                .catch(error => console.error('Error fetching appointments:', error));
        } else {
            renderAppointments(storedAppointments.data);
        }
    }
    
    function renderAppointments(data) {
        console.log('Rendering appointments:', data);
        const appointmentTableBody = document.getElementById('appointmentTableBody');
        appointmentTableBody.innerHTML = '';
    
        data.forEach(appointment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.apptDate}</td>
                <td>${appointment.apptLocation}</td>
                <td>
                    <button class="btn btn-success" onclick="acceptAppointment(${appointment.apptID})">Accept</button>
                    <button class="btn btn-danger" onclick="denyAppointment(${appointment.apptID})">Deny</button>
                </td>
            `;
            appointmentTableBody.appendChild(row);
        });
    }
    
    function acceptAppointment(appointmentId) {
        updateAppointmentStatus(appointmentId, true);
    }
    
    function denyAppointment(appointmentId) {
        updateAppointmentStatus(appointmentId, false);
    }
    
    function updateAppointmentStatus(appointmentId, status) {
        console.log(status)
        fetch(`http://localhost:5029/api/appointment/${appointmentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)
        })
        .then(response => {
            if (response.ok) {
                console.log(`Appointment ${appointmentId} ${status ? 'accepted' : 'denied'}`);
                displayAppointments(); 
            } else {
                console.error('Error updating appointment status:', response.statusText);
            }
        })
        .catch(error => console.error('Error updating appointment status:', error));
    }
    
    window.onload = displayAppointments;