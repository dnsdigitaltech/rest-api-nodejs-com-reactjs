import './header.css';
import { Link } from 'react-router-dom';
export default function Header (){
    return (
        <header>
            <Link className="logo" to="/"> Home </Link>
            <Link className="logo" to="/login"> Login </Link>
            <Link className="logo" to="/dashboard"> Dashboard </Link>
        </header>
    )
}