using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BlogInfo.API.Entities;
using BlogInfo.API.Helpers;
using BlogInfo.API.Models;
using BlogInfo.API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NLog.Extensions.Logging;


namespace BlogInfo.API
{
    public class Startup
    {
        public static IConfiguration Configuration { get; private set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc();

            var connectionString = Startup.Configuration["connectionStrings:BlogInfoDBConnectionString"];
            //String providerName = "System.Data.EntityClient";
            services.AddDbContext<BlogInfoContext>(o => o.UseSqlServer(connectionString));

            // configure DI for application services
            services.AddScoped<IBlogInfoRepository, BlogInfoRepository>();
            services.AddScoped<IUserService, UserService>();

            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
                        var userId = int.Parse(context.Principal.Identity.Name);
                        var user = userService.GetById(userId);
                        if (user == null)
                        {
                            // return unauthorized if user no longer exists
                            context.Fail("Unauthorized");
                        }
                        return Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            BlogInfoContext blogInfoContext)
        {
            loggerFactory.AddNLog();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler();
            }
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Entities.BlogPost, Models.BlogPostDto>();
                cfg.CreateMap<Models.BlogPostDto, Entities.BlogPost>();
                cfg.CreateMap<Models.BlogPostForCreationDto, Entities.BlogPost>().ConstructUsing(x => new BlogPost(x.Title, x.Contents));
                cfg.CreateMap<Models.BlogPostForUpdateDto, Entities.BlogPost>();
                cfg.CreateMap<Entities.User, Models.UserDto>();
                cfg.CreateMap<Models.UserDto, Entities.User>();
                cfg.CreateMap< Models.UserForCreationDto, Entities.User>();
            });

         
            app.UseMvc();

            //app.UseIISPlatformHandler();
            //app.UseStatusCodePages();


            // global cors policy
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseAuthentication();

            //REDIRECT api call
            app.Use(async (context, next) =>
             {
                 await next();

                 if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                 {
                     context.Response.Redirect("/");
                     return;
                 }
             });

            app.UseDefaultFiles();
            app.UseStaticFiles();


            //app.Use(async (context, next) =>
            //      {
            //        await next();
            //        if(context.Response.StatusCode==404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.StartsWith("/api/"))
            //        {
            //          context.Request.Path = "/index.html";
            //          await next();
            //        }
            //      });


        }
    }
}
