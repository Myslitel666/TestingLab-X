using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestingLabX.Models;

namespace TestingLabX.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private TestingLab3Context _dbContext;

        public HomeController()
        {
            _dbContext = new TestingLab3Context();
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            try
            {
                var categories = await _dbContext.LabLists
                    .Where(c => c.LabListId != null)
                    .Select(c => new { LabName = c.LabName, LabIcon = c.LabIcon, LabLink = c.LabLink })
                    .ToListAsync();

                return Ok(categories);
            }
            catch (Exception ex)
            {
                //Лог ошибки или возврат ошибки сервера
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("popular-products")]
        public async Task<IActionResult> GetPopularProducts()
        {
            try
            {
                var popularProducts = await _dbContext.DescriptionLabs
                    .OrderBy(p => p.LabNumber)
                    .Take(6) // Получить 6 лабораторных работ в порядке их приоритета
                    .ToListAsync();

                return Ok(popularProducts);
            }
            catch (Exception ex)
            {
                //Лог ошибки или возврат ошибки сервера
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
