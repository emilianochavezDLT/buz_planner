## Creating a Model

The nice things about creating the model using the CLI is that it templates everything out for you. So you can just run the simple commands and if you need something a specfic datatype other than a string then you can just add it in the correct .js model file.

#### CLI Model
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

> *Remember this just creates the model. It does NOT migrate into the database just yet. Use the migrate command from [bellow](#migrating-commands). Make sure that you all of the datatype that you need from your model first !!!*

This Creates Two Files

First is the model like so:
```javascript
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

```
The Second File is the .js file in the migrations directory/folder. You can mess around with this file like changing the name of the table or changing options
```javascript
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { //This Specifies the name of the Table
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

```


In the Database a Table should be created. Aside from the columns that you have created, there are going to be additional ones. These include:

- id
- createdAt
- updatedAt

These are useful columns to have!
> If you have tables previously created then you might have to delete them. I had that in my case.

[Implementation of the Using Models](https://www.youtube.com/watch?v=NXeDkp9BZAY&t=642s)

--- 
## Relationships

- Userful Article on Relationships: [Relationship Guide](https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554)
---

## Migrating Commands 

Running the Migrations
```bash
npx sequelize-cli db:migrate
```

Undoing Migrations

- Undoing a Recent Migration: this command will revert the most recent migration.
```bash
npx sequelize-cli db:migrate:undo
```
Undoing a Specific Migration
- This command will revert a specific file migration.
```bash
npx sequelize db:migrate:undo --name <xxxxxxxx-migration-file-name>
```

- Undoing ALL Migration
```bash
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```