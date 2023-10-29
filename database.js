const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "Admin@123",
    database: "yt_node_mysql_apis"
});

mysqlConnection.connect((error) => {

    if (error) {

        console.log("Failed to connect with database");
    } else {

        console.log("Successfully, database connected");
    }
});

module.exports = mysqlConnection;
