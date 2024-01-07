using TestingLabX.Converts;
using TestingLabX.Interfaces;

namespace TestingLabX.Modules
{
    public class ArithmeticMeanModule
    {
        ISumModule SumModule;
        ICountModule CountModule;

        public ArithmeticMeanModule(ISumModule sumModule, ICountModule countModule)
        {
            SumModule = sumModule;
            CountModule = countModule;
        }
        public double ArithmeticMean()
        {
            double sum = SumModule.Sum();
            int count = CountModule.Count();
            double result = sum / count;

            return Math.Round(result,2);
        }
    }
}
