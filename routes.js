const express = require("express");
const connection = require("./database");

const router = express.Router();

// Add Employee API (POST Request)
// name, email, gender, mobile
router.post("/add-employee", (req, res) => {

    connection.query("SELECT * FROM employees WHERE email = ?", [req.body.email], (error, data) => {

        if (error) {

            res.json({
                status: false,
                message: "Failed to execute query"
            })
        } else {

            if (data.length > 0) {

                // Employee exists with this email value
                res.json({
                    status: false,
                    message: "Employee already exists"
                });
            } else {

                // Employee not found
                connection.query("INSERT INTO employees (name, email, gender, mobile) VALUES (?, ?, ?, ?)", [req.body.name, req.body.email, req.body.gender, req.body.mobile], (error, data) => {

                    if (error) {

                        res.json({
                            status: false,
                            message: "Failed to create an employee"
                        });
                    } else {

                        res.json({
                            status: true,
                            message: "Employee saved successfully"
                        });
                    }
                });
            }
        }
    });
});

// List all employee (GET)
router.get("/list-employee", (req, res) => {

    connection.query("SELECT * FROM employees", (error, data) => {

        if (error) {

            res.json({
                status: false,
                message: "Failed to execute query"
            });
        } else {

            if (data.length > 0) {

                // data
                res.json({
                    status: true,
                    message: "Employees found",
                    users: data
                });
            } else {

                res.json({
                    status: false,
                    message: "No employee found"
                });
            }
        }
    });
});

// Single employee data api (GET)
router.get("/single-employee/:id", (req, res) => {

    let employeeId = req.params.id;

    connection.query("SELECT * FROM employees WHERE id = ?", [employeeId], (error, data) => {

        if (error) {

            res.json({
                status: false,
                message: "Failed to execute query"
            });
        } else {

            if (data.length > 0) {

                res.json({
                    status: true,
                    message: "Employee found",
                    user: data
                });
            } else {

                res.json({
                    status: false,
                    message: "No employee found with employee ID"
                });
            }
        }
    });
});

// Update employee (PUT)
router.put("/update-employee/:id", (req, res) => {

    let employeeId = req.params.id;

    connection.query("SELECT * FROM employees WHERE id = ?", [employeeId], (error, data) => {

        if (error) {
            res.json({
                status: false,
                message: "Failed to execute query"
            });
        } else {

            if (data.length > 0) {

                // Exists
                connection.query("UPDATE employees SET name = ?, email = ?, mobile = ? WHERE id = ?", [req.body.name, req.body.email, req.body.mobile, employeeId], (error, data) => {

                    if (error) {

                        res.json({
                            status: false,
                            message: "Failed to execute query"
                        });
                    } else {

                        res.json({
                            status: true,
                            message: "Employee updated successfully"
                        });
                    }
                });
            } else {

                res.json({
                    status: false,
                    message: "No employee found"
                });
            }
        }
    });
});

// Delete Employee (DELETE)
router.delete("/delete-employee/:id", (req, res) => {

    let employeeId = req.params.id;

    connection.query("SELECT * FROM employees WHERE id = ?", [employeeId], (error, data) => {

        if (error) {

            res.json({
                status: false,
                message: "Failed to execute query"
            });
        } else {

            if (data.length > 0) {

                // Exists
                connection.query("DELETE FROM employees WHERE id = ?", [employeeId], (error, data) => {

                    if (error) {

                        res.json({
                            status: false,
                            message: "Failed to execute query"
                        });
                    } else {

                        res.json({
                            status: true,
                            message: "Employe deleted successfully"
                        });
                    }
                });
            } else {

                res.json({
                    status: false,
                    message: "No employee found"
                });
            }
        }
    })
});


// Welcome page route
router.get("/", (req, res) => {

    res.json({
        status: 1,
        message: "Welcome to Node js with MySQL APIs"
    })
});

module.exports = router;