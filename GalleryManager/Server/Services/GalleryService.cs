using Chloe.Server.Services.Contracts;
using System;
using Chloe.Server.Dtos;
using Chloe.Server.Data.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;
using System.Collections.Generic;

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
            var gallery = uow.Galleries.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (gallery == null) uow.Galleries.Add(gallery = new Gallery());
            gallery.Name = request.Name;
            uow.SaveChanges();
            return new GalleryAddOrUpdateResponseDto(gallery);
        }

        public ICollection<GalleryDto> GetAll()
        {
            ICollection<GalleryDto> response = new HashSet<GalleryDto>();
            
            foreach (var gallery in uow.Galleries.GetAll().Include(x=> x.GalleryPhotos).Where(x => x.IsDeleted == false))
            {
                response.Add(new GalleryDto(gallery));
            }
            
            return response;
        }

        public dynamic Remove(int id)
        {
            var gallery = uow.Galleries.GetById(id);
            gallery.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        protected readonly IChloeUow uow;
    }
}