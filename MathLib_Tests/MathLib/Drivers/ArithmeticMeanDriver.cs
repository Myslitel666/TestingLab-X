using MathLib.Interfaces;
using MathLib.Modules;

namespace MathLib.Drivers
{
    public class ArithmeticMeanDriver
    {
        public ISumModule SumModule;
        public ICountModule CountModule;

        public ArithmeticMeanDriver(ISumModule sumModule, ICountModule countModule)
        {
            SumModule = sumModule;
            CountModule = countModule;
        }

        public double ArithmeticMean()
        {
            var arithmeticMeanModule = new ArithmeticMeanModule(SumModule, CountModule);
            double result = arithmeticMeanModule.ArithmeticMean();

            return Math.Round(result, 2);
        }
    }
}
