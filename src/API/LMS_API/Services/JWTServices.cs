using LMS_API.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LMS_API.Services
{
    public class JWTServices
    {
        //private readonly IConfiguration _configuration;
        private readonly string _key;
        private readonly int DurationInMinutes;
        private readonly string _issuer;
        private readonly string _adience;

        public JWTServices(IConfiguration configuration)
        {
            _key = configuration["JWT:Key"]!;
            DurationInMinutes = int.Parse(configuration["JWT:DurationInMinutes"]!);
            _issuer = configuration["JWT:Issuer"]!;
            _adience = configuration["JWT:Audience"]!;
        }

        // for creating token for user login property
        public string GenerateToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));
            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("id", user.Id.ToString()),
                new Claim("firstName", user.FirstName),   
                new Claim("lastName", user.LastName),     
                new Claim("email", user.Email),
                new Claim("mobileNumber", user.MobileNumber),
                new Claim("userType", user.UserType.ToString()),
                new Claim("accountStatus", user.AccountStatus.ToString()),
                new Claim("createdOn", user.CreatedOn.ToString()),

            };

            var JWTToken = new JwtSecurityToken(
                issuer: _issuer,
                audience: _adience,
                claims: claims,
                notBefore: DateTime.Now,
                expires: DateTime.Now.AddMinutes(DurationInMinutes),
                signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(JWTToken);

        }
    }
}
