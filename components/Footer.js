import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <div className={styles.footerLogoSection}>
                        <img src="/images/zahira.jpg" alt="School logo" className={styles.footerLogoImg} />
                        <img src="/images/aims.jpg" alt="AIMSS logo" className={styles.footerLogoImg} />
                        <h3 className={styles.footerLogo}>AIMSS@Z</h3>
                    </div>
                    <p className={styles.description}>
                        Transforming Zahira National School into a center for excellence in Science education.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/activities">Activities</Link></li>
                        <li><Link href="/future-plans">Future Plans</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <p>Zahira National School</p>
                    <p>Hambantota, Sri Lanka</p>
                    <p>Email: info@aimss-z.org</p>
                    <p>Phone: +94 11 234 5678</p>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} AIMSS@Z. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
