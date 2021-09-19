using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            var Users = _context.Users.ToList();

            return Users;
        }

        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUsers(int id)
        {
            var User = _context.Users.Find(id);

            return User;
        }
    }
}
