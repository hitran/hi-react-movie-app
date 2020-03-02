import React from 'react';

export default function Login(props) {
    const onLogin = async () => {
        props.login();
    }
    
    const onLogout = async() => {
        props.logout();
    }

    return (
        <div>
            <div>This is login page</div>
            {props.data ? <button onClick={onLogout}>Logout</button> : <button onClick={onLogin}>Login</button>}
        </div>
    )
}