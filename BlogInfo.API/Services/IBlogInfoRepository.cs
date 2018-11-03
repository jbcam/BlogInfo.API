using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogInfo.API.Entities;

namespace BlogInfo.API.Services
{
    public interface IBlogInfoRepository
    {
        bool PostExists(int postId);
        IEnumerable<BlogPost> GetPosts();
        BlogPost GetPost(int postId);
        void AddBlogPost(BlogPost blogPost);
        void DeleteBlogPost(BlogPost blogPost);
        void Like(int postId);
        void DisLike(int postId);
        bool Save();
    }
}
