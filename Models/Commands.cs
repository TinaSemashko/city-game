namespace CityGame.Models
{
    public class Commands
    {
        public int Id { get; set; }
        public EventJournal Id_event { get; set; } 
        public string Com_login { get; set; } 
        public string Com_Password { get; set; } 
        public string Order_tasks { get; set; }               
    }
}