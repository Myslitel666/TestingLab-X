using Microsoft.AspNetCore.Mvc;
using TestingLabX.Controllers.classes;
using TestingLabX.Controllers;

namespace WebShopBack_end.Controllers
{
    [ApiController]
    [Route("api")]
    public class IntegrationTestingController : ControllerBase
    {
        [HttpPost("testingLab6")]
        public IActionResult Calculate([FromBody] IntegrationTestingRequest request)
        {
            //Производим работу методов
            var functionalTestingList = new List<IntegrationlTestingResult>()
            {
                new IntegrationlTestingResult()
                {
                    Id = 2,
                    NumberOfElements = 4,
                    Sum = 6,
                    TestNumber = 8,
                    TestResult = "Passed",
                    TheArithmeticMean = 3.5
                }
            };

            return Ok(functionalTestingList);
        }
    }
}
