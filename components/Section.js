import styles from './Section.module.css';

const Section = ({ children, className = '', background = 'light' }) => {
    return (
        <section className={`${styles.section} ${styles[background]} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
