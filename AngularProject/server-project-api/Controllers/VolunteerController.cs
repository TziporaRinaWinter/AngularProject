using Microsoft.AspNetCore.Mvc;

namespace server_project_api.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class VolunteerController : ControllerBase
{
    private static Volunteer[] volunteers = new[]
    {
        new Volunteer{id = 1 ,fname = "david", lname = "davidovich", phone ="0548565055", src = "jerusalem", dest = "bnei brack", days = new bool[6]{true,true,true,true,true,true}},
        new Volunteer{id = 2 ,fname = "yedidya", lname = "yedidovich", phone ="0504194510", src = "ashdod", dest = "rishon letzion", days = new bool[6]{false,false,false,false,false,false}},
        new Volunteer{id = 3 ,fname = "aaron", lname = "aaronovich", phone ="0527696785", src = "haifa", dest = "tzfat", days = new bool[6]{true,true,false,false,false,true}},
        new Volunteer{id = 4 ,fname = "jimi", lname = "jiminovich", phone ="0583282641", src = "modi'in", dest = "lud", days = new bool[6]{true,false,false,false,false,true}}
    };

    private readonly ILogger<VolunteerController> _logger;

    public VolunteerController(ILogger<VolunteerController> logger)
    {
        _logger = logger;
    }

    
    [HttpGet]
    public Volunteer[] GetAll() => volunteers;

    [HttpGet("{id}")]
    public Volunteer? Get(int id) => volunteers.FirstOrDefault(v => v.id == id);

    [HttpPut("{id}")]
    public ActionResult<Volunteer[]> Update(int id, Volunteer volu)
    {
        if(id > 4){
            return NotFound();
        }
        volunteers[id-1] = volu;
        return volunteers;
    }
}
