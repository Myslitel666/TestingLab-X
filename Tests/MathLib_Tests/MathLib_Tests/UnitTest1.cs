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
            //������ ��������� ������ �����
            var sequence = "3 4 5";
            var sumModule = new SumModule(sequence);

            //��������� ���������
            var expectedResult = 12;

            //����������� ���������
            var actualResult = sumModule.Sum();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void CountModuleTest()
        {
            //������ ��������� ������ ��������
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);

            //��������� ���������
            var expectedResult = 3;

            //����������� ���������
            var actualResult = countModule.Count();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void ArithmeticMeanModuleTest()
        {
            //������ ��������� ������� �������� � �����
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);
            var sumModule = new SumModule(sequence);

            //������ ��������� ������ �������� ���������������
            var aritmeticMeanModule = new ArithmeticMeanModule(sumModule, countModule);

            //��������� ���������
            var expectedResult = 4;

            //����������� ���������
            var actualResult = aritmeticMeanModule.ArithmeticMean();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void SumDriverTest()
        {
            //������ ��������� ������ ����� � �������� ������ �����
            var sequence = "3 4 5";
            var sumModule = new SumModule(sequence);
            var sumDriver = new SumDriver(sumModule);

            //��������� ���������
            var expectedResult = sumModule.Sum();

            //����������� ���������
            var actualResult = sumDriver.Sum();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
        [Fact]
        public void CountDriverTest()
        {
            //������ ��������� ������ ��������
            var sequence = "3 4 5";
            var countModule = new CountModule(sequence);
            var countDriver = new CountDriver(countModule);

            //��������� ���������
            var expectedResult = countModule.Count();

            //����������� ���������
            var actualResult = countDriver.Count();

            //Test
            Assert.Equal(expectedResult, actualResult);
        }
    }
}