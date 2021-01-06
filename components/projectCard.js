import React from 'react';
import styles from '../styles/projectCard.module.css';

const ProjectCard = ({ imgSrc, name }) => {
    return (
        <div className={styles.block}>
            <img
                className={styles.img}
                alt="project preview image"
                src={imgSrc}
            />
            <h3 className={styles.name}>{name}</h3>
        </div>
    );
};

export default ProjectCard;
