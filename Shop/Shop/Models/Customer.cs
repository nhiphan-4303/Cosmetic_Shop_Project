using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Shop.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        [Required, StringLength(50)]
        public String CustomerName { get; set; }
        [Required, StringLength(255)]
        public String Password { get; set; }
        [Required, EmailAddress, StringLength(100)]
        public String Email { get; set; }
        [Required, StringLength(100)]
        public String Address { get; set; }
        [Required, StringLength(10)]
        public String PhoneNumber { get; set; }
        [Required]
        public String Status { get; set; }
    }
}
