using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace TypeScriptWeb.Controllers
{


    [ApiController]
    [Route("[controller]")]
    public class NameController : ControllerBase
    {
        private static string[] Names = new[]
        {
            "Freezing", "Bracing", "Chilly"
        };



        [HttpGet]
        public IEnumerable<string[]> Get()
        {
            yield return Names.ToArray();
        }

    }
}
