﻿using Chloe.Server.Config.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Config
{
    public class ConfigurationProvider : IConfigurationProvider
    {
        public T Get<T>() where T : class
        {
            if (typeof(T) == typeof(IAuthConfiguration))
                return AuthConfiguration.Config as T;

            throw new InvalidOperationException();
        }
    }
}