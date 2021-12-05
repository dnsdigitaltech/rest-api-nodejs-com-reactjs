import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //redireciona para o dashboard
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    }

    return(
        <div>
            Login <br /><br />
            <div>
                usuário <br />
                <input type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                />
            </div>
            <div>
                senha <br />
                <input type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
            </div>
            {error && <div className='error'>{error}</div>}
            <input type="button" 
                value={loading ? "Carregando..." : "Login"} 
                disabled={loading}
                onClick={handleLogin}
                />
        </div>
    )
    
}  

export default Login;