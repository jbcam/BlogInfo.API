using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace BlogInfo.API.Entities
{
    public class BlogInfoContext : DbContext
    {
        public BlogInfoContext ( DbContextOptions<BlogInfoContext> options) : base(options)
        {
            //Database.Migrate();
        }

        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
