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
    }
}