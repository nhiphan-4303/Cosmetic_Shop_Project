# 🪞 ANNA Cosmetic E-commerce Website 🪞
![MIT](https://img.shields.io/badge/License-MIT-green) ![HTML](https://img.shields.io/badge/Frontend-HTML-orange) ![CSS](https://img.shields.io/badge/CSS-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow) ![ASP.NET](https://img.shields.io/badge/Backend-ASP.NET-purple) ![MySQL](https://img.shields.io/badge/Database-MySQL-lightblue)


## 📖 About the Project

**ANNA Cosmetic** is a dynamic e-commerce website that redefines the online beauty shopping experience. It offers a seamless, user-friendly interface for customers while equipping administrators with powerful tools for backend management. Built as part of an academic project, this platform serves as the foundation for a fully interactive and scalable system.

The project blends intuitive design with robust functionality, ensuring both customers and administrators have a streamlined and efficient experience.


## ✨ Features

### 🛍️ Customer Features
- **🔍 Product Browsing**: Explore a wide range of cosmetic products with detailed descriptions and images.
- **🔐 User Accounts**: Register, log in, and manage personal accounts securely.
- **🛒 Shopping Cart**: Add, update, or remove products, calculate total costs, and proceed to checkout.
- **📱 Responsive Design**: Optimized for desktop and mobile devices for an enhanced user experience.

### 🔧 Admin Features
- **📂 CRUD Operations**:
  - Manage product categories and product details.
  - View, update, and delete customer accounts.
- **📦 Inventory Management**: Track product availability and update stock details.
- **👥 User Management**: Securely manage customer accounts and access permissions.

## 🛠️ Technologies Used

### 🌐 Frontend
- **🧱 HTML**: Structured the content and layout of the website.
- **🎨 CSS**: Styled and enhanced the visual appeal of the application.
- **⚡ JavaScript**: Enabled interactivity and dynamic features.

### 🖥️ Backend
- **🛠️ ASP.NET Core**: Provided a robust, scalable, and secure backend framework.
- **🗄️ MySQL**: Managed relational data efficiently.
- **🌍 GitHub**: Version control and collaborative development.

## ⚙️ Installation

1. **📦 Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Cosmetic-ecommerce-website.git
   cd Cosmetic-ecommerce-website
   ```

2. **🔧 Set Up the Backend**:
   - **Install XAMPP**:
     - Download and install XAMPP from the [official website](https://www.apachefriends.org/index.html).
     - Start the **Apache** and **MySQL** services in the XAMPP control panel.

   - **Import Database**:
     - Open phpMyAdmin at `http://localhost/phpmyadmin`.
     - Create a new database (e.g., `anna_cosmetic`).
     - Import the SQL file `shop.sql` provided in the repository.

   - **Configure Database Connection**:
     - Locate the configuration file in your project (e.g., `appsettings.json`).
     - Update the database connection string with your XAMPP MySQL credentials:
       ```json
       "ConnectionStrings": {
         "DefaultConnection": "Server=localhost;Database=anna_cosmetic;User Id=root;Password=;"
       }
       ```

3. **🚀 Run the Application**:
   - Copy the project files to the `htdocs` directory in your XAMPP installation (e.g., `C:/xampp/htdocs/Cosmetic-ecommerce-website`).
   - Open your browser and navigate to `http://localhost/Cosmetic-ecommerce-website`.


## 🚀 Usage

### 🛒 Customer View
- Navigate to the homepage to browse products.
- Register or log in to access account features.
- Add items to the cart and proceed to checkout.

### 🔧 Admin Panel
- Log in with admin credentials.
- Manage products, categories, and user accounts via the dashboard.

## 📂 Database Structure

The system uses a relational database to store product, category, order, and user data. Key tables include:

1. **👤 Customer Table**: Stores user account information.
2. **🛍️ Product Table**: Manages product details like name, description, and stock.
3. **📦 Order Table**: Tracks customer orders and their statuses.
4. **📃 OrderDetail Table**: Records individual order items and quantities.

For detailed database schema, refer to `shop.sql`.

## 🤝 Contributors

- **👩‍💻 Phan Ngọc Hạnh Nhi** ([@nhiph4303](https://github.com/nhiph4303))  
- **👩‍💻 Trần Mai Anh** ([@Tran-Mai-Anh](https://github.com/Tran-Mai-Anh))  

🧑‍🏫 **Supervisor**: Mr. Ung Văn Giàu


## 🔮 Future Enhancements

- **💳 Payment Gateway Integration**: Enable secure online transactions.
- **📊 Advanced Analytics**: Provide insights into user behavior and sales trends.
- **🚚 Order Management**: Allow customers to track orders in real time.
- **🤖 Improved Recommendations**: Implement AI-driven product suggestions.
  
---

Feel free to ⭐ the repository, open issues, or fork the project for your own development! 😊
