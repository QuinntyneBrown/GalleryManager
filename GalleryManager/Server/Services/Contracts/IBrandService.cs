using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IBrandService
    {
        BrandDto Add(BrandRequestDto dto);
        bool Remove(int id);
        ICollection<BrandDto> Get();
    }
}
