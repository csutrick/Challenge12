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
        };
    });
};

//Function to view departments
function viewDepartments() {
    let option = "SELECT * FROM department";

    db.query(option, function(err, res) {
        if (err) throw err;
        console.log("Viewing departments")
        console.table(res);
        initialPrompt();
    });
};
// Function to view roles
function viewRoles() {
    let option = "SELECT * FROM role";

    db.query(option, function(err, res) {
        if (err) throw err;
        console.log("Viewing roles")
        console.table(res);
        initialPrompt();
    });
};
// Function to view employees
function viewEmployees() {
    let option = "SELECT * FROM employee";

    db.query(option, function(err, res) {
        if (err) throw err;
        console.log("Viewing employees")
        console.table(res);
        initialPrompt();
    });
};
// Function to add departments
function addDepartments() {
    inquirer.prompt({
        type: "input",
        message: "Enter name of new department?",
        name: "departmentName"
    })
    .then(function(answer){
        db.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};
// Function to add roles
function addRoles() {
    inquirer.prompt([
    {
        type: "input",
        message: "Enter name of new role?",
        name: "roleName"
    },
    {
        type: "input",
        message: "Enter hourly pay of new role?",
        name: "roleWage"
    },
    {
        type: "input",
        message: "Enter department id number?",
        name: "departmentID"
    }
    ])
    .then(function(answer){
        db.query("INSERT INTO role (title, hrWage, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.roleWage, answer.departmentID], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};
// Function to add employees
function addEmployees() {
    inquirer.prompt([
    {
        type: "input",
        message: "Enter employee first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "Enter employee last name?",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter role id for employee?",
        name: "roleID"
    },
    {
        type: "input",
        message: "Enter manager id number?",
        name: "managerID"
    }
    ])
    .then(function(answer){
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};