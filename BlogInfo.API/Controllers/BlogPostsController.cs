using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BlogInfo.API.Models;
using BlogInfo.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BlogInfo.API.Controllers
{
    [Route("api/blogposts")]
    public class BlogPostsController : Controller
    {
        private IBlogInfoRepository _blogInfoRepository;
        private ILogger<BlogPostsController> _logger;

        public BlogPostsController(ILogger<BlogPostsController> logger, IBlogInfoRepository blogInfoRepository)
        {
            _blogInfoRepository = blogInfoRepository;
            _logger = logger;
        }

        //get all Posts
        [HttpGet()]
        public IActionResult GetBlogPosts()
        {
            var blogPostsEntities = _blogInfoRepository.GetPosts();
            var results = Mapper.Map<IEnumerable<BlogPostDto>>(blogPostsEntities);
            return Ok(results);
        }

        //Get 1 post
        [HttpGet("{id}", Name = "GetPost")]
        public IActionResult GetBlogPost(int id)
        {
            // find BlogPost
            var BlogPostEntity = _blogInfoRepository.GetPost(id);
            if (BlogPostEntity == null)
            {
                _logger.LogDebug($"Posts {id} not found");
                return NotFound();

            }
            var Result = Mapper.Map<BlogPostDto>(BlogPostEntity);
            return Ok(Result);

        }

        //Add 1 post
        [HttpPost()]
        public IActionResult CreateBlogPost(
          [FromBody] BlogPostForCreationDto blogPost)
        {
            if (blogPost == null)
            {
                _logger.LogWarning("Create BlogPost has null blogPost argument");
                return BadRequest();

            }

            if (blogPost.Contents == blogPost.Title)
            {
                ModelState.AddModelError("Contents", "The provided contents should be different from the title.");
                _logger.LogWarning("Create BlogPost has Title=Contents");
            }

            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Create BlogPost has modelState invalid");
                return BadRequest(ModelState);
            }

            // create blog post
            var finalPost = Mapper.Map<Entities.BlogPost>(blogPost);

            _blogInfoRepository.AddBlogPost(finalPost);
            _logger.LogWarning($"New Blog Post added: {finalPost.Id}");

            try
            {
                if (!_blogInfoRepository.Save())
                {
                    _logger.LogWarning("Save failed");
                    return StatusCode(500, "A problem happened while handling your request.");
                }

                var createdBlogPostToReturn = Mapper.Map<Models.BlogPostDto>(finalPost);
                _logger.LogInformation($"Blog Post {createdBlogPostToReturn.Id} was saved");
                return CreatedAtRoute("GetPost", new { id = createdBlogPostToReturn.Id }, createdBlogPostToReturn);
            }
            catch (Exception e)
            {
                _logger.LogError($"Issue in save: {e}");
                return StatusCode(500, "A problem happened while handling your request.");
            }
        }

        //Update Post
        [HttpPut("{id}")]
        public IActionResult UpdateBlogPost(int id,
           [FromBody] BlogPostForUpdateDto blogPost)
        {

            if (blogPost == null)
            {
                return BadRequest();
            }

            if (blogPost.Title == blogPost.Contents)
            {
                ModelState.AddModelError("Description", "The provided description should be different from the name.");
            ;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blogPostEntity = _blogInfoRepository.GetPost(id);
            if (blogPostEntity == null)
            {
                return NotFound();
            }

            Mapper.Map(blogPost, blogPostEntity);
           
            try {
                if (!_blogInfoRepository.Save())
                {
                    _logger.LogWarning("Save failed");
                    return StatusCode(500, "A problem happened while handling your request.");
                }

                var updatedBlogPostToReturn = Mapper.Map<Models.BlogPostDto>(blogPostEntity);
                _logger.LogInformation($"Blog Post {updatedBlogPostToReturn.Id} was updated");
                return CreatedAtRoute("GetPost", new { id = updatedBlogPostToReturn.Id }, updatedBlogPostToReturn);
            }
            catch (Exception e)
            {
                _logger.LogError($"Issue in save: {e}");
                return StatusCode(500, "A problem happened while handling your request.");
            }
             
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBlogPost(int id)
        {
            if (!_blogInfoRepository.PostExists(id))
            {
                return NotFound();
            }

            var blogPostEntity = _blogInfoRepository.GetPost(id);
            if (blogPostEntity == null)
            {
                return NotFound();
            }

            _blogInfoRepository.DeleteBlogPost(blogPostEntity);

            if (!_blogInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            _logger.LogInformation(
                    $"Blog Post {blogPostEntity.Title} with id {blogPostEntity.Id} was deleted.");

            return NoContent();
        }

        //Increment Likes
        [HttpGet("like/{id}")]
        public IActionResult Like(int id)
        {
            if (!_blogInfoRepository.PostExists(id))
            {
                return NotFound();
            }

            _blogInfoRepository.Like(id);

            if (!_blogInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            _logger.LogInformation($"Blog Post with id {id} was Liked.");
            return NoContent();
        }

        //Decrement Likes
        [HttpGet("dislike/{id}")]
        public IActionResult DisLike(int id)
        {
            if (!_blogInfoRepository.PostExists(id))
            {
                return NotFound();
            }

            _blogInfoRepository.DisLike(id);
            if (!_blogInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            _logger.LogInformation($"Blog Post with id {id} was DisLiked.");
            return NoContent();

        }
    }
}
