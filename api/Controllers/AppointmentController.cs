using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
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
 
        // // GET: api/appointment/5
        // [HttpGet("{id}", Name = "Get")]
        // public string Get(int id)
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