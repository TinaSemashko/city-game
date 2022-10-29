namespace CityGame.Models
{
    public class Participants
    {
        public int Id { get; set; }
        public string Title { get; set; }   
        public EventJournal Id_event { get; set; } 
        public Commands Id_command { get; set; }       
    }
}