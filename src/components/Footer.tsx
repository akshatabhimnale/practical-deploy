import { Link } from 'react-router-dom'; // Make sure to import Link
import FooterStyle from "../styles/Footer.module.css";
import FooterLogo from "../assets/footer-logo.png";
import Insta from "../assets/insta.png"
import Fb from "../assets/fb.png"
import LinkedIn from "../assets/linkedin.png"

const Footer = () => {
    const footerNavigation = {
        "links": [
            {
                "name": "FAQ",
                "url": "/faq"
            },
            {
                "name": "Privacy",
                "url": "/privacy"
            },
            {
                "name": "Support",
                "url": "/support"
            },
            {
                "name": "Contact",
                "url": "/contact"
            }
        ]
    };
    const socialNavigation = {
        "social": [
            {
                "name": "Instagram",
                "img": Insta,
            },
            {
                "name": "Facebook",
                "img": Fb,
            },
            {
                "name": "LinkedIn",
                "img": LinkedIn,
            },

        ]
    };
    return (
        <div className={FooterStyle.footercontainer}>
            <div className={FooterStyle.container}>
                <div className={FooterStyle.footerNavigation}>
                    <div className={FooterStyle.leftfooter}><img src={FooterLogo} className={FooterStyle.footerfish} alt="Footer Logo" />
                        <ul className={FooterStyle.footerlist}>
                            {footerNavigation.links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.url}>{link.name}</Link>
                                </li>
                            ))}
                        </ul></div>
                    <div className={FooterStyle.rightfooter}>
                        <ul className={FooterStyle.Sociallist}>
                            {socialNavigation.social.map((link, index) => (
                                <li key={index}>
                                    <img src={link.img} alt={link.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <p>© 2024 Central Texas Fly Fishing All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
