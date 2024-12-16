using System;
using AdminCosmetic.Models;
using Microsoft.EntityFrameworkCore;

namespace AdminCosmetic.Respository
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DbContext> options) : base(options)
		{

		}
		public DbSet<ProductModel> Products { get; set; }
		public DbSet<CategoryModel> Categories { get; set; }
	}
}

