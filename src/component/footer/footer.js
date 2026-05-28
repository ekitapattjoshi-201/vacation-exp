import "./footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__brand">
                    <h2 className="footer__title">
                        Vacation EXP
                    </h2>

                    <p className="footer__text">
                        Explore beautiful destinations and
                        enjoy unforgettable travel experiences.
                    </p>
                </div>

                <div className="footer__links">
                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Packages</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer__contact">
                    <h3>Contact</h3>

                    <p>Email: support@vacationexp.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>

                <div className="footer__social">
                    <h3>Follow Us</h3>

                    <div className="footer__icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                © 2026 Vacation EXP. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;