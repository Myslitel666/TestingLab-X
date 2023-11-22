using Azure.Core;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System;
using TestingLabX.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;
using TestingLabX.Controllers.classes;
using System.Collections.Generic;

namespace TestingLabX.Controllers
{
    public class FunctionalTesting
    {
        //Метод, над которым производится тестирование
        public static List<double> errorFunc(double a, double b,
                                            double x0, double xk, double h)
        {
            var y = new List<double>();

            for (double x = x0; x < xk; x += h)
            {
                if (a < 0 && b < 0)
                {
                    y.Add(x + 2 * x + 1);
                }
                //ERROR
                else if (a < 0 && b >= 0)
                {
                    y.Add(2 * x + 3);
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

        //Метод, с прмощью которого производится тестирование
        public static List<double> myFunc(double a, double b,
                                          double x0, double xk, double h)
        {
            var y = new List<double>();

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

        //Метод, который осуществляет генерацию тестовых вариантов
        //И сравнение результатов
        public static List<FunctionalTestingResult> testingFunc(double x0, double xk, double h)
        {
            //Создаём массив, который покрывает состояния покрытия тестовых вариантов
            var TestingVariants = new List<bool> { false, false, false, false };

            //Осуществляем генерацию тестовых вариантов
            var rand = new Random();
            var functionalTestingList = new List<FunctionalTestingResult>();

            for (int i = 0; i < TestingVariants.Count; )
            {
                int a = rand.Next(-10,11);
                int b = rand.Next(-10, 11);

                var yError = new List<double>();
                var y = new List<double>();
                bool error = false;

                var functionalTestingResult = new FunctionalTestingResult();

                if (a < 0 && b < 0)
                {
                    if (!TestingVariants[0])
                    {
                        //Прокрутка состояния счётчика
                        i++;
                        //Изменения состояния
                        TestingVariants[0] = true;
                        //Генерация тестового варианта
                        yError = errorFunc(a, b, x0, xk, h);
                        y = myFunc(a, b, x0, xk, h);
                        //Сравнение результатов
                        for (int j = 0; j < y.Count; j++)
                        {
                            if (yError[j] != y[j])
                            {
                                error = true;
                            }
                        }
                        //Заносим результаты тестирования
                        functionalTestingResult.Id = i;
                        functionalTestingResult.TestNumber = i;
                        functionalTestingResult.ActualResult = string.Join(", ", yError);
                        functionalTestingResult.ExpectedResult = string.Join(", ", y);
                        if (error)
                        {
                            functionalTestingResult.TestResult = "Failed";
                        }
                        else
                        {
                            functionalTestingResult.TestResult = "Passed";
                        }

                        functionalTestingList.Add(functionalTestingResult);
                    }
                }
                else if (a < 0 && b >= 0)
                {
                    if (!TestingVariants[1])
                    {
                        //Прокрутка состояния счётчика
                        i++;
                        //Изменения состояния
                        TestingVariants[1] = true;
                        //Генерация тестового варианта
                        yError = errorFunc(a, b, x0, xk, h);
                        y = myFunc(a, b, x0, xk, h);
                        //Сравнение результатов
                        for (int j = 0; j < y.Count; j++)
                        {
                            if (yError[j] != y[j])
                            {
                                error = true;
                            }
                        }
                        //Заносим результаты тестирования
                        functionalTestingResult.Id = i;
                        functionalTestingResult.TestNumber = i;
                        functionalTestingResult.ActualResult = string.Join(", ", yError);
                        functionalTestingResult.ExpectedResult = string.Join(", ", y);
                        if (error)
                        {
                            functionalTestingResult.TestResult = "Failed";
                        }
                        else
                        {
                            functionalTestingResult.TestResult = "Passed";
                        }

                        functionalTestingList.Add(functionalTestingResult);
                    }
                }
                else if (a >= 0 && b < 0)
                {
                    if (!TestingVariants[2])
                    {
                        //Прокрутка состояния счётчика
                        i++;
                        //Изменения состояния
                        TestingVariants[2] = true;
                        //Генерация тестового варианта
                        yError = errorFunc(a, b, x0, xk, h);
                        y = myFunc(a, b, x0, xk, h);
                        //Сравнение результатов
                        for (int j = 0; j < y.Count; j++)
                        {
                            if (yError[j] != y[j])
                            {
                                error = true;
                            }
                        }
                        //Заносим результаты тестирования
                        functionalTestingResult.Id = i;
                        functionalTestingResult.TestNumber = i;
                        functionalTestingResult.ActualResult = string.Join(", ", yError);
                        functionalTestingResult.ExpectedResult = string.Join(", ", y);
                        if (error)
                        {
                            functionalTestingResult.TestResult = "Failed";
                        }
                        else
                        {
                            functionalTestingResult.TestResult = "Passed";
                        }

                        functionalTestingList.Add(functionalTestingResult);
                    }
                }
                else
                {
                    if (!TestingVariants[3])
                    {
                        //Прокрутка состояния счётчика
                        i++;
                        //Изменения состояния
                        TestingVariants[3] = true;
                        //Генерация тестового варианта
                        yError = errorFunc(a, b, x0, xk, h);
                        y = myFunc(a, b, x0, xk, h);
                        //Сравнение результатов
                        for (int j = 0; j < y.Count; j++)
                        {
                            if (yError[j] != y[j])
                            {
                                error = true;
                            }
                        }
                        //Заносим результаты тестирования
                        functionalTestingResult.Id = i;
                        functionalTestingResult.TestNumber = i;
                        functionalTestingResult.ActualResult = string.Join(", ", yError);
                        functionalTestingResult.ExpectedResult = string.Join(", ", y);
                        if (error)
                        {
                            functionalTestingResult.TestResult = "Failed";
                        }
                        else
                        {
                            functionalTestingResult.TestResult = "Passed";
                        }

                        functionalTestingList.Add(functionalTestingResult);
                    }
                }
            }

            return functionalTestingList;
        }
    }

    [ApiController]
    [Route("api/testingLab5")]
    public class FunctionalTestingController : ControllerBase
    {
        [HttpPost]
        public IActionResult Calculate([FromBody] FunctionalTestingRequest request)
        {
            try
            {
                //Заменяем точки на запятые для корректного парсинга
                request.X0 = request.X0.Replace('.', ',');
                request.Xk = request.Xk.Replace('.', ',');
                request.Step = request.Step.Replace('.', ',');

                //Инициализируем даблы для их дальнейшего использования
                double x0 = double.Parse(request.X0);
                double xk = double.Parse(request.Xk);
                double step = double.Parse(request.Step);

                //Производим работу методов
                var functionalTestingList = FunctionalTesting.testingFunc(x0, xk, step);

                return Ok(functionalTestingList);
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