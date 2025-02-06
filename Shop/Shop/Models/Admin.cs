using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Shop.Models
{
    public class Admin
    {
        [Key]
        public int AdminID { get; set; }
        [Required, StringLength(50)]
        public String AdminName { get; set; }
        [Required, StringLength(255)]
        public String Password { get; set; }
        [Required, EmailAddress, StringLength(100)]
        public String Email { get; set; }
        [Required, StringLength(10)]
        public String PhoneNumber { get; set; }
        [Required]
        public String Status { get; set; }
    }
}
