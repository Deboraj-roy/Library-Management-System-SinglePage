using LMS_API.Data;
using LMS_API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LibraryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("Register")]
        public ActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPROVED;
            user.UserType = UserType.STUDENT;
            user.CreatedOn = DateTime.Now;

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(@"
                        Thanks for registering.
                        Your Account has been sent for approval.
                        once approved you can login, you will get an email shortly.");
        }

    }
}
