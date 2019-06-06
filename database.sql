--- Employee roe. Manager or employee
CREATE TABLE employee_role
(
id SERIAL PRIMARY KEY,
title VARCHAR(25) NOT NULL
);

INSERT INTO employee_role (title)
VALUES ('manager'),('employee');

--- All users info. contact info and role
CREATE TABLE employees
(
id SERIAL PRIMARY KEY,
email VARCHAR(75) NOT NULL,
first_name VARCHAR(25) NOT NULL,
last_name VARCHAR(25) NOT NULL,
role_id INTEGER REFERENCES employee_role(id) DEFAULT 2
);




-- group of shift request and # of hours
CREATE TABLE shift_request
(
id SERIAL PRIMARY KEY,
employees_id INTEGER REFERENCES employees(id),
shift_start TIMESTAMP,
shift_end TIMESTAMP,
CONSTRAINT shift_start CHECK (shift_end > shift_start),
CONSTRAINT shift_cannot_overlap EXCLUDE USING gist 
(int4range(employees_id, employees_id, '[]') WITH =,
tsrange(shift_start, shift_end) WITH &&)
);






--Insert into the tables
INSERT INTO "employees"
    ("email", "first_name", "last_name", "role_id")
VALUES
    ('bellamide@yahoo.com', 'bella', 'mide', '2'),
    ('thanks@gmail.com','tom', 'hanks', '1'),
    ('gbread@gmail.com', 'ginger', 'bread', '2'),
    ('jbourne@cia.com', 'jason', 'bourne', '2'),
    ('pwalker@yahoo.com', 'paul', 'walker', '2'),
    ('jbush@yahoo.com', 'jorge', 'bush', '1');



INSERT INTO "shift_request" ("employees_id", "shift_start", "shift_end")
VALUES ('5', '2019-06-11 07:00:00', '2019-06-11 15:00:00'),
	   ('5', '2019-06-13 07:00:00', '2019-06-13 15:00:00'),
	   ('1', '2019-06-10 08:00:00', '2019-06-10 16:00:00'),
	   ('2', '2019-06-14 10:00:00', '2019-06-14 18:00:00'),
	   ('1', '2019-06-15 07:00:00', '2019-06-15 15:00:00')
;

INSERT INTO "shift_request" ("employees_id", "shift_start", "shift_end")
VALUES ('4', '2019-06-11 07:00:00', '2019-06-11 15:00:00');

--- employee shifts view
SELECT "employees_id" AS "Employee_ID", "shift_start" AS "Start_Time", 
		"shift_end" AS "End Time", "email", 
        "first_name" AS "FIrst_Name", "last_name" AS "Last_Name", "role_id"  
        FROM "shift_request"
        JOIN "employees" ON "employees_id" = "employees"."id";
