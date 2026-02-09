import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Stats from '@/components/Stats';
import { sliderData, activities, stats } from '@/data/mockData';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero data={sliderData} />

      <Section className={styles.missionSection}>
        <div className={styles.introContent}>
          <h2>Welcome to AIMSS@Z</h2>
          <p className="lead">
            The Association for Improvement of Mathematics and Science Streams at Zahira National School Hambantota.
          </p>
          <p>
            Formed by a dedicated group of alumni, we strive to transform our school into a center of excellence
            for Advanced Level Physical and Biological Science streams.
          </p>
        </div>

        <div className={styles.missionVisionGrid}>
          <div className={styles.mvBox}>
            <h3>Our Mission</h3>
            <p>
              Transforming our school into a center for learning Advanced Level Physical Sciences and
              Biological sciences streams for Tamil medium students in Hambantota district.
            </p>
          </div>
          <div className={styles.mvBox}>
            <h3>Our Vision</h3>
            <p>
              Development of the knowledge, skills and attitudes of the Tamil medium students who are
              studying in the A/L section and providing guidance to plan their future and creating a
              better society through educating them.
            </p>
          </div>
        </div>
      </Section>

      <Section background="dark" className={styles.statsSection}>
        <div className="container">
          <h2 className={styles.sectionTitleWhite}>Our Impact</h2>
          <Stats stats={stats} />
        </div>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>What We Do</h2>
        <div className={styles.grid}>
          {activities.slice(0, 3).map((activity) => (
            <Card
              key={activity.id}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
        <div className={styles.centerBtn}>
          <Link href="/activities" className="btn btn-primary">
            View All Activities
          </Link>
        </div>
      </Section>

      <Section background="alt">
        <h2 className={styles.sectionTitle}>Join Our Mission</h2>
        <div className={styles.ctaContainer}>
          <p>Help us build a brighter future for the next generation of scientists and doctors.</p>
          <Link href="/contact" className="btn btn-secondary">
            Get Involved
          </Link>
        </div>
      </Section>
    </main>
  );
}
