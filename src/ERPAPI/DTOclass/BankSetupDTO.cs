namespace ERPAPI.DTOclass
{
    public class BankSetupDTO
    {
        
        public long BankId { get; set; }
        public string BankName { get; set; }
        public string MobileNumber { get; set; }
        public string AccountNumber { get; set; }
        public string Email { get; set; }
        public long OrganizationId { get; set; }
        public long RoleId { get; set; }
        public DateTime? UpdateDate { get; set; }
        public long UpdateUserId { get; set; }
        public DateTime? EntryDate { get; set; }
        public long EntryUserId { get; set; }
        public string Status { get; set; }
        public string UserName { get; set; }
        public string OrganizationName { get; set; }
        public long OrgId { get; set; }
        public string AuthKey { get; set; }

    }
}
