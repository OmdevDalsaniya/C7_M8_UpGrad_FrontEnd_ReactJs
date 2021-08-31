import React from "react";
import { Tabs, Modal } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { useState } from "react";
import './LoginRegisterModal.css';
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const LoginRegisterModal = () => {

    const [value, setValue] = useState(1);
    {/*const showHideClassName = show ? "modal display-block" : "modal display-none";*/}
    const rootRef = React.useRef(null);
    const handleChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    };


    return(        
        <div className="divModal">
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className="modal paper"
                container={() => rootRef.current}
            >
            <div className="paper">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    className="tabs"
                >
                    <Tab label="Login" value={1} onClick={() => handleChange(1)}/>        
                    <Tab label="Register" value={2} onClick={() => handleChange(2)}/>
                </Tabs>
                {value===1 ? <div className="tabcontent">
                    <Login/>
                </div> : <div className="tabcontent">
                    <Register/>
                </div>}                
            </div>
            </Modal>
        </div>
    );
}

export default LoginRegisterModal;