import '../styles/navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="nav-links">
                    <div className="nav-brand-name">
                        <NavLink to="/" className="nav-link">
                            <span className='nav-brand-name-title'>Hotels</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <NavLink to="/saved" className="nav-link">
                    <span className="nav-link-title">Saved rooms</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;