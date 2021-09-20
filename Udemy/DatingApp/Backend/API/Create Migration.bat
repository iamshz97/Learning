@REM Create migrations
dotnet ef migrations add InitialCreate -o Data/Migrations

@REM Create database
dotnet ef database update

@REM update user entity
dotnet ef migrations add UserPasswordAdded

@REM update database
dotnet ef database update