const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connecting to SQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      // REMOVE PASSWORD AND COMMENT
      password: 'crsejs11',
      database: 'Employee_MngDB'
    },
    console.log(`Connected to the Employee_MngDB database.`),

    // Call first prompt
    initialPrompt()
);

// First prompt to user
function initialPrompt() {
    inquirer
    .prompt({
        type: "list",
        choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add departments",
            "Add roles",
            "Add employees",
            "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
    })
    .then(function ({ option }) {
        switch (option) {
            case "View departments":
            viewDepartments();
            break;
  
            case "View roles":
            viewRoles();
            break;
        
            case "View employees":
            viewEmployees();
            break;
  
            case "Add departments":
            addDepartments();
            break;
  
            case "Add roles":
            addRoles();
            break;
  
            case "Add employees":
            addEmployees();
            break;
  
            case "Quit":
            db.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', err);
                } else {
                    console.log('Connection to the database has been closed.');
                }
                });
            break;
        }
    });
};

//Function to view departments
function viewDepartments() {
    let option = "SELECT * FROM department";

    db.query(option, function (err, res) {
        if (err) throw err;
        console.log("Viewing departments")
        console.table(res);
    });
    console.log("Select next option")
    initialPrompt();
};
// Function to view roles
function viewRoles() {
    let option = "SELECT * FROM role";

    db.query(option, function (err, res) {
        if (err) throw err;
        console.log("Viewing roles")
        console.table(res);
    });
    console.log("Select next option")
    initialPrompt();
};
// Function to view employees
function viewEmployees() {
    let option = "SELECT * FROM employee";

    db.query(option, function (err, res) {
        if (err) throw err;
        console.log("Viewing employees")
        console.table(res);
    });
    console.log("Select next option")
    initialPrompt();
};
// Function to add departments
function addDepartments() {
    console.log("add dep");
};
// Function to add roles
function addRoles() {
    console.log("add role");
};
// Function to add employees
function addEmployees() {
    console.log("add empl");
};