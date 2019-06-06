--- Employee roe. Manager or employee
CREATE TABLE employee_role
(
id SERIAL PRIMARY KEY,
title VARCHAR(25) NOT NULL
);



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





--- employee shifts view
SELECT "employees_id" AS "Employee_ID", "shift_start" AS "Start_Time", 
		"shift_end" AS "End Time", "email", 
        "first_name" AS "FIrst_Name", "last_name" AS "Last_Name", "role_id"  
        FROM "shift_request"
        JOIN "employees" ON "employees_id" = "employees"."id";
