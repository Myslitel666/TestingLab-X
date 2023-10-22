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
    [ApiController]
    [Route("api/testingLab3")]
    public class WhiteBoxTestingController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTestData()
        {
            var rows = new[]
            {
                new TestingResult { Id = 1, TestNumber = 1, ExpectedResult = 5.5, ActualResult = 5.5, TestResult = "Passed" },
                new TestingResult { Id = 2, TestNumber = 2, ExpectedResult = 6.6, ActualResult = 3, TestResult = "Failed" },
                new TestingResult { Id = 3, TestNumber = 3, ExpectedResult = 3.38, ActualResult = 2, TestResult = "Failed" }
            };

            return Ok(rows);
        }
    }
}