using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogInfo.API.Models
{
    public class BlogPostDto
    {
       
        public int Id { get; set; }
   
        public string Title { get; set; }

        public string Contents { get; set; }

        public int Likes { get; set; }

        public DateTime CreatedAt { get; set; }
   
    }
}
