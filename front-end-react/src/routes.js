import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Erro from './pages/Erro';

import Header from './components/Header';

const RoutesAll = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/dashboard" element={<Dashboard/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAll;