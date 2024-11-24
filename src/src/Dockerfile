# Stage 1: Build Angular Frontend
FROM node:18 AS frontend-builder

# Set the working directory in the container
WORKDIR /app/frontend
RUN apt-get update && apt-get install -y nodejs

# Copy Angular project files
COPY ./Front-end-web/ .

# Install dependencies and build the Angular app
RUN npm install
RUN npm run build --prod

# Stage 2: Build ASP.NET API
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

EXPOSE 80
EXPOSE 443

# Copy built Angular files from Stage 1 to serve as static files in the API
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend-builder
WORKDIR /src

# Copy the API project files and restore dependencies
COPY ./API/LMS_API/ ./API/LMS_API/
RUN dotnet restore "./API/LMS_API/LMS_API.csproj"

# Copy the entire API directory and publish the API
COPY . .
# WORKDIR "/API/LMS_API/LMS_API"
# RUN dotnet build "LMS_API.csproj" -c Release -o /app

# FROM build AS publish
# RUN dotnet publish "LMS_API.csproj" -c Release -o /app

# FROM build AS final
# WORKDIR /app
# COPY --from=publish /app .
# EXPOSE 80
# ENTRYPOINT ["dotnet", "LMS_API.dll"]



RUN dotnet publish "./API/LMS_API/LMS_API.csproj" -c Release -o /app/publish

# Final Stage: Run the application
FROM base AS final
WORKDIR /app
COPY --from=backend-builder /app/publish .
COPY --from=frontend-builder /app/frontend/dist /app/wwwroot # Adjust path if necessary
EXPOSE 82

# Run the API
ENTRYPOINT ["dotnet", "LMS_API.dll"]
