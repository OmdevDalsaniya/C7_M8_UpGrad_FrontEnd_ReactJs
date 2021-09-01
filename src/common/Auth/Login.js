import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Auth.css';

const Login = ({setOpen, setLoggedIn}) => {

    const [ logInPayoad, setLoginPayload ] = useState(
        {
            username: "",
            loginPassword: "",
        }
    );

    const login = async () => {
        try{
            const authHeader = btoa(`Basic ${username}:${loginPassword}`);
            const rawResponse = await fetch(`http://localhost:8085/api/v1/auth/login`,{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "authorization": `${authHeader}`
                }});
            if (rawResponse.ok){
                const result = await rawResponse.json();
                setLoggedIn(true);
            }
        }catch (e) {
            console.log(e.message||'Something broke');
        }

        setOpen(false);
    }

    const {username, loginPassword} = logInPayoad;

    const inputChangeHandler = (e) => {
        const temp = logInPayoad;
        temp[e.target.name] = e.target.value;
        setLoginPayload({...temp});
    }

    const loginClickHandler=(e)=>{
        login();
    };   

    return(
        <React.Fragment>
            <FormControl className="formControl" onSubmit={loginClickHandler}>
            <TextField 
                id="standard-basic"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="username"
                autoComplete="userName"
                autoFocus 
                value={username}
                onChange={inputChangeHandler}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="loginPassword"
                label="Password"
                type="password"
                id="password"
                value={loginPassword}
                onChange={inputChangeHandler}
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