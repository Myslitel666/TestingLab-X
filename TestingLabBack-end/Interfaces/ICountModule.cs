namespace TestingLabX.Interfaces
{
    public interface ICountModule
    {
        string Sequence { get; set; }
        public int Count();
    }
}
