namespace LMS_API.Services
{
    public interface IEmailService
    {
        void SendEmail(string ToEmail, string subject, string body);
    }
}
