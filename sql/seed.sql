INSERT INTO department (name)
VALUES ("Clerk"),
("Bagger"),
("Stocker"),
("Manager"),
("Supervisor");

INSERT INTO role (title, hrWage, department_id)
VALUES ("Checkout clerk", 18, 1),
("Grocery bagging", 17, 2),
("Stocks items", 20, 3),
("Oversees individual departments", 23, 4),
("Incharge of all departments", 31, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sophia", "Anderson", 1, 4),
("Ben", "Wright", 2, 4),
("Olivia", "Ramirez", 3, 4),
("Alexander", "Martinez", 3, 5),
("Ethan", "John", 4, 5);