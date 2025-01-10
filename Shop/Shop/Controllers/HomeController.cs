using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop.Data;
using Shop.Models;

namespace Shop.Controllers
{
    public class HomeController : Controller
    {
        private readonly ShopContext _context;
        public HomeController(ShopContext context)
        {
            _context = context;
        }

        //private readonly ILogger<HomeController> _logger;

        //public HomeController(ILogger<HomeController> logger)
        //{
        //    _logger = logger;
        //}

        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult ProductCategory()
        //{
        //    return View();
        //}

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
