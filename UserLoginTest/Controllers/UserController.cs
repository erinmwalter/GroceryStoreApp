using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserLoginTest.Models;

namespace UserLoginTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserDAL uDB = new UserDAL();

        //localhost/api/user/login/{username}/{password}
        [HttpPut("login/")]
        public bool Login(User u) 
        {
            bool userFound = uDB.Login(u);
            return userFound;
        }

        //localhost/api/user/current
        [HttpGet("current")]
        public User GetCurrentUser()
        {
            User u = uDB.GetCurrentUser();
            return u;
        }

        //localhost/api/user/logout
        [HttpPut("logout")]
        public int Logout(string logout)
        {
            int currUser = uDB.LogOut();
            return currUser;
        }

        [HttpPut("update/{id}")]
        public void UpdateUser(User u) {
            uDB.UpdateUser(u.UserId, u);
        }


    }
}
