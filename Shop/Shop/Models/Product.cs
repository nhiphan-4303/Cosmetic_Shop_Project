using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        [Required, StringLength(50)]
        public String ProductName { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(10,2")]
        public decimal Price { get; set; }
        [StringLength(50)]
        public string ImageURL { get; set; }
        public int InStock { get; set; }
        [Required]
        public String ProductStatus { get; set; }
    }
}




