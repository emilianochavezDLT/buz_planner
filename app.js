const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./db'); // Import Sequelize instance
const config = require('./config/config');

//middleware setup
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


//static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes Setup
const indexRoute = require('./urls/indexRoute');
app.use('/', indexRoute);




// Sync models and start the server
sequelize.sync({ force: true }).then(() => { //This creates the table if it doesn't exist (and does nothing if it already exists)
    console.log('Database & tables created!');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
});


//setting up the port
app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
}
);

module.exports = app;


