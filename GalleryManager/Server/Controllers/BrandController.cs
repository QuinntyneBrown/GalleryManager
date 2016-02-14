using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/brand")]
    public class BrandController : ApiController
    {
        
        public BrandController(IBrandService service) { this.service = service; }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.Get()); }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(BrandRequestDto dto) { return Ok(this.service.Add(dto)); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(service.Remove(id)); }

        protected readonly IBrandService service;
    }
}
