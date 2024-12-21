using System.ComponentModel.DataAnnotations;

namespace Shop.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int InStock { get; set; }
        public int Status { get; set; } 

    }
}
