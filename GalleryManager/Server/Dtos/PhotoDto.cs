using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(Photo photo)
        {
            this.Id = photo.Id;
            this.Name = photo.Name;
        }

        public PhotoDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public long Size { get; set; }


    }
}