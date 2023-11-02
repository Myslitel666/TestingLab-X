using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;
using System.IO;
using System.Runtime.Intrinsics.X86;
using Microsoft.AspNetCore.Hosting;

namespace TestingLabX
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //var myAppHttpUrl = Environment.GetEnvironmentVariable("MY_APP_HTTP_URL");

            //Console.WriteLine(myAppHttpUrl);

            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins, policy =>
                {
                    policy.WithOrigins().AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

            var app = builder.Build();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors(MyAllowSpecificOrigins);
            app.MapControllers();

            app.MapGet("/api/categories/icon", () =>
            {
                // Вместо возвращения кода иконки, верните только имя иконки
                return Results.Text("CoffeeMaker");
            });

            app.Run();
        }
    }
}