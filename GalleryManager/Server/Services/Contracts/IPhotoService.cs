using Chloe.Server.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Chloe.Server.Services.Contracts
{
    public interface IPhotoService
    {
        Task<List<FileDto>> Upload(System.Net.Http.HttpRequestMessage Request);
    }
}
