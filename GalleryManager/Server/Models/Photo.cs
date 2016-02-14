using System;

namespace Chloe.Server.Models
{
    public class Photo: BaseEntity
    {
        public Photo() { }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public long Size { get; set; }        
    }
}