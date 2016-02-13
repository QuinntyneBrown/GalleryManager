using Chloe.Server.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Chloe.Server.Services.Contracts
{
    public interface IFileService
    {
        Task<List<FileDto>> Upload(System.Net.Http.HttpRequestMessage Request);

    }
}
