using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class GalleryAddOrUpdateRequestDto
    {
        public GalleryAddOrUpdateRequestDto()
        {
            this.Photos = new HashSet<PhotoDto>();
        }

        public string Name { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}