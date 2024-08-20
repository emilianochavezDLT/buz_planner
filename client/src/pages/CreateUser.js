const React = require('react'); // Import React
const axios = require('axios'); // Import axios

//ID's of the input and form elements
/**
 * form: createUserForm
 * input: firstName
 * input: lastName
 * input: email
 */

const CreateUser = () => {

    console.log("Rendering CreateUser Component"); // Debugging statement

    return (
        <div>
            <h1>Create User</h1>
            <form id="createUserForm">
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">First Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="firstName"></input>
                </div>
                <br></br>
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Last Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="lastName"></input>
                </div>
                <br></br>
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Email</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="email"></input>
                </div>
            </form>
        </div>
    );

}

export default CreateUser; // Export the CreateUser component