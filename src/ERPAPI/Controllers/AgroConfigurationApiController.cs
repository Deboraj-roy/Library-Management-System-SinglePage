using Autofac;
using ERPAPI.DTOclass;
using ERPAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace ERPAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgroConfigurationApiController : ControllerBase
    {
        private readonly ILogger<AgroConfigurationApiController> _logger;
        private ILifetimeScope _scope;
        private IConfiguration _configuration;
        private string _authKey;
        public AgroConfigurationApiController(IConfiguration configuration, ILogger<AgroConfigurationApiController> logger, ILifetimeScope scope)
        {
            _logger =  logger;
            this._authKey = "a2luZ0RhczExOTI=";
            _scope = scope;
            _configuration = configuration;
        }


        [HttpPost]
        //public async Task<IActionResult> GetAllBankAsync([FromBody]BankSetupModel model)
        public async Task<ActionResult> GetAllBankAsync([FromBody]BankSetupModel model)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Status = 201;
            apiResponse.Message = "auth failed";
            //var result = "";

            model.Resolve(_scope, _configuration);

            //if (model.AuthKey == this._authKey)
            if (model.AuthKey.Equals(this._authKey))
            {


                var banks = await model.GetAllBankAsync(model.OrgId);
                _logger.LogInformation($"GetAllBank: {banks}");
                 



                if (banks != null)
                {
                    //var emdata = GetFiscalYear.FirstOrDefault();
                    //emdata.AuthKey = this.AuthKey;
                    apiResponse.Status = 200;
                    apiResponse.Message = "auth success";
                    apiResponse.Data = banks;
                    return Ok(apiResponse);
                }
                else
                {
                    apiResponse.Message = "auth failed";
                    //apiResponse.Message = result;
                }

            }
            else
            {
                apiResponse.Message = "Auth Failed";

            }

            return Ok(apiResponse);
           
        }
    }
}
