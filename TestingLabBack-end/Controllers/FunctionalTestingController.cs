using Azure.Core;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System;
using TestingLabX.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TestingLabX.Controllers
{
    public class FunctionalTesting
    {
        //Метод, над которым производится тестирование
        public static void errorFunc(double a, double b, double x0,
                              double xk, double h, out List<double> y,
                              out List<string> typology)
        {
            y = new List<double>(); //Создаём пустой список

            typology = new List<string>() { "a", "b" }; //Инициализация топологии путей

            //ERROR
            if (a < 0 && b < 0)
            {
                //Первое условие истинно
                if (!typology.Contains("c")) typology.Add("c");

                for (double x = x0; x < xk; x += h)
                {
                    //Проверка принадлежности икс классу эквивалентности
                    if ((x > x0) && (x < xk))
                    {
                        if (!typology.Contains("d")) typology.Add("d");
                    }

                    //Конкретное это условие - true
                    if (!typology.Contains("f")) typology.Add("f");
                    y.Add(x + 2 * x - 1);

                    //Вычислительный operator
                    if (!typology.Contains("g")) typology.Add("g");
                }
            }
            else if (a < 0 && b >= 0)
            {
                //Второе условие истинно
                if (!typology.Contains("c")) typology.Add("c");
                if (!typology.Contains("e")) typology.Add("e");

                for (double x = x0; x < xk; x += h)
                {
                    //Проверка принадлежности икс классу эквивалентности
                    if ((x > x0) && (x < xk))
                    {
                        if (!typology.Contains("d")) typology.Add("d");
                    }

                    //Конкретное это условие - true
                    if (!typology.Contains("h")) typology.Add("h");
                    y.Add(2 * x - 3);

                    //Вычислительный operator
                    if (!typology.Contains("i")) typology.Add("i");
                }
            }
            else if (a >= 0 && b < 0)
            {
                //Третье условие истинно
                if (!typology.Contains("c")) typology.Add("c");
                if (!typology.Contains("e")) typology.Add("e");
                if (!typology.Contains("n")) typology.Add("n");

                for (double x = x0; x < xk; x += h)
                {
                    //Проверка принадлежности икс классу эквивалентности
                    if ((x > x0) && (x < xk))
                    {
                        if (!typology.Contains("d")) typology.Add("d");
                    }

                    //Конкретное это условие - true
                    if (!typology.Contains("j")) typology.Add("j");
                    y.Add(x - 5);

                    //Вычислительный operator
                    if (!typology.Contains("k")) typology.Add("k");
                }
            }
            else
            {
                //Четвёртое условие истинно
                if (!typology.Contains("c")) typology.Add("c");
                if (!typology.Contains("e")) typology.Add("e");
                if (!typology.Contains("n")) typology.Add("n");
                if (!typology.Contains("l")) typology.Add("l");

                for (double x = x0; x < xk; x += h)
                {
                    //Проверка принадлежности икс классу эквивалентности
                    if ((x > x0) && (x < xk))
                    {
                        if (!typology.Contains("d")) typology.Add("d");
                    }

                    //Конкретное это условие - true
                    if (!typology.Contains("l")) typology.Add("l");
                    y.Add(3 * x + 4);

                    //Вычислительный operator
                    if (!typology.Contains("m")) typology.Add("m");
                }
            }
        }

        //Метод, с прмощью которого производится тестирование
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
    [Route("api/testingLab4")]
    public class FunctionalTestingController : ControllerBase
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
                Random globalRand = new Random();

                //Производим работу методов
                for (int i = 1; i <= testCases; i++)
                {
                    //Меняем точку рандомайзера
                    Random random = new Random(globalRand.Next() * i + i * 100);

                    //Инициализируем переменные для одной серии тестов
                    var yActualLocal = new List<double>();
                    var yExpectedLocal = new List<double>();
                    var typology = new List<string>();

                    //Генерирация тестовых вариантов
                    double a = (double)random.Next(-100, 100);
                    double b = (double)random.Next(-100, 100);

                    yExpectedLocal = WhiteBoxTesting.myTestingFunc(a, b, x0, xk, step);
                    WhiteBoxTesting.errorFunc(a, b, x0, xk, step,
                    out yActualLocal, out typology);

                    yActual.AddRange(yActualLocal);
                    yExpected.AddRange(yExpectedLocal);

                    //Собираем список топологий путей
                    for (int j = 0; j < yActualLocal.Count; j++)
                    {
                        typologyList.Add(string.Join(", ", typology));
                    }

                    //Фиксируем результаты тестирования
                    for (int j = 0; j < yActualLocal.Count; j++)
                    {
                        if (yExpectedLocal[j] == yActualLocal[j])
                        {
                            testResult.Add("Passed");
                        }
                        else
                        {
                            testResult.Add("Failed");
                        }
                    }
                }

                var rows = new List<TestingResult>();

                //Заполняем TestingResult для отправки результатов тестирования на front
                for (int i = 0; i < testResult.Count; i++)
                {
                    rows.Add(
                        new TestingResult
                        {
                            Id = i,
                            TestNumber = i + 1,
                            ExpectedResult = yExpected[i],
                            ActualResult = yActual[i],
                            TestResult = testResult[i],
                            Typology = typologyList[i]
                        }
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