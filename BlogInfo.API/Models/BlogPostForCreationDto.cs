using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlogInfo.API.Models
{
    public class BlogPostForCreationDto
    {
        [Required(ErrorMessage = "You should provide a name value.")]
        [MaxLength(100)]
        public string Title { get; set; }
        [MaxLength(500)]
        public string Contents { get; set; }

       
    }
}
