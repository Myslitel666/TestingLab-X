using MathLib.Converts;
using MathLib.Interfaces;

namespace MathLib.Modules
{
    public class CountModule : ICountModule
    {
        public string Sequence { get; set; }
        public CountModule(string sequence)
        {
            Sequence = sequence;
        }
        public int Count()
        {
            List<int> sequenceOfNumbers = SequenceConverts.ConvertToList(Sequence);

            return sequenceOfNumbers.Count;
        }
    }
}
