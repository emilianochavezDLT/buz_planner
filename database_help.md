# Creating a New Server on pgAdmin

Open pgAdmin and set up a new server connection.
Enter the following details:
```bash
    Host name/address: localhost
    Port: 5432
    Maintenance database: postgres
    Username: postgres
    Password: The password you set during the installation
```


# Commands
- [PostgreSQL Offical Documentation](https://www.postgresql.org/docs/current/tutorial.html)

### Verify the connection to the database
```bash
psql -h localhost -p 5432 -U postgres -d nameofdb
```

Example
```bash

Password for user postgres: 
psql (16.3)
Type "help" for help.

buz_planner=# "commands here e.x CREATE DATABASE "nameofdb" "


```

### Creating a Database
```bash
createdb dbnamehere
```

### Destroying the Database
```bash
dropdb nameofdb
```

### Acessing the Database
```bash
psql dbname
```
- #### Shows up a greeting message
- command prompt for psql is 
    ```bash
        nameofdb=> 
    ```
    - For Help:
        ```bash
            nameofdb=> \h 
        ```
    - To Quit
        ```bash
            nameofdb=> \q
        ```

---
### This Part is no Longer Used Go Further Down
 - [Click Here to Go to the Correct Section](#cli-sequalize)
#### Connecting PostgreSQL with Node.JS
Reference: 
- [Tembo Article](https://tembo.io/docs/getting-started/postgres_guides/connecting-to-postgres-with-nodejs)


```bash
npm install pg
```

Create a .js file for db connection
```javascript
// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // PostgreSQL username
  host: 'localhost', // Host name
  database: 'dbname', // Database name
  password: 'your_password', // PostgreSQL password
  port: 5432, // Default port number
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = pool;

***********************************************
// app.js
const express = require('express');
const pool = require('./db'); // Import the database connection
```

My db.js file
```javascript
// Initialize the database connection
const { Client } = require('pg');

//Database configuration
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'database_name,
    password: null,
    port: 5432,
};

//Creating a new instance of the Client
const client = new Client(dbConfig);

client
    .connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database unable to connect', err.stack));

// Method to close the connection
const closeConnection = () => {
    return client.end()
      .then(() => console.log('Database connection closed'))
      .catch((err) => console.error('Error closing the database connection', err.stack));
  };
  
  // Exporting the client and closeConnection method
  module.exports = { client, closeConnection };
```
---

#### Check Further Down For CLI Use Because the CLI Creates All Of The Files and Folders That You Need

OR do a config file in the /config folder with this information
```javascript

// config/config.js
module.exports = {
    db:{
        username: 'postgres',
        password: null,
        database: 'database_name',
        host: 'localhost',
        dialect: 'postgres',
    },
    port: process.env.PORT || 5001

};


*****************************************
// models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect
});

async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
  
//Connect to the database
connectToDatabase();

//Initialize the database
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

///more code 

**********************************

```
--- 

## CLI Sequalize
- You made it if you clicked on the blue link from [here](#this-part-is-no-longer-used-go-further-down)
 - [Sequalize Migration CLI DOC](https://sequelize.org/docs/v6/other-topics/migrations/)

Installing the Sequelize Command Line Prompt
```bash
npm install --save-dev sequelize-cli
```

Creating Those Folder and Files
```bash
npx sequelize-cli init
```
Creates Files
 - config  
 - models 
 - migrations
 - seeders

```bash
 - ROOT
    |-config
        |-config.json 
    |-models
    |-migrations
    |-seeders

```

- Config File:
```bash
- ROOT
    |-config
        |-config.json
```

```json
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "database",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "database",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "database",
    "host": "localhost",
    "dialect": "postgres"
  }
}
```
## Reference creating_models.md on the model folder on the Sequalize CLI