import React from "react";
import { Tabs, Modal } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { useState } from "react";
import './LoginRegisterModal.css';


const LoginRegisterModal = () => {

    const [value, setValue] = useState(1);
    const [panel, setActive] = useState(true);
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
                    <Tab label="LogOut" value="2" />
                </Tabs>
                {panel ? <div>
                    <p>Tab One</p>
                </div> : <div>
                    <p>Tab Two</p>
                </div>}                
                </div>
            </Modal>
        </div>
    );
}

export default LoginRegisterModal;