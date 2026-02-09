"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const StatItem = ({ label, value, suffix }) => {
    return (
        <motion.div
            className={styles.statItem}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h3 className={styles.value}>{value}{suffix}</h3>
            <p className={styles.label}>{label}</p>
        </motion.div>
    );
};

const Stats = ({ stats }) => {
    return (
        <div className={styles.statsContainer}>
            {stats.map((stat) => (
                <StatItem key={stat.id} {...stat} />
            ))}
        </div>
    );
};

export default Stats;
