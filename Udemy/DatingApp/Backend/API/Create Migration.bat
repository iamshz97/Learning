@REM Create migrations
dotnet ef migrations add InitialCreate -o Data/Migrations

@REM Create database
dotnet ef database update