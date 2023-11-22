namespace TestingLabX.Controllers.classes
{
    public class FunctionalTestingResult
    {
        public int Id { get; set; }
        public int TestNumber { get; set; }
        public string ExpectedResult { get; set; }
        public string ActualResult { get; set; }
        public string TestResult { get; set; }
    }
}
