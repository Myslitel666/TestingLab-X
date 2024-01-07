using Microsoft.AspNetCore.Mvc;
using TestingLabX.Controllers.classes;
using TestingLabX.Converts;
using TestingLabX.Modules;
using TestingLabX.Drivers;
using TestingLabX.Modules.Plugs;
using TestingLabX.Interfaces;

namespace TestingLabX.Controllers
{
    [ApiController]
    [Route("api")]
    public class IntegrationTestingController : ControllerBase
    {
        [HttpPost("testingLab6")]
        public IActionResult Calculate([FromBody] IntegrationTestingRequest request)
        {
            int testCasesTopLevel = int.Parse(request.TestCases) - 2;

            //Осуществляем тестирование модуля верхнего уровня
            var sumPlug = new SumPlug(request.SequenceOfNumbers); //модуль-заглушка для подсчёта суммы
            var countPlug = new CountPlug(request.SequenceOfNumbers); //модуль-заглушка для подсчёта кол-ва элементов
            var arithmeticMeanDriver = new ArithmeticMeanDriver(sumPlug, countPlug); //модуль верхнего уровня
            var sumDriver = new SumDriver(sumPlug); //драйвер для тестирования модуля суммы
            var countDriver = new CountDriver(countPlug); //драйвер для тестирования модуля count
            var integrationTestingList = new List<IntegrationTestingResult>(); //список результатов
            var integrationlTestingResult = new IntegrationTestingResult();

            for (int i = 0; i < testCasesTopLevel; i++)
            {
                try
                {
                    integrationlTestingResult = new IntegrationTestingResult()
                    {
                        Id = i + 1,
                        NumberOfElements = countPlug.Count(),
                        Sum = sumDriver.Sum(),
                        TestNumber = i + 1,
                        TestResult = "Passed",
                        TheArithmeticMean = arithmeticMeanDriver.ArithmeticMean()
                    };
                }
                catch
                {
                    integrationlTestingResult = new IntegrationTestingResult()
                    {
                        Id = i + 1,
                        NumberOfElements = countPlug.Count(),
                        Sum = sumDriver.Sum(),
                        TestNumber = i + 1,
                        TestResult = "Failed",
                    };
                }

                integrationTestingList.Add(integrationlTestingResult);
            }

            //Осуществляем тестирование модулей нижнего уровня
            var sumModule = new SumModule(request.SequenceOfNumbers);
            try
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = testCasesTopLevel + 1,
                    Sum = sumDriver.Sum(),
                    TestNumber = testCasesTopLevel + 1,
                    TestResult = "Passed",
                };
            }
            catch
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = testCasesTopLevel + 1,
                    Sum = sumPlug.Sum(),
                    TestNumber = testCasesTopLevel + 1,
                    TestResult = "Failed",
                };
            };
            integrationTestingList.Add(integrationlTestingResult);

            try
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = testCasesTopLevel + 2,
                    NumberOfElements = countDriver.Count(),
                    TestNumber = testCasesTopLevel + 2,
                    TestResult = "Passed",
                };
            }
            catch
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = testCasesTopLevel + 2,
                    NumberOfElements = countPlug.Count(),
                    TestNumber = testCasesTopLevel + 2,
                    TestResult = "Failed",
                };
            };
            integrationTestingList.Add(integrationlTestingResult);

            return Ok(integrationTestingList);
        }

        [HttpPost("testingLab7")]
        public IActionResult Calculate7([FromBody] IntegrationTestingRequest request)
        {
            int testCasesTopLevel = int.Parse(request.TestCases);
            var integrationTestingList = new List<IntegrationTestingResult>(); //список результатов
            var sumPlug = new SumPlug(request.SequenceOfNumbers); //модуль-заглушка для подсчёта суммы
            var countPlug = new CountPlug(request.SequenceOfNumbers); //модуль-заглушка для подсчёта кол-ва элементов
            var integrationlTestingResult = new IntegrationTestingResult();

            //Осуществляем тестирование модулей нижнего уровня
            var sumModule = new SumModule(request.SequenceOfNumbers);
            var sumDriver = new SumDriver(sumModule); //драйвер для тестирования модуля суммы
            try
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 1,
                    Sum = sumModule.Sum(),
                    TestNumber = 1,
                    TestResult = "Passed",
                };
            }
            catch
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 1,
                    Sum = sumPlug.Sum(),
                    TestNumber = 1,
                    TestResult = "Failed",
                };
            };
            integrationTestingList.Add(integrationlTestingResult);

            var countModule = new CountModule(request.SequenceOfNumbers);
            var countDriver = new CountDriver(countModule); //драйвер для тестирования модуля count
            try
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 2,
                    NumberOfElements = countDriver.Count(),
                    TestNumber = 2,
                    TestResult = "Passed",
                };
            }
            catch
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 2,
                    NumberOfElements = countPlug.Count(),
                    TestNumber = 2,
                    TestResult = "Failed",
                };
            };
            integrationTestingList.Add(integrationlTestingResult);

            //Осуществляем тестирование модуля верхнего уровня
            var arithmeticMeanDriver = new ArithmeticMeanDriver(sumModule, countModule); //модуль верхнего уровня

            try
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 3,
                    NumberOfElements = countDriver.Count(),
                    Sum = sumDriver.Sum(),
                    TestNumber = 3,
                    TestResult = "Passed",
                    TheArithmeticMean = arithmeticMeanDriver.ArithmeticMean()
                };
            }
            catch
            {
                integrationlTestingResult = new IntegrationTestingResult()
                {
                    Id = 3,
                    NumberOfElements = countPlug.Count(),
                    Sum = sumDriver.Sum(),
                    TestNumber = 3,
                    TestResult = "Failed",
                };
            }

            integrationTestingList.Add(integrationlTestingResult);

            return Ok(integrationTestingList);
        }
    }
}
