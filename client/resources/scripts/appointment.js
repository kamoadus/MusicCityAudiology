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

var previousAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
    if (previousAppointmentData) {
        document.getElementById("UserID").value = previousAppointmentData.UserID;
        document.getElementById("payment").value = previousAppointmentData.PayMethod;
        document.getElementById("ApptLocation").value = previousAppointmentData.ApptLocation;
        document.getElementById("inlineDate").value = previousAppointmentData.ApptDate;
        document.getElementById("service-option1").checked = previousAppointmentData.HearingAids;
        document.getElementById("service-option2").checked = previousAppointmentData.EarmoldImpressions;
        document.getElementById("service-option3").checked = previousAppointmentData.CustomHearingProtection;
        document.getElementById("service-option4").checked = previousAppointmentData.EarCanalCleaning;
        document.getElementById("service-option5").checked = previousAppointmentData.AudiologyConsults;
        document.getElementById("service-option6").checked = previousAppointmentData.DeviceCleaning;
    }



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
          HearingAids: document.getElementById("service-option1").checked ? true : false,
          EarmoldImpressions: document.getElementById("service-option2").checked ? true : false,
          CustomHearingProtection: document.getElementById("service-option3").checked ? true : false,
          EarCanalCleaning: document.getElementById("service-option4").checked ? true : false,
          AudiologyConsults: document.getElementById("service-option5").checked ? true : false,
          DeviceCleaning: document.getElementById("service-option6").checked ? true : false,
        };
      
        var HearingAidServices = getCheckboxValues("HearingAids");
        var EarmoldImpressionsServices = getCheckboxValues("EarmoldImpressions");
        var CustomHearingProtectionServices = getCheckboxValues("CustomHearingProtection");
        var EarCanalCleaningServices = getCheckboxValues("EarCanalCleaning");
        var AudiologyConsultsServices = getCheckboxValues("AudiologyConsults");
        var DeviceCleaningServices = getCheckboxValues("DeviceCleaning");
      
        formData.selectedServices = [...HearingAidServices, ...EarmoldImpressionsServices, CustomHearingProtectionServices, EarCanalCleaningServices, AudiologyConsultsServices, DeviceCleaningServices];
      
        var appointmentEndTime = calculateAppointmentEndTime(formData.selectedServices);

        if (!isBusinessHours(appointmentEndTime)) {
            alert("Appointment would end after business hours (9:00 AM - 5:00 PM). Please select a different time.");
            return;}
      
        localStorage.setItem('appointmentData', JSON.stringify(formData));

        
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
            const appointmentId = response.json().id; 
        window.location.href = `appointmentConfirmation.html?id=${appointmentId}`;
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

    $(document).ready(function() {
        
        $('#service-option1, #service-option2, #service-option3, #service-option4, #service-option5, #service-option6').change(function() {
          var selectedServices = getSelectedServices(); 
          calculateAppointmentEndTime(selectedServices);
        });
      
        function getSelectedServices() {
          var services = [];
          $('input[name="HearingAids"]:checked').each(function() {
            services.push($(this).val());
          });
          $('input[name="EarmoldImpressions"]:checked').each(function() {
            services.push($(this).val());
          });
          return services;
        }
      });