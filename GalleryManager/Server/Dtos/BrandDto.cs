
using Chloe.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace Chloe.Server.Dtos
{
    public class BrandDto
    {
        public BrandDto(Brand brand) {
            this.Id = brand.Id;
            this.Name = brand.Name;
        }

        public BrandDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }    
    }
}
