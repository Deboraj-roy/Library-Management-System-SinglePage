using ERPAPI.DTOclass;
using Microsoft.AspNetCore.Mvc;

namespace ERPAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgroConfigurationApiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AgroConfigurationApiController> _logger;
        private string _authKey;
        public AgroConfigurationApiController(IConfiguration configuration, ILogger<AgroConfigurationApiController> logger)
        {
            _configuration = configuration;
            _logger =  logger;
            this._authKey = "a2luZ0RhczExOTI=";

        }


        [HttpGet]
        public IActionResult GetAllBank(BankSetupDTO bankSetupDTO)
        {
            var data = _configuration["ConnectionStrings:Agriculture"];
            _logger.LogInformation($"test {data}");

            return Ok(Ok(_configuration["ConnectionStrings:Agriculture"]));
        }
    }
}
