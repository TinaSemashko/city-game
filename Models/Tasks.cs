namespace CityGame.Models
{
    public class Tasks
    {
        public int Id { get; set; }
        public int Number { get; set; }  
        public string Descriptin { get; set; }
        public Category Id_category { get; set; }
        public string TaskLocation1 { get; set; }
        public string TaskLocation2 { get; set; }
        public string TaskLocation3 { get; set; }       
    }
}