using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<Brand> Brands { get; }
        IRepository<Photo> Photos { get; }
        void SaveChanges();
    }
}
