using Autofac;
using ERPAPI.Data;
using ERPAPI.DTOclass;

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
        public long? OrgId { get; set; }
        public string? AuthKey { get; set; }


        public BankSetupModel()
        {
            
        }
        //public BankSetupModel()
        //{

        //}



        public Task<object> GetAllBanAsync(long? orgId)
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "tblBankInfo";
            //IEnumerable<string> columns = new[] { "BankId", "BankName", "MobileNumber", "AccountNumber", "Email", "OrganizationId", "RoleId", "UpdateDate", "UpdateUserId", "EntryDate", "EntryUserId", "Status" };
            IEnumerable<string> columns = new[] { "*" };
            //string columns = "*";
            string whereClause = "OrganizationId = @orgId";
            
            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause);

            var obj = adoNetUtility.ExecuteQuery(query, new object[] { orgId });

            return Task.FromResult<object>(obj);
        }

        public async Task<object> GetAllBankAsync(long? orgId)
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "tblBankInfo";
            IEnumerable<string> columns = new[] { "*" };
            string whereClause = "OrganizationId = @Param0";  // Matching parameter name with ExecuteQuery

            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause);

            var result = await adoNetUtility.ExecuteQueryAsync(query, new object[] { orgId });

            return result;
        }


        internal void Resolve(ILifetimeScope scope, IConfiguration configuration)
        {
            _scope = scope;
            _configuration = configuration;
        }
    }
}
