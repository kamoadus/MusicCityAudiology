function fetchAppointments(startDate, endDate) {
    fetch(`api/appointment/range?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`)
        .then(response => response.json())
        .then(data => {
            renderCalendar(data);
        })
        .catch(error => console.error('Error fetching appointments:', error));
}

function renderCalendar(appointments) {
    const calendarDiv = document.getElementById('calendar');
    const calendarHTML = [];

    calendarHTML.push('<table>');
    calendarHTML.push('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
    
    // Loop through each day of the month
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        calendarHTML.push('<tr>');
        for (let i = 0; i < 7; i++) {
            if (currentDate.getMonth() == startDate.getMonth()) {
                const day = currentDate.getDate();
                const isAppointmentDay = appointments.some(appointment => new Date(appointment.ApptDate).getDate() === day);

                if (isAppointmentDay) {
                    calendarHTML.push(`<td class="appointment">${day}</td>`);
                } else {
                    calendarHTML.push(`<td>${day}</td>`);
                }
            } else {
                calendarHTML.push('<td></td>');
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        calendarHTML.push('</tr>');
    }

    calendarHTML.push('</table>');

    calendarDiv.innerHTML = calendarHTML.join('');
}