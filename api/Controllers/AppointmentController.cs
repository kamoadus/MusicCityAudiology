using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using api.models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class appointmentController : ControllerBase
    {
        // GET: api/appointment
        [HttpGet]
        public List<Appointment> Get()
        {
            
            return Appointment.GetAllAppointments();
        }
 
        // GET: api/appointment/5
        // [HttpGet("{id}", Name = "Get")]
        // public string Get(int ApptID)
        // {
        //     //select * from appt where userid = userid
        //     return "value";
        // }
 
        // POST: api/appointment
        [HttpPost]
        public void Post([FromBody] Appointment appointment)
        {
            Appointment utility = new Appointment();
            utility.AddAppointment(appointment);
        }
 
 
 
 
 
 
 
 
 
        // PUT: api/appointment/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
 
        // DELETE: api/appointment/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
 