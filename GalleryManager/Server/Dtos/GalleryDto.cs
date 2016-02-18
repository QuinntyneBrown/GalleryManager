using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class GalleryDto
    {
        public GalleryDto(Gallery model)
        {
            this.Id = model.Id;
            this.Name = model.Name;
        }

        public GalleryDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }

    }
}