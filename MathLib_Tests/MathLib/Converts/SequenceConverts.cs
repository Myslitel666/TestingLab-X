namespace MathLib.Converts
{
    public static class SequenceConverts
    {
        public static List<int> ConvertToList(string sequence)
        {
            List<int> result = new List<int>();
            string numberInSequence = "";

            void parseNumberAndAddToList()
            {
                int number = int.Parse(numberInSequence);
                result.Add(number);
                numberInSequence = "";
            }

            //Удалеяем лишние пробелы 
            while (sequence.Contains("  ")) 
            {
                sequence = sequence.Replace("  ", " ");
            }
            for (int i = 0; i < sequence.Length; i++)
            {
                if (sequence[i] != ' ') numberInSequence += sequence[i];
                else
                {
                    parseNumberAndAddToList();
                }
            }
            parseNumberAndAddToList();

            return result;
        }
    }
}
