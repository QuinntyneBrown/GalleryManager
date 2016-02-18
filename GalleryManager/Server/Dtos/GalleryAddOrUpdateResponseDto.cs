using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class GalleryAddOrUpdateResponseDto
    {
        public GalleryAddOrUpdateResponseDto(Gallery model)
        {
            this.Id = model.Id;
            this.Name = model.Name;
        }

        public GalleryAddOrUpdateResponseDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }

    }
}