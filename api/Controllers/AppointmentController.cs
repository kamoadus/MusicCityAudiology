using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.models;
using api.database;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        // GET: api/appointment
        [HttpGet]
        public List<Appointment> Get()
        {
            return Appointment.GetAllAppointments();
        }
 
        // POST: api/appointment
        [HttpPost]
        public void Post([FromBody] Appointment appointment)
        {
            Appointment utility = new Appointment();
            utility.AddAppointment(appointment);
        }
 
        // PUT: api/appointment/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] bool Approved)
        {
            UpdateAppointmentStatus(id, Approved);
        }

        private void UpdateAppointmentStatus(int appointmentId, bool approved)
        {
            Database database = new Database();
            using var con = database.GetPublicConnection();
            string stm = "UPDATE Appointment SET Approved = @Approved WHERE ApptID = @AppointmentId";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@Approved", approved);
            cmd.Parameters.AddWithValue("@AppointmentId", appointmentId);
    
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }
 
        // DELETE: api/appointment/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}