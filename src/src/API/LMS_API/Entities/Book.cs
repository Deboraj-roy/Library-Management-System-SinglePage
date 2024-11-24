namespace LMS_API.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public float Price { get; set; }
        public bool Ordered { get; set; }
        public int BookCategoryId { get; set; }

        public BookCategory? BookCategory { get; set; }

    }
}
