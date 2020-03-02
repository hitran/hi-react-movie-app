import React, {useState} from 'react';
import { useEffect } from 'react';

export default function Login(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onLogin = async () => {
        props.login();
    }
    
    const onLogout = async() => {
        props.logout();
    }

    useEffect(() => {
        props.data ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [props.data])
    
    return (
        <div>
            <div>This is login page</div>
            {isLoggedIn ? <button onClick={onLogout}>Logout</button> : <button onClick={onLogin}>Login</button>}
        </div>
    )
}