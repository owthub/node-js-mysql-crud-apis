# node-js-mysql-crud-apis
Creating CRUD (Create, Read, Update, Delete) APIs with Node.js and MySQL is a common task in web development. These APIs enable you to interact with a MySQL database to perform basic data operations.

## Project Setup

1. Download Project
2. Run `npm install` command
3. Update database details from `database.js`
4. Create table 
`
   CREATE TABLE `employees` (
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `email` varchar(80) NOT NULL,
   `gender` enum('male','female','other') DEFAULT NULL,
   `mobile` varchar(30) DEFAULT NULL,
   PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
   `

6. Run APIs via Project URL

## Video Course Link
https://www.youtube.com/watch?v=1zTFlAnL0vw
