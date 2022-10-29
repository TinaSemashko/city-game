using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CityGame.Models;
namespace MobileStore.Controllers
{
    public class HomeController : Controller
    {
        CityGameContext db;
        public HomeController(CityGameContext context)
        {
            db = context;
        }
        public IActionResult Index()
        {
            return View(db.Games.ToList());
        }
    }
}