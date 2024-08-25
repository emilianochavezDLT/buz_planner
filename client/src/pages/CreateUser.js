import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import NavBar from "../components/NavBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
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

    const handle_submit = async (event) => {
        event.preventDefault();

        try {
            console.log("Creating user...");
            await axios.post('http://localhost:5001/users/createUser', {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value
            });
            console.log("User created successfully");
            navigate("/");
        }
        catch (error) {
            console.error("Error creating user: ", error);
            alert("Error creating user");
        }

    };

    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <NavBar />
            <Container>
                <Typography variant="h3">Create User</Typography>
                <form id="createUserForm">
                    <div>
                        <TextField
                            required
                            id="firstName"
                            label="First Name"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="lastName"
                            label="Last Name"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" sx={{ml:"10px"}} onClick={handle_submit}>Create User</Button>
                    </div>
                </form>
            </Container>

        </Box>

    );

};



export default CreateUser; // Export the CreateUser component