# Controllers
What are the purpose of controllers?

## Purpose:

- Handle incoming HTTP requests and route them to the appropriate service functions.
- Manage request and response objects.
- Perform request validation, handle errors, and send appropriate HTTP responses.

General File Setup for Controllers

- Not used in all occasion but useful. Adapt to your own situation
```javascript
//import service 
service = require('../file_insert')

some_function = async (req,res) => {
    try{
        const variable = req.body;
        const var2 = await service.function_from_service(parameter_needed_for_function)

        //response to send back
        res.status(200)
        .json(var2) // optional
    }
    //Catch if there's an error
    catch(error){
        res
            .status(400) //appropiate response
            .json({error: error.message})
            //or
            .json({error: 'Soemething wrong'})

    }
}

module.export = {
    some_function
    //other functions,
}

```

