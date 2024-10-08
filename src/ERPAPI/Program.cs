using Autofac.Extensions.DependencyInjection;
using Autofac;
using ERPAPI;
using Microsoft.Data.SqlClient;
using Serilog;
using Serilog.Events;
using System.Data;

var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .Build();

Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .CreateBootstrapLogger();

try
{

    var builder = WebApplication.CreateBuilder(args);
    Log.Information("Starting web API Building");

    ////
    ///serilog Configure
    ///

    builder.Host.UseSerilog((ctx, lc) => lc
          .MinimumLevel.Debug()
          .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
          .Enrich.FromLogContext()
          .ReadFrom.Configuration(builder.Configuration));

    /// Autofac Configuration
    builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
    builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
    {
        containerBuilder.RegisterModule(new WebModule());
    });


    // Add services to the container.
    builder.Services.AddScoped<IDbConnection>((sp) => new SqlConnection(
    builder.Configuration.GetConnectionString("Agriculture")));


    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    Log.Information("API Started");

    app.Run();
}
catch (Exception ex)
{
    Log.Information($"Stopped program because of exception {ex.Message}");
    Log.Fatal(ex, "API start-up failed");
}
finally
{
    Log.Information("Shut down complete");
    Log.CloseAndFlush();
}