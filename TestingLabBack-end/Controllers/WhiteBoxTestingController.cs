using Azure.Core;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System;
using TestingLab3.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TestingLab3.Controllers
{
    //Структура данных, которая представляет из себя результаты тестирования
    public class TestingResult
    {
        public int Id { get; set; }
        public int TestNumber { get; set; }
        public double ExpectedResult { get; set; }
        public double ActualResult { get; set; }
        public string Typology { get; set; }
        public string TestResult { get; set; }
    }

    //Набор данных, необходимый для проведения тестирования
    public class CalculationRequest
    {
        public string X0 { get; set; }
        public string Xk { get; set; }
        public string Step { get; set; }
        public string TestCases { get; set; }
    }

    public class WhiteBoxTesting
    {
        //Метод, над которым производится тестирование
        public static void errorFunc(double a, double b, double x0,
                              double xk, double h, out List<double> y,
                              out List<string> typology)
        {
            typology = new List<string>() { "a" }; //Инициализация топологии путей

            y = new List<double>(); //Создаём пустой список

            typology.Add("b");

            for (double x = x0; x < xk; x += h)
            {
                //Вход в Cycle
                if (!typology.Contains("d")) typology.Add("d");

                //ERROR
                if (a < 0 && b < 0)
                {
                    y.Add(x + 2 * x - 1);
                    if (!typology.Contains("f")) typology.Add("f");
                }
                else if (a < 0 && b >= 0)
                {
                    y.Add(2 * x - 3);
                    if (!typology.Contains("h")) typology.Add("h");
                }
                else if (a >= 0 && b < 0)
                {
                    y.Add(x - 5);
                    if (!typology.Contains("g")) typology.Add("g");
                }
                else
                {
                    y.Add(3 * x + 4);
                    if (!typology.Contains("m")) typology.Add("m");
                }
                //Проверки условий
                if (!typology.Contains("e")) typology.Add("e");
                if (!typology.Contains("n")) typology.Add("n");
                if (!typology.Contains("l")) typology.Add("l");
                if (!typology.Contains("m")) typology.Add("m");
            }

            //Выход из Cycle
            if (!typology.Contains("c")) typology.Add("c");
        }

        //Метод, над которым производится тестирование
        public static List<double> myTestingFunc(double a, double b,
                                          double x0, double xk, double h)
        {
            var y = new List<double>(); //Создаём пустой список

            for (double x = x0; x < xk; x += h)
            {
                if (a < 0 && b < 0)
                {
                    y.Add(x + 2 * x + 1);
                }
                else if (a < 0 && b >= 0)
                {
                    y.Add(2 * x - 3);
                }
                else if (a >= 0 && b < 0)
                {
                    y.Add(x - 5);
                }
                else
                {
                    y.Add(3 * x + 4);
                }
            }

            return y;
        }
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
                double x0 = double.Parse(request.X0);
                double xk = double.Parse(request.Xk);
                double step = double.Parse(request.Step);
                double testCases = double.Parse(request.TestCases);

                //Инициализируем переменные, которые будут использованы
                //для хранения результатов тестирования
                int failedTests = 0;
                var yActual = new List<double>();
                var yExpected = new List<double>();
                var testResult = new List<string>();
                var typologyList = new List<string>();
                Random random = new Random();

                //Производим работу методов
                for (int i = 1; i <= testCases; i++)
                {
                    //Инициализируем переменные для одной серии тестов
                    var yTesting = new List<double>();
                    var y = new List<double>();
                    var yError = new List<double>();
                    var typology = new List<string>();

                    //Генерирация тестовых вариантов
                    double a = (double)random.Next(-100, 100);
                    double b = (double)random.Next(-100, 100);

                    y = WhiteBoxTesting.myTestingFunc(a, b, x0, xk, step);
                    WhiteBoxTesting.errorFunc(a, b, x0, xk, step,
                    out yTesting, out typology);

                    yActual.AddRange(yTesting);
                    yExpected.AddRange(y);

                    //Собираем список топологий путей
                    for (int j = 0; j < yExpected.Count; j++)
                    {
                        typologyList.Add(string.Join(", ", typology));
                    }
                }

                //Фиксируем результаты тестирования
                for (int i = 0; i < yExpected.Count; i++)
                {
                    if (yExpected[i] == yActual[i]) {
                        testResult.Add("Passed");
                    }
                    else {
                        testResult.Add("Failed");
                    }
                }

                var rows = new List<TestingResult>();

                //Заполняем TestingResult для отправки результатов тестирования на front
                for (int i = 0; i < testResult.Count; i++)
                {
                    rows.Add(
                        new TestingResult { Id = i, TestNumber = i + 1, 
                                                 ExpectedResult = yExpected[i], 
                                                 ActualResult = yActual[i], 
                                                 TestResult = testResult[i], 
                                                 Typology = typologyList[i] }
                    );
                }

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