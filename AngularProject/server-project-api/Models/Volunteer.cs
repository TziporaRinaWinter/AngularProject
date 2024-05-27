namespace server_project_api;

public class Volunteer
{
    public int id { get; set; }

    public string fname { get; set; }

    public string lname { get; set; }

    public string phone { get; set; }

    public string src { get; set; }

    public string dest { get; set; }

    public bool[] days { get; set; }
}