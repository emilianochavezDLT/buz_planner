# Services
What is the purpose of services?

## Purpose

- Encapsulate business logic.
- Interact with the database models toperform CRUD (Create, Read, Update,Delete) operations.
- Provide a clean and reusable interface for controllers.

General File Setup for Services

- Adapt to your situation but serves as a general guideline.

```javascript
//Import your model from your models folder

const { model } = require('../models')

//Some CRUD Function
const createSomething = async (parameter_needed) =>{
    try{
        const var1 = await model.create(parameter_needed)
        return(var1)
    }
    catch(error){
        throw new Error(error, 'error message')
    }
}


//Don't forget to export
module.export = {
    createSomething
    //other service functions,
}

```