using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/photo")]
    public class PhotoController : ApiController
    {
        public PhotoController(IChloeUow uow) { this.uow = uow; }

        [HttpPost]
        [Route("add")]
        public async Task<IEnumerable<PhotoDto>> Add(HttpRequestMessage request)
        {
            string workingFolder = System.Web.HttpContext.Current.Server.MapPath("~/Uploads");
            var provider = new PhotoMultipartFormDataStreamProvider(workingFolder);
            await request.Content.ReadAsMultipartAsync(provider);
            var photos = new List<PhotoDto>();
            foreach (var file in provider.FileData)
            {
                var fileInfo = new FileInfo(file.LocalFileName);
                var photo = new Models.Photo();
                if (uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).FirstOrDefault() != null)
                {
                    photo = uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).Single();
                }
                else
                {
                    uow.Photos.Add(photo);
                }
                photo.Name = fileInfo.Name;
                photo.Created = fileInfo.CreationTime;
                photo.Modified = fileInfo.LastWriteTime;
                photo.Size = fileInfo.Length / 1024;
                uow.SaveChanges();
            }
            return photos;
        }

        protected readonly IChloeUow uow;
    }
}
