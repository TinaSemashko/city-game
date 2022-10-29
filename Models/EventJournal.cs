namespace CityGame.Models
{
    public class EventJournal
    {
        public int Id { get; set; }
        public string Game_date { get; set; } 
        public Games Id_game { get; set; }        
    }
}