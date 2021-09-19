@REM dotnet version check (shows installed SDKs)
dotnet --info

@REM get new command help(Shows the templates available)
dotnet new -h

@REM new solution file
dotnet new sln

@REM create web api template project
dotnet new webapi -o API

@REM add web api project to solution
dotnet sln add API