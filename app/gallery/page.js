import Section from '@/components/Section';
import { events } from '@/data/mockData';
import styles from './page.module.css';

export default function Gallery() {
    return (
        <main>
            <Section className={styles.headerSection}>
                <h1>Gallery & Events</h1>
                <p>Celebrating Our Achievements and Moments</p>
            </Section>

            <Section>
                <div className={styles.galleryGrid}>
                    {events.map((event) => (
                        <div key={event.id} className={styles.eventCard}>
                            <div
                                className={styles.eventImage}
                                style={{ backgroundImage: `url(${event.image})` }}
                            />
                            <div className={styles.eventContent}>
                                <span className={styles.date}>{event.date}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
