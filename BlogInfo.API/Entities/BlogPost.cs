using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BlogInfo.API.Entities
{
    public class BlogPost
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [MaxLength(500)]
        public string Contents { get; set; }

        public int Likes { get; set; }

        public DateTime CreatedAt { get; set; }

        public BlogPost() { }
       
        public BlogPost(String title, String contents)
        {
            this.Title = title;
            this.Contents = contents;
            this.CreatedAt = DateTime.Now;
            this.Likes = 0;

        
        }
    }
}
