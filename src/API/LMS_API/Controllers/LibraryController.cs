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
        [HttpPost("AddCategory")]
        public ActionResult AddCategory(BookCategory bookCategory)
        {
            var exists = _context.BookCategories.Any(bc => bc.Category == bookCategory.Category && bc.SubCategory == bookCategory.SubCategory);
            if (exists)
            {
                return Ok("cannot insert");
            }
            else
            {
                _context.BookCategories.Add(new()
                {
                    Category = bookCategory.Category,
                    SubCategory = bookCategory.SubCategory
                });
                _context.SaveChanges();
                return Ok("INSERTED");
            }
        }

        [Authorize]
        [HttpGet("GetCategories")]
        public ActionResult GetCategories()
        {
            var categories = _context.BookCategories.ToList();
            if (categories.Any())
            {
                return Ok(categories);
            }
            return NotFound();
        }

        [Authorize]
        [HttpPost("AddBook")]
        public ActionResult AddBook(Book book)
        {
            book.BookCategory = null;
            _context.Books.Add(book);
            _context.SaveChanges();
            return Ok("inserted");
        }

        [Authorize]
        [HttpDelete("DeleteBook")]
        public ActionResult DeleteBook(int id)
        {
            var exists = _context.Books.Any(b => b.Id == id);
            if (exists)
            {
                var book = _context.Books.Find(id);
                _context.Books.Remove(book!);
                _context.SaveChanges();
                return Ok("deleted");
            }
            return NotFound();
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


        [Authorize]
        [HttpGet("SendEmailForPendingReturns")]
        public ActionResult SendEmailForPendingReturns()
        {
            var orders = _context.Orders
                            .Include(o => o.Book)
                            .Include(o => o.User)
                            .Where(o => !o.Returned)
                            .ToList();

            var emailsWithFine = orders.Where(o => DateTime.Now > o.OrderDate.AddDays(10)).ToList();
            emailsWithFine.ForEach(x => x.FinePaid = (DateTime.Now - x.OrderDate.AddDays(10)).Days * 50);

            var firstFineEmails = emailsWithFine.Where(x => x.FinePaid == 50).ToList();
            firstFineEmails.ForEach(x =>
            {
                var body = $"""
                <html>
                    <body>
                        <h2>Hi, {x.User?.FirstName} {x.User?.LastName}</h2>
                        <h4>Yesterday was your last day to return Book: "{x.Book?.Title}".</h4>
                        <h4>From today, every day a fine of 50 BDT will be added for this book.</h4>
                        <h4>Please return it as soon as possible.</h4>
                        <h4>If your fine exceeds 500Rs, your account will be blocked.</h4>
                        <h4>Thanks</h4>
                    </body>
                </html>
                """;

                //_emailService.SendEmail(x.User!.Email, "Return Overdue", body);
            });

            var regularFineEmails = emailsWithFine.Where(x => x.FinePaid > 50 && x.FinePaid <= 500).ToList();
            regularFineEmails.ForEach(x =>
            {
                var regularFineEmailsBody = $"""
                <html>
                    <body>
                        <h2>Hi, {x.User?.FirstName} {x.User?.LastName}</h2>
                        <h4>You have {x.FinePaid} BDT fine on Book: "{x.Book?.Title}"</h4>
                        <h4>Please pay it as soon as possible.</h4>
                        <h4>Thanks</h4>
                    </body>
                </html>
                """;

                //_emailService.SendEmail(x.User?.Email!, "Fine To Pay", regularFineEmailsBody);
            });

            var overdueFineEmails = emailsWithFine.Where(x => x.FinePaid > 500).ToList();
            overdueFineEmails.ForEach(x =>
            {
                var overdueFineEmailsBody = $"""
                <html>
                    <body>
                        <h2>Hi, {x.User?.FirstName} {x.User?.LastName}</h2>
                        <h4>You have {x.FinePaid} BDT fine on Book: "{x.Book?.Title}"</h4>
                        <h4>Your account is BLOCKED.</h4>
                        <h4>Please pay it as soon as possible to UNBLOCK your account.</h4>
                        <h4>Thanks</h4>
                    </body>
                </html>
                """;

                //_emailService.SendEmail(x.User?.Email!, "Fine Overdue", overdueFineEmailsBody);
            });

            return Ok("sent");
        }

        [Authorize]
        [HttpGet("BlockFineOverdueUsers")]
        public ActionResult BlockFineOverdueUsers()
        {
            var orders = _context.Orders
                            .Include(o => o.Book)
                            .Include(o => o.User)
                            .Where(o => !o.Returned)
                            .ToList();

            var emailsWithFine = orders.Where(o => DateTime.Now > o.OrderDate.AddDays(10)).ToList();
            emailsWithFine.ForEach(x => x.FinePaid = (DateTime.Now - x.OrderDate.AddDays(10)).Days * 50);

            var users = emailsWithFine.Where(x => x.FinePaid > 500).Select(x => x.User!).Distinct().ToList();

            if (users is not null && users.Any())
            {
                foreach (var user in users)
                {
                    user.AccountStatus = AccountStatus.BLOCKED;
                }
                _context.SaveChanges();

                return Ok("blocked");
            }
            else
            {
                return Ok("not blocked");
            }
        }


        [Authorize]
        [HttpGet("Unblock")]
        public ActionResult Unblock(int userId)
        {
            var user = _context.Users.Find(userId);
            if (user is not null && user.AccountStatus == AccountStatus.BLOCKED)
            {
                user.AccountStatus = AccountStatus.ACTIVE;
                _context.SaveChanges();
                return Ok("unblocked");
            }

            return Ok("not unblocked");
        }

    }
}
