using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class ImageRequestDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProviderName { get; set; }
    }
}