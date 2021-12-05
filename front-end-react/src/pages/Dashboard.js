import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/Common';

const Dashboard = () => {

    //pega usuário logado
    const user = getUser();

    //redireciona para o login
    let navigate = useNavigate();
    const handleLogout = () => {
        removeUserSession();
        navigate('/login');
    }

    return(
        <div>
            Bem vindo <b>{user.name}</b>!<br /><br />
            <input type="button" 
                value="Logout"
                onClick={handleLogout}
            />
        </div>
    )
}  

export default Dashboard;