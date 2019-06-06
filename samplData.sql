INSERT INTO employee_role (title)
VALUES ('manager'),('employee');

INSERT INTO "employees"
    ("email", "first_name", "last_name", "role_id")
VALUES
    ('bellamide@yahoo.com', 'bella', 'mide', '2'),
    ('thanks@gmail.com', 'tom', 'hanks', '1'),
    ('gbread@gmail.com', 'ginger', 'bread', '2'),
    ('jbourne@cia.com', 'jason', 'bourne', '2'),
    ('pwalker@yahoo.com', 'paul', 'walker', '2'),
    ('jbush@yahoo.com', 'jorge', 'bush', '1');


    INSERT INTO "shift_request"
    ("employees_id", "shift_start", "shift_end")
VALUES
    ('5', '2019-06-11 08:00:00', '2019-06-11 17:00:00'),
    ('5', '2019-06-13 08:00:00', '2019-06-13 17:00:00'),
    ('1', '2019-06-10 08:00:00', '2019-06-10 17:00:00'),
    ('2', '2019-06-14 08:00:00', '2019-06-14 17:00:00'),
    ('1', '2019-06-15 08:00:00', '2019-06-15 17:00:00')
;