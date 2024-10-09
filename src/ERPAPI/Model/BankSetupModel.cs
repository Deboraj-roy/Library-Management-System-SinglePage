using Autofac;
using ERPAPI.Data;
using ERPAPI.DTOclass;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace ERPAPI.Model
{
    public class BankSetupModel
    {
        private ILifetimeScope _scope; public long BankId { get; set; }
        private IConfiguration _configuration;
        public string? BankName { get; set; }
        public string? MobileNumber { get; set; }
        public string? AccountNumber { get; set; }
        public string? Email { get; set; }
        public long? OrganizationId { get; set; }
        public long? RoleId { get; set; }
        public DateTime? UpdateDate { get; set; }
        public long? UpdateUserId { get; set; }
        public DateTime? EntryDate { get; set; }
        public long? EntryUserId { get; set; }
        public string? Status { get; set; }
        public string? UserName { get; set; }
        public string? OrganizationName { get; set; }
        public long OrgId { get; set; } = 0;
        public string? AuthKey { get; set; }


        public BankSetupModel()
        {
            
        }


       /* public async Task<object> GetBanksAsync(long? orgId)
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "tblBankInfo";
            IEnumerable<string> columns = new[] { "*" };

            string whereClause = "OrganizationId = @OrganizationId";

            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause);

            var paramiters = new Dictionary<string, object>
                                        {
                                            { "@OrganizationId", orgId }
                                        };

            var obj = await adoNetUtility.ExecuteQueryAsync(query, paramiters);

            return obj;
        }*/


        public async Task<object> GetAllBankAsync(long orgId)
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "tblBankInfo";
            IEnumerable<string> columns = new[] { "*" };
            string whereClause = "OrganizationId = @orgId";  // Assuming you are using the parameter correctly in the query

            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause);

            var parameters = new Dictionary<string, object>
                    {
                        { "@orgId", orgId }  // Use a meaningful parameter name
                    };

            //Dictionary parameters

            var result = await adoNetUtility.ExecuteQueryAsync(query, parameters);

            return result;
        }



        public async Task<object> GetAllBankAsync(long? orgId)
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "tblBankInfo";
            IEnumerable<string> columns = new[] { "*" };


            //command.Parameters.AddWithValue($"@Param{i}", parameters[i] ?? DBNull.Value);  // Handles null values
            //thats why use index for paramiters instead of name @Param{i} 

            string whereClause = "OrganizationId = @Param0";  // Matching parameter name with ExecuteQuery

            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause);

            //working
            //var paramiters = new object[] { orgId };

            var paramiters = new object[]
            {
                orgId
            };

            //Object parameters

            var result = await adoNetUtility.ExecuteQueryAsync(query, paramiters);
            //var result = await adoNetUtility.ExecuteQueryAsync(query, new object[] { orgId });

            return result;
        }


        internal void Resolve(ILifetimeScope scope, IConfiguration configuration)
        {
            _scope = scope;
            _configuration = configuration;
        }
    }
}
