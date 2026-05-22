// import "./navbar.css";

// const Navbar = () => {
//     return (
//         <nav>
//             <h2>Vacation EXP</h2>
//         </nav>
//     );
// };

// export default Navbar;


// import "./navbar.css";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar__container">

//                 <div className="navbar__logo">
//                     <h2 className="navbar__title">Vacation EXP</h2>
//                 </div>

//                 <div className="navbar__menu">
//                     <ul className="navbar__list">
//                         <li className="navbar__item">Home</li>
//                         <li className="navbar__item">Packages</li>
//                         <li className="navbar__item">About</li>
//                         <li className="navbar__item">Contact</li>
//                     </ul>
//                 </div>

//                 <div className="navbar__actions">
//                     <button className="navbar__button">
//                         Login
//                     </button>
//                 </div>

//             </div>
//         </nav>
//     );
// };

import { FaPlaneDeparture } from "react-icons/fa";

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
                    <button className="navbar__button navbar__button--secondary">
                        Sign Up
                    </button>

                    <button className="navbar__button">
                        Login
                    </button>
                </div>

            </div>
        </nav>
    );
};
export default Navbar;