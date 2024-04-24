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


    function fetchPendingAppointments() {
        fetch('http://localhost:5029/api/appointments') 
            .then(response => response.json())
            .then(appointments => {
                const appointmentsBody = document.getElementById('pending-appointments-body');
                appointmentsBody.innerHTML = ''; 

                appointments.forEach(appointment => {
                    if (appointment.status === 'pending') { 
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${appointment.name}</td>
                            <td>${appointment.email}</td>
                            <td>${appointment.date}</td>
                            <td>
                                <button onclick="acceptAppointment('${appointment.id}')">Accept</button>
                                <button onclick="denyAppointment('${appointment.id}')">Deny</button>
                            </td>
                        `;
                        appointmentsBody.appendChild(row);
                    }
                });
            })
            .catch(error => console.error('Error fetching pending appointments:', error));
    }
    function acceptAppointment(appointmentId) {
        handleAppointmentStatus(appointmentId, 'accepted');
    }
    function denyAppointment(appointmentId) {
        handleAppointmentStatus(appointmentId, 'denied');
    }
    function handleAppointmentStatus(appointmentId, status) {
        fetch(`http://localhost:5029/api/appointments/${appointmentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
        .then(response => {
            if (response.ok) {
                fetchPendingAppointments(); 
            } else {
                throw new Error('Failed to update appointment status');
            }
        })
        .catch(error => console.error('Error updating appointment status:', error));
    }

    fetchPendingAppointments();