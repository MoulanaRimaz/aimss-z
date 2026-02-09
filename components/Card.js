"use client";
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import styles from './Card.module.css';

const Card = ({ title, description, icon, image }) => {
    const IconComponent = icon ? Icons[icon] : null;

    return (
        <motion.div
            className={styles.card}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {image && <div className={styles.imageContainer} style={{ backgroundImage: `url(${image})` }} />}
            <div className={styles.content}>
                {IconComponent && <div className={styles.icon}><IconComponent /></div>}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </motion.div>
    );
};

export default Card;
