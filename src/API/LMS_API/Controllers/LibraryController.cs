using LMS_API.Data;
using LMS_API.Entities;
using LMS_API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private EmailService _emailService;
        private JWTServices _JWTServices;

        public LibraryController(ApplicationDbContext context, EmailService emailService, JWTServices jWTServices)
        {
            _context = context;
            _emailService = emailService;
            _JWTServices = jWTServices;
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

            //_emailService.SendEmail(user.Email, MailSubject, body);

            return Ok(@"
                        Thanks for registering.
                        Your Account has been sent for approval.
                        once approved you can login, you will get an email shortly.");
        }

        [HttpGet("Login")]
        public ActionResult Login(string email, string password)
        {
            if (_context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password)))
            {
                var user = _context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password));

                if (user.AccountStatus == AccountStatus.UNAPROVED)
                {
                    return Ok("UNAPROVED");
                    //return Ok("Your Account is not approved yet. Please wait for admin to approve your account. ");
                }
                if (user.AccountStatus == AccountStatus.BLOCKED)
                {
                    return Ok("BLOCKED");
                    //return Ok("Your Account is blocked. Please contact admin. ");
                }

                return Ok(_JWTServices.GenerateToken(user));
            }

            return Ok(@"Invalid_Credentials");
        }

        [Authorize]
        [HttpGet("GetBooks")]
        public ActionResult GetBooks()
        {
            if (_context.Books.Any())
            {
                return Ok(_context.Books.Include(b => b.BookCategory).ToList());
            }

            return NotFound();
        }

        [Authorize]
        [HttpPost("OrderBook")]
        public ActionResult OrderBook(int userId, int bookId)
        {
            var canOrder = _context.Orders.Count(o => o.UserId == userId && !o.Returned) < 3;
            if (canOrder)
            {
                var order = new Order
                {
                    UserId = userId,
                    BookId = bookId,
                    OrderDate = DateTime.Now,
                    Returned = false,
                    ReturnDate = null,
                    FinePaid = 0
                };

                _context.Orders.Add(order);

                var book = _context.Books.Single(b => b.Id == bookId);
                if (book is not null)
                {
                    book.Ordered = true;
                }

                _context.SaveChanges();

                return Ok("Ordered");
            }
            return Ok("Can not order");
        }


        [Authorize]
        [HttpGet("GetOrdersOfUsers")]
        public ActionResult GetOrdersOfUsers(int userId)
        {
            var orders = _context.Orders
                .Include(o => o.Book)
                .Include(o => o.User)
                .Where(o => o.UserId == userId)
                .ToList();

            if (orders is null)
            {
                return NotFound();
            }
            return Ok(orders);
        }

        [Authorize]
        [HttpGet("ReturnBook")]
        public ActionResult ReturnBook(int userId, int bookId, int fine)
        {
            var order = _context.Orders
                .Where(o => o.UserId == userId && o.BookId == bookId && o.Returned == false)
                .FirstOrDefault();
            if (order is not null)
            {
                order.Returned = true;
                order.ReturnDate = DateTime.Now;
                order.FinePaid = fine;

                var book = _context.Books.Single(b => b.Id == order.BookId);
                book.Ordered = false;

                _context.SaveChanges();
                return Ok("Returned");
            }
            return Ok("Not Returned");
        }

        [Authorize]
        [HttpGet("GetUsers")]
        public ActionResult GetUsers()
        {
            return Ok(_context.Users.ToList());
        }

        [Authorize]
        [HttpGet("ApproveRequest")]
        public ActionResult ApproveRequest(int userId)
        {
            var user = _context.Users
                .Where(u => u.Id == userId)
                .FirstOrDefault();
            if (user is not null)
            {
                if (user.AccountStatus == AccountStatus.UNAPROVED)
                {
                    user.AccountStatus = AccountStatus.ACTIVE;
                    _context.SaveChanges();

                    //_emailService.SendEmail(user.Email, "Account Approved", $"""
                    //    <html>
                    //        <body>
                    //            <h2>Hi, {user.FirstName} {user.LastName}</h2>
                    //            <h3>You Account has been approved by admin.</h3>
                    //            <h3>Now you can login to your account.</h3>
                    //        </body>
                    //    </html>
                    //""");

                    return Ok("Approved");
                }
            }
            return Ok("Not Approved");
        }


        [Authorize]
        [HttpGet("GetOrders")]
        public ActionResult GetOrders()
        {
            var orders = _context.Orders.Include(o => o.User).Include(o => o.Book).ToList();

            if (orders.Any())
            {
                return Ok(orders);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
