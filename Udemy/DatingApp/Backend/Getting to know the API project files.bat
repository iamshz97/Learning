@REM run the project
dotnet run

@REM create trusted certificate
dotnet dev-certs https --trust

@REM application live make changes - File watcher
dotnet watch run