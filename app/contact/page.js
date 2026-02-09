import Section from '@/components/Section';
import styles from './page.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <main>
            <Section className={styles.headerSection}>
                <h1>Contact Us</h1>
                <p>Get in Touch with AIMSS@Z</p>
            </Section>

            <Section>
                <div className={styles.container}>
                    <div className={styles.infoColumn}>
                        <h2>Contact Information</h2>
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <div>
                                <h3>Address</h3>
                                <p>Zahira National School, Hambantota, Sri Lanka</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.icon} />
                            <div>
                                <h3>Email</h3>
                                <p>info@aimss-z.org</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.icon} />
                            <div>
                                <h3>Phone</h3>
                                <p>+94 11 234 5678</p>
                            </div>
                        </div>

                        <div className={styles.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.718617865245!2d81.1166663147728!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6bf2f4e8f1b1b%3A0x1234567890abcdef!2sZahira%20National%20School!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <h2>Send us a Message</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </Section>
        </main>
    );
}
