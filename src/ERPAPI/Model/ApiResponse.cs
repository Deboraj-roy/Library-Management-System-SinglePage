namespace ERPAPI.Model
{
    public class ApiResponse
    {
        public string Message { get; set; }
        public dynamic Data { get; set; }
        public string ResponseCode { get; set; }
        public int Status { get; set; }
        public bool IsSuccess { get; set; }
    }
}
