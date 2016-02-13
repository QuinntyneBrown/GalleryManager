using System.Data.Entity;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Data.Contracts;
using System.Linq;
using Chloe.Server.Models;
using System;

namespace Chloe.Server.Services
{
    public class BrandService : IBrandService
    {
        public BrandService(IChloeUow uow)
        {
            this.uow = uow;
        }

        public BrandDto Add(BrandRequestDto dto)
        {
            var brand = new Brand();

            if (dto.Id != 0)
            {
                brand = uow.Brands.GetAll().Where(x => x.Id == dto.Id)          
                    .Single();
                brand.Name = dto.Name;

            } else
            {
                brand = new Brand() { Name = dto.Name };
                this.uow.Brands.Add(brand);
            }
                

            this.uow.SaveChanges();
            return new BrandDto(brand);
        }

        public ICollection<BrandDto> Get()
        {
            return this.uow.Brands
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new BrandDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            var entity = uow.Brands.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        public ICollection<BrandDto> GetAllIncludingChildren()
        {
            var dtos = new List<BrandDto>();            
            var brands = this.uow.Brands
            .GetAll()
            .Include("Providers.Bundles")
            .Include("Providers.Photos")
            .Where(x => x.IsDeleted == false)
            .ToList();
            foreach(var brand in brands)
            {
                dtos.Add(new BrandDto(brand));
            }
            return dtos;
        }



        protected readonly IChloeUow uow;
    }
}
