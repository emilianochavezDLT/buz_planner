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
        <div className="container-fluid d-flex">
            <div className="row flex-nowrap w-100">
                <div className="col d-flex flex-column justify-content-center align-items-start">
                    <h1 class="mb-4">Create User</h1>
                    <form id="createUserForm">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <button className="btn btn-primary" onClick={handleGoBack}>Go Back</button>
                        <button type="submit" className="btn btn-primary ms-2" onClick={handle_submit}>Create User</button>
                    </form>
                </div>
            </div>
        </div>
        
    );

}



export default CreateUser; // Export the CreateUser component