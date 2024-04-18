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
    public class userController : ControllerBase
    {
        // GET: api/user
        [HttpGet]
        public List<UserInfo> Get()
        {
            return UserInfo.GetAllUserInfo();
        }
 
        // GET: api/user/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
 
        // POST: api/user
        [HttpPost]
        public void Post([FromBody] UserInfo user_Info)
        {
            // Hash the password before storing it
            string hashedPassword = HashPassword(user_Info.Password);
            user_Info.Password = hashedPassword;
 
            // Save the user info to the database
            UserInfo utility = new UserInfo();
            utility.AddUser(user_Info);
        }
 
        // PUT: api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
 
        // DELETE: api/user/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
 
        // Method to hash a password
        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}