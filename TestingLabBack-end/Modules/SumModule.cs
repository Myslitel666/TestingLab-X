using TestingLabX.Converts;
using TestingLabX.Interfaces;

namespace TestingLabX.Modules
{
    public class SumModule : ISumModule
    {
        public string Sequence { get; set; }
        public SumModule(string sequence) {
            Sequence = sequence;
        }
        public int Sum()
        {
            List<int> sequenceOfNumbers = SequenceConverts.ConvertToList(Sequence);
            return sequenceOfNumbers.Sum();
        }
    }
}
