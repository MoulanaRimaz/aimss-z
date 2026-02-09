"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({ data }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [data.length]);

    return (
        <section className={styles.hero}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.slide}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data[current].image})` }}
                >
                    <div className={`container ${styles.content}`}>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {data[current].title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            {data[current].description}
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="btn btn-primary"
                            style={{ marginTop: '20px' }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className={styles.dots}>
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
