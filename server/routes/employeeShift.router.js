const express = require('express');
const pool = require('../module/pool');
const router = express.Router();
// const moment = require('moment-holiday');
// const moment_1 = require('moment-business-days');

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

// router.post('/', (req, res) => {
//     // if(req.isAuthenticated()){

//     // }
// })

// router.delete('/', (req, res) => {
//     // if(req.isAuthenticated()) {

//     // }
// })

module.exports = router;