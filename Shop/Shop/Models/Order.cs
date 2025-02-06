using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Shop.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        [Required]
        public int CustomerID { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        [Column(TypeName = "decimal(10,2")]
        public decimal TotalPrice { get; set; }
        public String Note { get; set; }
        [Required]
        public String OrderStatus { get; set; }
    }
}
