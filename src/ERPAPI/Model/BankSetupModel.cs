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



        public Task<object> GetAllBankAsync()
        {
            var _connectionString = _configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
            AdoNetUtility adoNetUtility = new AdoNetUtility(_connectionString);

            string tableName = "Agriculture.dbo.tblBankInfo";
            IEnumerable<string> columns = new[] { "BankId", "BankName", "MobileNumber", "AccountNumber", "Email", "OrganizationId", "RoleId", "UpdateDate", "UpdateUserId", "EntryDate", "EntryUserId", "Status" };
            string whereClause = "BankId = @BankId";
            string orderBy = "BankName ASC";
            int? top = 1000;

            var Query = "" +
                "SELECT TOP (1000) [BankId]," +
                "[BankName]," +
                "[MobileNumber]," +
                "[AccountNumber]," +
                "[Email]    ," +
                "[OrganizationId]  ," +
                "[RoleId]   ," +
                "[UpdateDate]" +
                "     ,[UpdateUserId]      ," +
                "[EntryDate]      ,[EntryUserId]      ,[Status]  FROM [Agriculture].[dbo].[tblBankInfo] ";

            string query = adoNetUtility.GenerateQuery(tableName, columns, whereClause, orderBy, top);

            Console.WriteLine(query);

            var obj = adoNetUtility.ExecuteQuery(Query);

            return Task.FromResult<object>(obj);
        }

        internal void Resolve(ILifetimeScope scope, IConfiguration configuration)
        {
            _scope = scope;
            _configuration = configuration;
        }
    }
}
