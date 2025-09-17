using Microsoft.IdentityModel.Tokens;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace LMS_API.Services
{
    public class EmailService
    {
        public IConfiguration Configuration { get; }
        public EmailService(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void SendEmail(string ToEmail, string subject, string body)
        {
            //var gmailConfigure = false;
            var mailClient = Configuration.GetSection("SMTP:Client").Value ?? string.Empty;
            var fromEmail = Configuration.GetSection("SMTP:FromEmail").Value ?? string.Empty;
            var userName = Configuration.GetSection("SMTP:Username").Value ?? string.Empty;
            var fromEmailPassword = Configuration.GetSection("SMTP:EmailAccountPassword").Value ?? string.Empty;
            var smtpHost = Configuration.GetSection("SMTP:Host").Value ?? string.Empty;
            var port = int.Parse(Configuration.GetSection("SMTP:Port").Value ?? string.Empty);

            if (mailClient == "gmail")
            {

            }
            else
            {
                fromEmail = "p13839740@gmail.com";
                userName = "2032fbaa2dd6f6";
                fromEmailPassword = "135756f590ea4d";
                smtpHost = "sandbox.smtp.mailtrap.io";
                port = 587;
            }

            //var fromEmail = "Deb@dotnet.com";
            //var userName = "2032fbaa2dd6f6";
            //var fromEmailPassword = "135756f590ea4d";
            //var smtpHost = "sandbox.smtp.mailtrap.io";
            //var port = 587;



            var message = new MailMessage()
            {
                From = new MailAddress(fromEmail),
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };

            if (string.IsNullOrEmpty(ToEmail))
            {
                throw new ArgumentNullException(nameof(ToEmail));
            }

            //define a regex pattern for email validation
            string pattern = @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$";
            Regex regex = new Regex(pattern);

            // return true if email is valid pattern
            var result =  regex.IsMatch(ToEmail);

            if (result)
            {
                message.To.Add(ToEmail);

                var smtpClient = new SmtpClient(smtpHost)
                {
                    Port = Convert.ToInt32(port),
                    Credentials = new System.Net.NetworkCredential(userName, fromEmailPassword),
                    EnableSsl = true
                };

                smtpClient.Send(message);
                smtpClient.Dispose();
            }
            else
            {
                throw new ArgumentException("Invalid email address.");
            }


        }
    }
}
