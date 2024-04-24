document.addEventListener("DOMContentLoaded", function() {
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
            format: 'g:i A',
            datepicker: false,
            step: 30,
            formatTime: 'g:i A',
            minTime: '9:00',
            maxTime: '17:00'
        });
    });
    
    
    document.addEventListener("DOMContentLoaded", function() {
        var userId = localStorage.getItem("userId");
        if (userId) {
            document.getElementById("UserID").value = userId;
        }
    });
    
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
    
        function handleSubmit(event) {
            event.preventDefault();

            console.log('Form submitted!');
        
            var formData = {
                UserID: document.getElementById("UserID").value,
                PayMethod: document.getElementById("payment").value,
                ApptLocation: document.getElementById("ApptLocation").value,
                ApptDate: document.getElementById("inlineDate").value,
                HearingAids: document.getElementById("HearingAids").value,
                EarmoldImpressions: document.getElementById("EarmoldImpressions").value,
                CustomHearingProtection: document.getElementById("CustomHearingProtection").value,
                EarCanalCleaning: document.getElementById("EarCanalCleaning").value,
                AudiologyConsults: document.getElementById("AudiologyConsults").value,
                DeviceCleaning: document.getElementById("DeviceCleaning").value,
            };
        
            console.log('Converted time:', formData.ApptTime);
        
            var selectedServices = getCheckboxValues("HearingAids");
            var selectedServices = getCheckboxValues("EarmoldImpressions");
            var selectedServices = getCheckboxValues("CustomHearingProtection");
            var selectedServices = getCheckboxValues("EarCanalCleaning");
            var selectedServices = getCheckboxValues("AudiologyConsults");
            var selectedServices = getCheckboxValues("DeviceCleaning");
            var appointmentEndTime = calculateAppointmentEndTime(selectedServices);
        
            if (!isBusinessHours(appointmentEndTime)) {
                alert("Appointment would end after business hours (9:00 AM - 5:00 PM). Please select a different time.");
                return;
            }
        
            fetch('http://localhost:5029/api/appointment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => {
                    if (response.ok) {
                        console.log('Appointment submitted successfully');
                    } else {
                        console.error('Error submitting appointment:', response.statusText);
                    }
                })
                .catch(error => {
                    console.error('Error submitting appointment:', error);
                });
        }
    
        function getCheckboxValues(checkboxName) {
            var values = [];
            var checkboxes = document.getElementsByName(checkboxName);
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    values.push(checkbox.value);
                }
            });
            return values;
        }
        
        function isBusinessHours(dateTime) {
            var hour = dateTime.getHours();
            return hour >= 9 && hour < 17; 
        }
        
        function calculateAppointmentEndTime(selectedServices) {
            var serviceDuration = 60;
            var totalDuration = selectedServices.length * serviceDuration;
        
            var appointmentStartDateTime = new Date(document.getElementById("inlineDate").value + " " + document.getElementById("inlineTime").value);
            var appointmentEndDateTime = new Date(appointmentStartDateTime.getTime() + totalDuration * 60000);
        
            document.getElementById("appointmentEndTime").innerText = "Appointment End Date & Time: " + appointmentEndDateTime.toLocaleString();
            return appointmentEndDateTime;
        }
        
});

