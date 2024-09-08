const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { sequelize } = require('./models');
const verifyJWT = require('./services/verifyJWT');
const cookieParser = require('cookie-parser');


//middleware setup

// for parsing application/json
app.use(express.json()); 

// for form data
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded 

// for parsing cookies
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000', //Only allow requests from the frontend
}
app.use(cors(corsOptions)); //Need to allow CORS for the frontend to access the backend

//static files
app.use(express.static(path.join(__dirname, 'client/build')));
//public folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes Setup
const indexRoute = require('./urls/indexRoute');
app.use('/', indexRoute);

const userRoute = require('./urls/userRoutes');
app.use('/users', userRoute);

const authRoute = require('./urls/auth');
app.use('/auth', authRoute);

const refreshRoute = require('./urls/refresh');
app.use('/auth', refreshRoute);


//Any routes after this line will be protected
app.use(verifyJWT);  //This will check if the user is authorized to access the routes
const projectRoute = require('./urls/project');
app.use('/projects', projectRoute);




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


