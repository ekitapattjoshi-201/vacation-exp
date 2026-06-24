import "./navbar.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">

                <div className="navbar__logo">
                    <FaPlaneDeparture className="navbar__icon" />
                    <h2 className="navbar__title">Vacation EXP</h2>
                </div>

                <div className="navbar__menu">
                    <ul className="navbar__list">
                        <li className="navbar__item">Home</li>
                        <li className="navbar__item">Packages</li>
                        <li className="navbar__item">About</li>
                        <li className="navbar__item">Contact</li>
                    </ul>
                </div>

                <div className="navbar__actions">
                    <Link to="/register">
                        <button className="navbar__button navbar__button--secondary">
                            Sign Up
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="navbar__button">
                            Login
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;