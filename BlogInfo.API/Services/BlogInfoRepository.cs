using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogInfo.API.Entities;

namespace BlogInfo.API.Services
{
    public class BlogInfoRepository : IBlogInfoRepository
    {
        //SQL SERVER
        private BlogInfoContext _context;

        public BlogInfoRepository(BlogInfoContext context)
        {
            _context = context;
        }

        //SQLite
        //private BlogInfoContextSQLite _context;
      
        //public BlogInfoRepository(BlogInfoContextSQLite context)
        //{
        //    _context = context;
        //}

        public bool PostExists(int postId)
        {
            return _context.BlogPosts.Any(p => p.Id == postId);
        }

        public IEnumerable<BlogPost> GetPosts()
        {
            return _context.BlogPosts.OrderBy(p => p.Id).ToList();
        }
        public BlogPost GetPost(int postId)
        {
            return _context.BlogPosts.Where(p => p.Id==postId).FirstOrDefault(); 
        }

        public void AddBlogPost(BlogPost blogPost)
        {
            _context.BlogPosts.Add(blogPost);

        }
        public void DeleteBlogPost(BlogPost blogPost)
        {
            _context.BlogPosts.Remove(blogPost);
        }
        public void Like(int postId)
        {
            _context.BlogPosts.Where(p=>p.Id==postId).FirstOrDefault().Likes+=1;
        }
        public void DisLike(int postId)
        {
            _context.BlogPosts.Where(p => p.Id == postId).FirstOrDefault().Likes -= 1;
        }
        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
