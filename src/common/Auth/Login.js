import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Auth.css';

const Login = () => {
    const [userName, set_userName] = useState("")
    const [password, set_password] = useState("")

    return(
        <React.Fragment>
            <FormControl className="formControl">
            <TextField 
                id="standard-basic"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                autoFocus 
                value={userName}
                onInput={e => {
                    set_userName(e.target.value)
                }}/>
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
            >
                Sign In
            </Button>
            </FormControl>
        </React.Fragment>
    );
}

export default Login;