import axios from 'axios'; // Import axios
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const React = require('react'); // Import React



const handle_SignIn = async (event) => {
    event.preventDefault();

    try {
        console.log("Signing in...");
        await axios.post('http://localhost:5001/users/signIn', {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value
        });
        console.log("User signed in successfully");
        navigate("/");
    }
    catch (error) {
        console.error("Error signing in: ", error);
    }

};


const signIn = () => {

    return (
        
        <>
            <NavBar />
        </>
        
    
    
    
    );
};

export default signIn;
