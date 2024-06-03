const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//middleware setup
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


//static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes Setup
const indexRoute = require('./urls/indexRoute');
app.use('/', indexRoute);



//setting up the port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);

module.exports = app;


