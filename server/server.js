const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');


// routes
const employeeShiftRequestRouter = require('./routes/employeeShiftRequest.router');
const managerShift = require('./routes/managerShift.router');