using System.ComponentModel.DataAnnotations;

namespace Shop.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        
        public string CategoryName { get; set; }
        public string Description { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Please enter valid price")]
        public int Price { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Please enter valid stock quantity")]
        public int InStock { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Please enter valid status quantity")]
        public int Status { get; set; } 

    }
}



