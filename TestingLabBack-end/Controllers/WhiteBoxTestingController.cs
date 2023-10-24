using Azure.Core;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestingLab3.Models;

namespace TestingLab3.Controllers
{
    public class TestingResult
    {
        public int Id { get; set; }
        public int TestNumber { get; set; }
        public double ExpectedResult { get; set; }
        public double ActualResult { get; set; }
        public string TestResult { get; set; }
    }

    public class CalculationRequest
    {
        public string X0 { get; set; }
        public string Xk { get; set; }
        public string Step { get; set; }
        public string TestCases { get; set; }
    }

    [ApiController]
    [Route("api/testingLab3")]
    public class WhiteBoxTestingController : ControllerBase
    {
        [HttpPost]
        public IActionResult Calculate([FromBody] CalculationRequest request)
        {
            try
            {
                //Заменяем точки на запятые для корректного парсинга
                request.X0 = request.X0.Replace('.', ',');
                request.Xk = request.Xk.Replace('.', ',');
                request.Step = request.Step.Replace('.', ',');
                request.TestCases = request.TestCases.Replace('.', ',');

                //Инициализируем даблы для их дальнейшего использования
                double X0 = double.Parse(request.X0);
                double Xk = double.Parse(request.Xk);
                double Step = double.Parse(request.Step);
                double TestCases = double.Parse(request.TestCases);

                Console.WriteLine($"X0: {X0}");
                Console.WriteLine($"Xk: {Xk}");
                Console.WriteLine($"Step: {Step}");
                Console.WriteLine($"TestCases: {TestCases}");

                var rows = new[]
                {
                new TestingResult { Id = 1, TestNumber = 1, ExpectedResult = 5.5, ActualResult = 5.5, TestResult = "Passed" },
                new TestingResult { Id = 2, TestNumber = 2, ExpectedResult = 6.6, ActualResult = 3, TestResult = "Failed" },
                new TestingResult { Id = 3, TestNumber = 3, ExpectedResult = 3.38, ActualResult = 2, TestResult = "Failed" }
            };

                return Ok(rows);
            }
            catch (Exception ex)
            {
                // Логируем ошибки
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal server error.");
            }
        }
    }
}