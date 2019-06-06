## Shift Creatr
This is an app that lets employees create shift and displays the shift

### Setup
Follow the instructions below

### PostgreSQL for database
#### Step 1: create database by pasting the following command into terminal:
psql -E -f database.sql -d when-I-work

#### Step 2: Insert dummy data into tables: paste the command below in terminal:
psql -E -f samplData.sql -d when-I-work

#### Step 3: Install dependencies:
npm install

#### Step 4: spinup server:
npm run server

#### Step 5: Start the client:
npm run client


## Technologies Used:
React
Redux
REST APIs
CSS
Material UI
PostgreSQL
Node
Express
