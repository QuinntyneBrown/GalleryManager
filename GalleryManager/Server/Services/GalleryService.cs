using Chloe.Server.Services.Contracts;
using System;
using Chloe.Server.Dtos;
using Chloe.Server.Data.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class GalleryService : IGalleryService
    {
        public GalleryService(IChloeUow uow)
        {
            this.uow = uow;
        }

        public GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request)
        {
            var gallery = uow.Galleries.GetAll().Where(x => x.Name == request.Name).FirstOrDefault();
            if (gallery == null) uow.Galleries.Add(gallery = new Gallery());
            gallery.Name = request.Name;
            uow.SaveChanges();
            return new GalleryAddOrUpdateResponseDto(gallery);
        }

        protected readonly IChloeUow uow;
    }
}