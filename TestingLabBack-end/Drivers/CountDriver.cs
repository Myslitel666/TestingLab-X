using TestingLabX.Interfaces;

namespace TestingLabX.Drivers
{
    public class CountDriver
    {
        public ICountModule CountModule;
        public CountDriver(ICountModule countModule)
        {
            CountModule = countModule;
            CountModule.Sequence = CountModule.Sequence;
        }
        public int Count() { return CountModule.Count(); }
    }
}
