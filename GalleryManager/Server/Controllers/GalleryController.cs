using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/gallery")]
    public class GalleryController : ApiController
    {
        public GalleryController(IGalleryService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(GalleryAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(GalleryAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        protected readonly IGalleryService service;

    }
}
