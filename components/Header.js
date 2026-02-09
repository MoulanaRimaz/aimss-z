"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Activities', href: '/activities' },
        { name: 'Future Plans', href: '/future-plans' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoSection}>
                    <img src="/images/zahira.jpg" alt="Zahira College Logo" className={styles.logoImage} />
                    <img src="/images/aims.jpg" alt="AIMSS@Z Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>AIMSS@Z</span>
                </Link>
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.mobileNav}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
