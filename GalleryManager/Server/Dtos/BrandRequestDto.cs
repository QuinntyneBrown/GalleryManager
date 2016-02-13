using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class BrandRequestDto
    {        
        public BrandRequestDto()
        {
            this.Providers = new HashSet<OptionDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<OptionDto> Providers { get; set; }
    }
}