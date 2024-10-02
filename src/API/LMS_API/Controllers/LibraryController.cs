using LMS_API.Data;
using LMS_API.Entities;
using LMS_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private EmailService _emailService;

        public LibraryController(ApplicationDbContext context, EmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        [HttpPost("Register")]
        public ActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPROVED;
            user.UserType = UserType.STUDENT;
            user.CreatedOn = DateTime.Now;

            _context.Users.Add(user);
            _context.SaveChanges();

            var MailSubject = "Account Created";
            var body = $"""
                <html>
                <body>
                    <h1>Hello, {user.FirstName} {user.LastName}</h1>
                    <h2>
                        Your Account has been created successfully and we have sent an appoval request to admin,
                        once the request is approved by admin, you will get an email and you can login.
                        </h2>
                        <h3> Thank you. </h3>
                </html>
                """;

            _emailService.SendEmail(user.Email, MailSubject, body);

            return Ok(@"
                        Thanks for registering.
                        Your Account has been sent for approval.
                        once approved you can login, you will get an email shortly.");
        }

    }
}
