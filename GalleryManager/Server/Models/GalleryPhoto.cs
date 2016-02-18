using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class GalleryPhoto: BaseEntity
    {
        public GalleryPhoto()
        {

        }
        
        public int GalleryId { get; set; }
        public int PhotoId { get; set; }
        public Gallery Gallery { get; set; }
        public Photo Photo { get; set; }
    }
}