using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Dtos;
using System.Diagnostics;
using System.Web;

namespace Chloe.Server.Services
{
    public class FileService: IFileService
    {
        public async System.Threading.Tasks.Task<List<Dtos.FileDto>> Upload(System.Net.Http.HttpRequestMessage Request)
        {
            var dtos = new List<FileDto>();

            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());

            NameValueCollection formData = provider.FormData;
            IList<HttpContent> files = provider.Files;

            foreach (var file in files)
            {
                var filename = new FileInfo(file.Headers.ContentDisposition.FileName.Trim(new char[] { '"' })
                    .Replace("&", "and")).Name;

                string root = System.Web.HttpContext.Current.Server.MapPath("~/Uploads");

                Stream stream = await file.ReadAsStreamAsync();

                

                var bytes = StreamHelper.ReadToEnd(stream);


            }

            
            return dtos;
        }

    }
}