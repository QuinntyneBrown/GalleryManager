using Chloe.Server.Dtos;

namespace Chloe.Server.Services.Contracts
{
    public interface IGalleryService
    {
        GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request);
    }
}
