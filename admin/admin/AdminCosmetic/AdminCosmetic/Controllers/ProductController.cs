using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminCosmetic.Respository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AdminCosmetic.Controllers
{
    
    public class ProductController : Controller
    {
        private readonly DataContext _dataContext;

        public ProductController(DataContext context)
        {
            _dataContext = context;
        }
        // GET: /<controller>/

        ///
        //public async Task<IActionResult> Index()
        //{
        //    return View(await _dataContext.Products.OrderByDescending(p => p.Id).Include(p => p.Category).ToListAsync());
        //}
    }
}

