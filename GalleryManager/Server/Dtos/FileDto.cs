using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class FileDto
    {
        public FileDto()
        {

        }
        public string Src { get; set; }

        public string Base64String { get; set; }
    }
}