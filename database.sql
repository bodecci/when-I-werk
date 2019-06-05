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
last_name VARCHAR(25),
role_id INTEGER REFERENCES employee_role(id) DEFAULT 2
);

INSERT INTO employees (email, first_name, last_name, role_id)
VALUES ('bode@yahoo.com', 'bodi', 'fals', 2);
INSERT INTO employees (email, first_name, last_name, role_id)
VALUES ('sharmarke@yahoo.com', 'sharmarke', 'douala', 1);


---- TODO: Shift type: half day or full day
--CREATE TABLE shift_type
--(id SERIAL PRIMARY KEY,);

-- group of shift request and # of hours
CREATE TABLE shift_request
(
id SERIAL PRIMARY KEY,
employee_id INTEGER REFERENCES employees(id),
shift_date TIMESTAMP WITH TIME ZONE NOT NULL
--TODO: shift_hours INTEGER REFERENCES shift_type(id)
);


--- employee shifts view
SELECT "employee_id", "shift_date", "email", "first_name", "last_name", "role_id"  FROM "shift_request"
JOIN "employees" ON "employee_id" = "employees"."id";


--Insert into the tables
INSERT INTO "employees" ("email", "first_name", "last_name", "role_id")
VALUES ('bellamide@yahoo.com', 'bambino', 'darshiki', '2');

INSERT INTO "shift_request" ("employee_id", "shift_date")
VALUES ('4', '2019-06-13');


