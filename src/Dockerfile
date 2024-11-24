# Stage 1: Build Angular Frontend
FROM node:18 AS frontend-builder
WORKDIR /app/frontend
COPY ./Front-end-web/ .
RUN npm install
RUN npm run build --prod

# Stage 2: Build ASP.NET API
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend-builder
WORKDIR /src
COPY ./API/LMS_API/ ./API/LMS_API/
RUN dotnet restore "./API/LMS_API/LMS_API.csproj"
COPY . .
RUN dotnet publish "./API/LMS_API/LMS_API.csproj" -c Release -o /app/publish

# Stage 3: Final stage with Nginx for Angular and ASP.NET API
FROM nginx:alpine AS final
WORKDIR /app

# Copy Angular static files to Nginx directory
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html
# Copy the .NET API build files to a directory within the container
COPY --from=backend-builder /app/publish /app

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80   # Nginx (for Angular frontend)
EXPOSE 7030 # ASP.NET API

# Start both Nginx and the ASP.NET API
CMD ["sh", "-c", "dotnet /app/LMS_API.dll & nginx -g 'daemon off;'"]
