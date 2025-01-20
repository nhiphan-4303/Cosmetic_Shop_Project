using Microsoft.AspNetCore.Mvc;

namespace Shop.Controllers
{
    public class ClientHomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
