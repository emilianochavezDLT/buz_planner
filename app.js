const express = require('express');
const app = express();
const path = require('path');
const { sequelize } = require('./models');


//middleware setup
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


//static files
app.use(express.static(path.join(__dirname, 'client/build')));
//public folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes Setup
const indexRoute = require('./urls/indexRoute');
app.use('/', indexRoute);

const userRoute = require('./urls/userRoutes');
app.use('/users', userRoute);


//database connection
const connectDB = async () => {

  console.log('Checking Database Connection...');
  try {
    await sequelize.authenticate();
    console.log('Database Connection has been established successfully')
  }
  catch (error) {
    console.error('Error connecting to the database: ', error);
    process.exit(1);
  }

};


//setting up the port
app.listen(5001, () => {
  connectDB();
  console.log(`Server is running on http://localhost:5001`);
});



module.exports = app;


