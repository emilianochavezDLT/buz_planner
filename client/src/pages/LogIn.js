import axios from 'axios'; // Import axios
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const React = require('react'); // Import React




const LogIn = () => {
    const navigate = useNavigate();
    
    const handle_logIn = async (event) => {
        event.preventDefault();
    
        try {
            console.log("logIng in...");
            await axios.post('http://localhost:5001/auth/logIn', {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value
            });
            console.log("User signed in successfully");
            navigate("/");
        }
        catch (error) {
            console.error("Error loging in: ", error);
        }
    
    };

    return (
        
        <>
            <NavBar />
        </>
        
    
    
    
    );
};

export default LogIn;
