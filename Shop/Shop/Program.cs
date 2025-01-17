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

@* <!DOCTYPE html> *@
@*  <html lang="en"> *@
@* <head> *@
@*      <meta charset="utf-8" /> *@
@*     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> *@
@*     <title>@ViewData["Title"] - Shop</title> *@
@*      <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" /> *@
@*      <link rel="stylesheet" href="~/css/site.css" asp-append-version="true" /> *@
@*      <link rel="stylesheet" href="~/Shop.styles.css" asp-append-version="true" /> *@
@*  </head> *@
@* <body> *@
@*      <header> *@
@*          <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"> *@
@*              <div class="container-fluid"> *@
@*                  <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Shop</a> *@
@*                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" *@
@*                         aria-expanded="false" aria-label="Toggle navigation">  *@
@*                         <span class="navbar-toggler-icon"></span> *@
@*                  </button> *@
@*                  <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between"> *@
@*                      <ul class="navbar-nav flex-grow-1"> *@
@*                          <li class="nav-item"> *@
@*                              <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a> *@
@*                         </li> *@
@*                          <li class="nav-item"> *@
@*                              <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a> *@
@*                          </li> *@
@*                      </ul> *@
@*                  </div> *@
@*             </div> *@
@*        </nav> *@
@*      </header>  *@
@*      <div class="container">  *@
@*          <main role="main" class="pb-3">  *@
@*              @RenderBody()  *@
@*          </main>  *@
@*      </div>  *@

@*      <footer class="border-top footer text-muted">  *@
@*          <div class="container">  *@
@*              &copy; 2024 - Shop - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>  *@
@*          </div>  *@
@*      </footer>  *@
@*      <script src="~/lib/jquery/dist/jquery.min.js"></script>  *@
@*      <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>  *@
@*     <script src="~/js/site.js" asp-append-version="true"></script>  *@
@*      @await RenderSectionAsync("Scripts", required: false)  *@
@*  </body>  *@
@*  </html>  *@