import React, {useState} from "react";
import { FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Auth.css';

const Register = ({setOpen}) => {

    const [ signupPayload, setSignUpPayload ] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobileNumber: "",
        }
    );

    const{ firstName, lastName, email, password, mobileNumber} = signupPayload;

    const inputChangeHandler = (e) => {
        const temp = signupPayload;
        temp[e.target.name] = e.target.value;
        setSignUpPayload({...temp});
    }

    const registerUser = () => {
        console.log(signupPayload);
        
        fetch("http://localhost:8085/api/v1/signup", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(signupPayload),
        }).then((response) => {
              console.log(response);
              response.json();
        }).then((data) => {
            console.log(data);
        });
    
        setOpen(false);
      };

    const handleSignUp = () => {
        registerUser();
    }    

    return(
        <React.Fragment>
            <FormControl required className="formControl">
            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fistName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus 
                value={firstName}
                onChange={inputChangeHandler}
            />
            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus 
                value={lastName}
                onChange={inputChangeHandler}
            />
            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus 
                value={email}
                onChange={inputChangeHandler}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={inputChangeHandler}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="mobileNumber"
                label="Contact No"
                id="contactNo"
                value={mobileNumber}
                onChange={inputChangeHandler}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleSignUp}
            >
                Register
            </Button>
            </FormControl>
        </React.Fragment>
    );
}

export default Register;