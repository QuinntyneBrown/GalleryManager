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

            var galleries = uow.Galleries.GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList();

            return response;
        }

        protected readonly IChloeUow uow;
    }
}