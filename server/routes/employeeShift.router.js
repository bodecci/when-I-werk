const express = require('express');
const pool = require('../module/pool');
const router = express.Router();


router.get('/', (req, res) => {
    
        const queryText = `SELECT "employee_id", "shift_date", "email", 
        "first_name", "last_name", "role_id"  FROM "shift_request"
        JOIN "employees" ON "employee_id" = "employees"."id";`;
    
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET for employee shift');
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
                            ("email", "first_name", "last_name", "role_id")
                            VALUES ($1, $2, $3, $4) RETURNING "id";`;
        const firstResult = await client.query(firstInsert, [newShift.email, newShift.first_name,
                                                newShift.last_name, newShift.role]);
        const categoryId = firstResult.rows[0].id;
        const lastInsert = `INSERT INTO "shift_request" 
                            ("employee_id", "shift_date")
                            VALUES ($1, $2);`;
        await client.query(lastInsert, [categoryId, newShift.shift_date]);
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