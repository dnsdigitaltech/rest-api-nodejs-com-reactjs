import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Erro from './pages/Erro';

import Header from './components/Header';
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import { PublicRoutes } from './utils/PublicRoutes';

const RoutesAll = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<Login/>} />
                </Route>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAll;