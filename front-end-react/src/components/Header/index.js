import './header.css';
import { NavLink } from 'react-router-dom';
export default function Header (){
    return (
        <header>
            <NavLink exact  className="logo" to="/"> Home </NavLink>
            <NavLink className="logo" to="/login"> Login </NavLink>
            <NavLink className="logo" to="/dashboard"> Dashboard </NavLink>
        </header>
    )
}