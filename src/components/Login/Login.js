import React, { useState } from 'react';
import './login.css';
const Login = () => {
	const [ loginData, setLoginData ] = useState();
	return (
		<form className="loginForm">
			{/* onSubmit={onSubmit} */}
			<label>
				login:
        </label>
				<input
					type="text"
					name="userName"
					// onChange={onChange}
					// value={loginData.userName}
					placeholder="username"
				/>
			
			<input
				type="text"
				name="price"
				// onChange={onChange}
				// value={loginData.price}
				placeholder="password"
			/>
    
			<input id="submit" type="submit" value="Login" />
		</form>
	);
};
export default Login;
