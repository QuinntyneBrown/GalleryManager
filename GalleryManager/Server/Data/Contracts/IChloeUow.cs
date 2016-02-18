using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<Brand> Brands { get; }
        IRepository<Photo> Photos { get; }
        IRepository<User> Users { get; }
        IRepository<Gallery> Galleries { get; }
        void SaveChanges();
    }
}
