const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const employeeShiftRouter = require('./routes/employeeShift.router');
// const managerShiftRouter = require('./routes/managerShift.router');


/** Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));


/** Routes */
app.use('/api/employee', employeeShiftRouter);
// app.use('/api/manager', managerShiftRouter);



/** Start Up Server */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;