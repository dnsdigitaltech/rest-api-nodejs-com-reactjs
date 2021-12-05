import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../services/api";
import { setUserSession } from '../utils/Common';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    let navigate = useNavigate();
    const handleLogin = () => {

        setError(null);
        setLoading(true);

        api.post("users/signin", {
            username: username,
            password: password
        }).then(response => {
            setLoading(false);
            //persiste o token e usuário na sessão
            setUserSession(response.data.token, response.data.user);
            //redireciona para o dashboard
            navigate('/dashboard');
        }).catch(error => {
            setLoading(false);
            if(error.response.status === 401 || error.response.status === 400)
            {
                setError(error.response.data.message);
            }else{
                setError("Houve algum problema, por favor tente novamente");
            }
        });

       
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