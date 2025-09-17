 

# Library Management System - Single Page Application

![Project Version](https://img.shields.io/badge/Version-1.0-blue.svg)  
![API Framework](https://img.shields.io/badge/API-ASP.NET%208.0-blueviolet.svg)  
![Frontend Framework](https://img.shields.io/badge/Frontend-Angular%2017.0-red.svg)  
![Database](https://img.shields.io/badge/Database-MS%20SQL%20Server%202016-green.svg)  
![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)

This is a **Library Management System** developed as a single-page web application using **ASP.NET 8** for the backend and **Angular 17** for the frontend. The system allows users to manage and track library books, categories, users, and their roles. It includes features for students and administrators with role-based access.

---

## 🌐 **Live Demo**  

- **Frontend (Angular 17):**  
  [Library Management System (GitHub Pages)](https://deboraj-roy.github.io/Library-Management-System-SinglePage/)  
  [Library Management System (Netlify)](https://librarydeb.netlify.app/)

- **Backend (ASP.NET 8 API with Swagger):**  
  [Library API (Swagger Documentation) 1](http://deblmsapi.runasp.net/)

  [Library API (Swagger Documentation Using Cloudflare) 2](https://green-breeze-a7aa.mrouf7353.workers.dev/)

---

## 📂 **Project Structure**  

### Backend (ASP.NET 8 API)  
- **Framework:** .NET 8  
- **Database:** Microsoft SQL Server 2016  
- **Authentication:** JWT Authentication  
- **Key Features:**  
  - User authentication and authorization  
  - Role-based access (Admin/Student)  
  - Book and category management  
  - Fine calculation for overdue book returns  
  - User management (block/unblock users)  

### Frontend (Angular 17)  
- **Framework:** Angular 17  
- **UI/UX:** Single Page Application (SPA)  
- **Key Features:**  
  - **Authorization Module:** Manages user login and registration  
  - **Student Panel:**  
    - View and borrow books  
    - Check fine details  
  - **Admin Panel:**  
    - Manage books and categories  
    - Block/unblock users  
    - Monitor user activity  

---

## 🔑 **Key Features**  

### 1. **Authentication System**  
- Users can register and log in using their credentials.  

### 2. **JWT Authentication**  
- Securely stores user information in tokens within the browser for session management.  

### 3. **Role-based Authorization**  
- Admin and students have different access privileges, ensuring secure and role-specific operations.  

### 4. **Manage Books and Categories**  
- Admins can add, update, and delete books and categories.  

### 5. **User Blocking**  
- Admins can block or unblock users to manage access to the system.  

### 6. **Fine Calculation**  
- Calculates fines for overdue book returns and displays them in the user panel.

---

## 🛠️ **Technologies Used**  

### Backend  
- **Framework:** ASP.NET 8  
- **Language:** C#  
- **Database:** MS SQL Server 2016  
- **Authentication:** JWT (JSON Web Tokens)

### Frontend  
- **Framework:** Angular 17  
- **Language:** TypeScript  
- **UI Components:** Angular Material  

---

## 🚀 **Getting Started**  

### Prerequisites  
- **Node.js** (for running Angular)  
- **Visual Studio 2022** (for ASP.NET development)  
- **SQL Server 2016** (for the database)

### Backend Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Deboraj-roy/Library-Management-System-SinglePage.git
   ```
2. Open the API project in **Visual Studio 2022**.  
3. Update the connection string in `appsettings.json` to match your database configuration.  
4. Run the project to initialize the database and start the API.

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash
   cd Library-Management-System-SinglePage/src/Front-end-web
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run the Angular application:  
   ```bash
   ng serve
   ```
4. Open the application in your browser at `http://localhost:4200`.

---

## 🌟 **Screenshots**  
![Login Page](https://i.ibb.co.com/FJzjcLs/image.png/800x400?text=Login+Page)  
*Login Page*  

![Admin Dashboard](https://i.ibb.co.com/jkYnkGX/image.png/800x400?text=Admin+Dashboard)  
*Admin Dashboard*  

---

## 📖 **Tutorial**  

This project is inspired by the tutorial from **PROgrammer Rohan**:  
[How to Build Library Management System with Angular and ASP.NET](https://www.youtube.com/watch?v=kCaeIpvzEiM)

---

## 🤝 **Contributing**  

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

---

## 📄 **License**  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 📧 **Contact**  

For any inquiries or issues, feel free to contact me:  
**Deboraj Roy**  
- [GitHub Profile](https://github.com/Deboraj-roy)  
 
