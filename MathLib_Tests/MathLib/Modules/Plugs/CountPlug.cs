using MathLib.Converts;
using MathLib.Interfaces;

namespace MathLib.Modules.Plugs
{
    public class CountPlug : ICountModule
    {
        public string Sequence { get; set; }
        public CountPlug(string sequence)
        {
            sequence = sequence;
        }
        public int Count()
        {
            Random random = new Random();

            return random.Next(1, 100);
        }
    }
}
