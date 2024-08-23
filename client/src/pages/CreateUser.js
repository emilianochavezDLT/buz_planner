import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
const React = require('react'); // Import React


//ID's of the input and form elements
/**
 * form: createUserForm
 * input: firstName
 * input: lastName
 * input: email
 */

const CreateUser = () => {
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate("/");
    }

    const handle_submit = async (event) => {
        event.preventDefault();

        try{
            console.log("Creating user...");
            await axios.post('http://localhost:5001/users/createUser', {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value
            });
            console.log("User created successfully");
            navigate("/");
        }
        catch(error){
            console.error("Error creating user: ", error);
            alert("Error creating user");
        }

    };

    return (
       
        <div>
            <h1>Hello</h1>
        </div>

    );

};



export default CreateUser; // Export the CreateUser component