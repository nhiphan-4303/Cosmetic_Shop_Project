using Microsoft.AspNetCore.Mvc;

namespace Shop.Controllers
{
    public class ClientHomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Category()
        {
            return View();
        }

        public IActionResult ShoppingCart()
        {
            return View();
        }

        public IActionResult ProductDetail()
        {
            return View();
        }
    }
}
