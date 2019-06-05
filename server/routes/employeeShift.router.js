const express = require('express');
const pool = require('../module/pool');
const router = express.Router();


router.get('/', (req, res) => {
    
        const queryText = `SELECT "employees_id" AS "Employee_ID", 
                        "shift_start" AS "Start_Time", 
		                "shift_end" AS "End Time", "email", 
                        "first_name" AS "FIrst_Name", "last_name" AS "Last_Name", "role_id"  
                        FROM "shift_request"
                        JOIN "employees" ON "employees_id" = "employees"."id";`;
    
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET for employee shift', error);
        res.sendStatus(500);
    });
});

router.post('/', async(req, res) => {
    const client = await pool.connect();
    const newShift = req.body;
    console.log(newShift);
    

    try {
        await client.query('BEGIN');
        const firstInsert = `INSERT INTO "employees" 
                            ("email", "first_name", "last_name")
                            VALUES ($1, $2, $3) RETURNING "id";`;
        const firstResult = await client.query(firstInsert, [newShift.email, newShift.firstName,
                                                newShift.lastName]);
        const categoryId = firstResult.rows[0].id;
        const lastInsert = `INSERT INTO "shift_request" 
                            ("employees_id", "shift_start", "shift_end")
                            VALUES ($1, $2, $3);`;
        await client.query(lastInsert, [categoryId, newShift.shiftStart, newShift.shiftEnd]);
        await client.query('COMMIT');
        res.sendStatus(201);
    } catch(error) {
        console.log('Error i POST: ', error);
        await client.query('ROLLBACK');
        res.sendStatus(500);
    } 
    finally { 
        client.release();
    }
});

// router.delete('/', (req, res) => {
//     // if(req.isAuthenticated()) {

//     // }
// })

module.exports = router;