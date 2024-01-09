using MathLib.Converts;
using MathLib.Interfaces;

namespace MathLib.Modules.Plugs
{
    public class SumPlug : ISumModule
    {
        public string Sequence { get; set; }
        public SumPlug(string sequence)
        {
            sequence = sequence;
        }
        public int Sum()
        {
            Random random = new Random();

            return random.Next(1, 10000);
        }
    }
}
