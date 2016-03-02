using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TagAddOrUpdateResponseDto: TagDto
    {
        public TagAddOrUpdateResponseDto(Tag entity)
            :base(entity)
        {

        }
    }
}