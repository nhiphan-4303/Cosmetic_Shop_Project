using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shop.Data;
var builder = WebApplication.CreateBuilder(args);
//    options.UseSqlServer(builder.Configuration.GetConnectionString("ShopContext") ?? throw new InvalidOperationException("Connection string 'ShopContext' not found.")));
var connectionString = builder.Configuration.GetConnectionString("ShopContext");

builder.Services.AddDbContext<ShopContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "Admin",
    pattern: "{controller=Categories}/{action=Index}/{id?}");

app.Run();
