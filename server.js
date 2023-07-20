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
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
    })
};