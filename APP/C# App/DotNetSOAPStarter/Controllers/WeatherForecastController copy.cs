using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetSOAPStarter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicelController : ControllerBase
    {
        private static readonly string[] Summaries = new[] {
            "Freezing","Bracing","Chilly","Cool","Mild","Warm","Balmy","Hot","Sweltering","Scorching"
        };

        private readonly ILogger<ServicelController> _logger;

        public ServicelController(ILogger<ServicelController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Produces("application/xml")]
        public IEnumerable<WeatherForecast> Get() { 
            return Enumerable.Range(1,5).Select(index => new WeatherForecast 
            { 
                Date=DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20,55),
                Summary=Summaries[Random.Shared.Next(Summaries.Length)]
            
            })
                .ToArray(); 
        
        }

    }
}
