﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class User: BaseEntity
    {
        public string Password { get; set; }

        public string Email { get; set; }
    }
}