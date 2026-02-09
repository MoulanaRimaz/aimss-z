import Section from '@/components/Section';
import { committee } from '@/data/mockData';
import styles from './page.module.css';

export default function About() {
    return (
        <main>
            <Section className={styles.headerSection}>
                <div className={styles.aboutLogos}>
                    <img src="/images/zahira.jpg" alt="School logo" />
                    <img src="/images/aims.jpg" alt="AIMSS logo" />
                </div>
                <h1>About AIMSS@Z</h1>
                <p>Serving Zahira National School with Heart & Courage</p>
            </Section>

            <Section>
                <div className={styles.contentBlock}>
                    <h2>Our History</h2>
                    <p>
                        AIMSS@Z was formed by a group of dedicated alumni who were educated at Zahira National School
                        and had the heart and courage to serve their alma mater. Recognizing the need for focused
                        development in the Science stream, we established this union to provide resources, guidance,
                        and support to the next generation of scientists and medical professionals.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Our Mission</h3>
                        <p>
                            Transforming our school into a center for learning Advanced Level Physical Sciences and
                            Biological sciences streams for Tamil medium students in Hambantota district.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Our Vision</h3>
                        <p>
                            Development of the knowledge, skills and attitudes of the Tamil medium students who are
                            studying in the A/L section and providing guidance to plan their future and creating a
                            better society through educating them.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="alt">
                <h2 className={styles.sectionTitle}>Executive Committee</h2>
                <div className={styles.committeeGrid}>
                    {committee.map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div
                                className={styles.memberImage}
                                style={{ backgroundImage: `url(${member.image})` }}
                            />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
