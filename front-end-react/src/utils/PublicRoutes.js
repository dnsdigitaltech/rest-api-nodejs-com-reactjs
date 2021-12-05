import {Navigate, Outlet} from 'react-router-dom';
import { getToken } from './Common';

export const PublicRoutes = () => {
  //se o usuário estiver logado redireciona o login para o dashboard
  return  !getToken() ? <Outlet /> : <Navigate to={{ pathname:'/dashboard' }}/>;
}

