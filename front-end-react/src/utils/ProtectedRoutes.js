import {Navigate, Outlet} from 'react-router-dom';
import Login from '../pages/Login';
import { getToken } from './Common';

export const ProtectedRoutes = () => {
  //se o usuário não estiver logado retona para o login
  return  getToken() ? <Outlet /> : <Navigate to={{ pathname:'/login' }}/>;
}

