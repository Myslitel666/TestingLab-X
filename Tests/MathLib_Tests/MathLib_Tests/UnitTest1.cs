using MathLib.Modules;
using MathLib.Drivers;
using MathLib.Interfaces;

namespace MathLib_Tests
{
    public class MathLibTests
    {
        [Fact]
        public void SumModuleTest()
        {
            //—оздаЄм экземпл€р модул€ суммы
            var sequence = "3 4 5";
            var sumModule = new SumModule(sequence);

            //ќжидаемый результат
            var expectedResult = 12;

            //‘актический результат
            var actualResult = sumModule.Sum();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void CountModuleTest()
        {
            //—оздаЄм экземпл€р модул€ счЄтчика
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);

            //ќжидаемый результат
            var expectedResult = 3;

            //‘актический результат
            var actualResult = countModule.Count();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void ArithmeticMeanModuleTest()
        {
            //—оздаЄм экземпл€р модулей счЄтчика и суммы
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);
            var sumModule = new SumModule(sequence);

            //—оздаЄм экземпл€р модул€ среднего арифметического
            var aritmeticMeanModule = new ArithmeticMeanModule(sumModule, countModule);

            //ќжидаемый результат
            var expectedResult = 4;

            //‘актический результат
            var actualResult = aritmeticMeanModule.ArithmeticMean();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void SumDriverTest()
        {
            //—оздаЄм экземпл€р модул€ суммы и драйвера модул€ суммы
            var sequence = "3 4 5";
            var sumModule = new SumModule(sequence);
            var sumDriver = new SumDriver(sumModule);

            //ќжидаемый результат
            var expectedResult = sumModule.Sum();

            //‘актический результат
            var actualResult = sumDriver.Sum();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void CountDriverTest()
        {
            //—оздаЄм экземпл€р модул€ счЄтчика
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);
            var countDriver = new CountDriver(countModule);

            //ќжидаемый результат
            var expectedResult = countModule.Count();

            //‘актический результат
            var actualResult = countDriver.Count();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
    }
}