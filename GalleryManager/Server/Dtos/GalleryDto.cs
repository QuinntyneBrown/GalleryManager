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
            this.GalleryPhotosCount = model.GalleryPhotos.Count;
        }

        public GalleryDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int GalleryPhotosCount { get; set; }

    }
}