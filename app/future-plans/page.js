import Section from '@/components/Section';
import { futurePlans } from '@/data/mockData';
import styles from './page.module.css';

export default function FuturePlans() {
    return (
        <main>
            <Section className={styles.headerSection}>
                <h1>Future Plans</h1>
                <p>Our Vision for Tomorrow</p>
            </Section>

            <Section>
                <div className={styles.timeline}>
                    {futurePlans.map((plan, index) => (
                        <div key={plan.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.content}>
                                <span className={styles.year}>{plan.year}</span>
                                <h3>{plan.title}</h3>
                                <p>{plan.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
