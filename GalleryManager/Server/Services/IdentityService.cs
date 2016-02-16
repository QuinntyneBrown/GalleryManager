using Chloe.Server.Data.Contracts;
using Chloe.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Services
{
    public class IdentityService : IIdentityService
    {
        public IdentityService(IChloeUow uow)
        {
            this.uow = uow;
        }
        public Dtos.TokenDto SignIn(Dtos.SignInDto signInDto)
        {
            throw new NotImplementedException();
        }

        public Dtos.TokenDto TryToRegister(Dtos.RegistrationRequestDto registrationRequestDto)
        {
            throw new NotImplementedException();
        }

        public bool AuthenticateUser(string username, string password)
        {
            throw new NotImplementedException();
        }

        public ICollection<System.Security.Claims.Claim> GetClaimsForUser(string username)
        {
            throw new NotImplementedException();
        }

        protected readonly IChloeUow uow;
    }
}