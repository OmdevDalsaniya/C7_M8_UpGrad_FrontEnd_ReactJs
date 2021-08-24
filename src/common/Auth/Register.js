import React, {useState} from "react";
import { FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Auth.css';

const Register = () => {
    const [firstName, set_firstName] = useState("")
    const [lastName, set_lastName] = useState("")
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const [contactNo, set_contactNo]= useState("")

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
                onInput={e => {set_firstName(e.target.value)}}
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
                onInput={e => {set_lastName(e.target.value)}}
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
                onInput={e => {set_email(e.target.value)}}
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
                onInput={e => set_password(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contactNo"
                label="Contact No"
                id="contactNo"
                value={contactNo}
                onInput={e => set_contactNo(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
            >
                Register
            </Button>
            </FormControl>
        </React.Fragment>
    );
}

export default Register;