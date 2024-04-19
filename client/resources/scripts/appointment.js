$(document).ready(function() {
    var today = new Date();
    $('#inlineDate').datetimepicker({
        inline: true,
        format: 'Y-m-d',
        timepicker: false,
        minDate: today
    });
    $('#inlineTime').datetimepicker({
        inline: true,
        format: 'H:i',
        datepicker: false
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var userId = localStorage.getItem("userId");
    if (userId) {
        document.getElementById("UserID").value = userId;
    }
});

function handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(document.getElementById("appointmentForm"));

    fetch('/api/appointment', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Appointment submitted successfully');
    })
    .catch(error => {
        console.error('There was a problem submitting the appointment:', error);
    });
}

document.getElementById("appointmentForm").addEventListener("submit", handleSubmit);
