# Challenge 12

## Description

Video walkthrough:
https://drive.google.com/file/d/1MbqVrd8Ri9DySBpMFfIGacG6PmMFhrQS/view 

This command line appilcation was created to help stores manage there employees. You can veiw your departments, roles within the store, employees, while viewing roles and who reports to who. I think this assignment was prety straight forward. However in the end i struggled with jsut laying out the basic layout, and figuring out the switch statement.

## Installation

Follow these steps to create and populate the database.
1. npm install
2. log into sql account using "mysql -u root-p"
3. once log in run the schema file using "source sql/schema.sql"
4. run the seed file to populate the database with fake itmes using "source sql/seed.sql"
5. run the command "quit" to leave the sql workspace
6. now to run the application just enter "npm start" in the terminal

## Usage

When starting the application you are promted with multiple choices to choose from. Upon selecting a choice you can perform the desired action like just veiwing, or even adding people, roles, and departments. After each choice you select you are able to do that choice then are prompted with the same starting choices allowing you to move around and manage the database nicely. When you want to close it, simply just navigate to the quit option.

## Credits

Cole Sutrick

I used the following sites to help me figure out and learn about the Javascript Switch Statement.
https://www.w3schools.com/js/js_switch.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

## License

MIT
Please refer to the LICENSE in the repo.
