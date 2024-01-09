using MathLib.Interfaces;

namespace MathLib.Drivers
{
    public class SumDriver
    {
        public ISumModule SumModule;

        public SumDriver(ISumModule sumModule) {
            SumModule = sumModule;
        }

        public int Sum() { 
            return SumModule.Sum(); 
        }
    }
}
