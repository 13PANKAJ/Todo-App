import React from 'react';
export function LoginComponent(){

    return (
        <div className="Login">
            <div>
            <label>User Name</label>
                <input type="text" placeholder="Username" />
             </div>
             <div>
                <label>Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <div>
            <button type="button">Login</button>
            </div>
        </div>
    )
}

export default LoginComponent;