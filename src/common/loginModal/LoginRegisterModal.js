import React from "react";
import { Tabs, Modal } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { useState } from "react";
import './LoginRegisterModal.css';
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const LoginRegisterModal = () => {

    const [value, setValue] = useState(1);
    const [panel, setActive] = useState(false);
    {/*const showHideClassName = show ? "modal display-block" : "modal display-none";*/}
    const rootRef = React.useRef(null);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setActive(!panel);
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
                    onChange={handleChange}
                    className="tabs"
                >
                    <Tab label="Login" value="1" />        
                    <Tab label="Register" value="2" />
                </Tabs>
                {panel ? <div>
                    <Register/>
                </div> : <div>
                    <Login/>
                </div>}                
                </div>
            </Modal>
        </div>
    );
}

export default LoginRegisterModal;