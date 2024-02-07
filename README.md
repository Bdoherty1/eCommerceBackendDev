# eCommerce Backend Application

## Description
This project is a backend application for an eCommerce platform. It provides APIs to manage products, categories, and tags in the database. The application is built using Node.js, Express.js, and Sequelize ORM for interacting with the MySQL database.

## Features
- CRUD operations for products, categories, and tags
- Associations between products, categories, and tags
- RESTful API endpoints for managing data

## Installation
1. Clone the repository: git clone https://github.com/your-username/ecommerce-backend.git
2. Navigate to the project directory
3. Install dependencies: npm install
4. Set up your MySQL database and configure the connection in `.env` file based on `.env.example`.

## Usage
1. Start the server: npm start
2. Use API endpoints to interact with the application. You can use tools like Insomnia or Postman to make HTTP requests.

## Database
- The application uses a MySQL database to store product, category, and tag data.
- Sequelize ORM is used for database interactions.
- Migrations and seed files are provided to set up the initial database schema and insert sample data.

## Folder Structure
.
├── config/ # Configuration files
├── models/ # Sequelize models
├── routes/ # Express routes
├── db/ # Database seed scripts
├── seeds/ # Seed files for sample data
└── server.js # Entry point

## Images
