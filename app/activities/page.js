import Section from '@/components/Section';
import Card from '@/components/Card';
import { activities } from '@/data/mockData';
import styles from './page.module.css';
import * as Icons from 'react-icons/fa';

export default function Activities() {
    return (
        <main>
            <Section className={styles.headerSection}>
                <h1>Our Activities</h1>
                <p>Academic & Supportive Initiatives for Student Success</p>
            </Section>

            <Section>
                <div className={styles.grid}>
                    {activities.map((activity) => (
                        <Card
                            key={activity.id}
                            title={activity.title}
                            description={activity.description}
                            icon={activity.icon} // Pass icon name as string
                        />
                    ))}
                </div>
            </Section>

            <Section background="alt">
                <h2 className={styles.sectionTitle}>Additional Services</h2>
                <ul className={styles.servicesList}>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Maintaining attendance records</li>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Conducting monthly teachers’ progress meetings</li>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Prepare and follow the academic calendar</li>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Storing students’ marks using digital system</li>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Organizing free seminar series</li>
                    <li><Icons.FaCheckCircle className={styles.icon} /> Collect individual student feedback regularly</li>
                </ul>
            </Section>
        </main>
    );
}
