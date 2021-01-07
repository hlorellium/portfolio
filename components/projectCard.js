import Link from 'next/link';
import React from 'react';
import styles from '../styles/projectCard.module.css';

const ProjectCard = ({ imgSrc, name, href }) => {
    return (
        <div className={styles.block}>
            <Link href={`/projects/${href || '#'}`}>
                <a>
                    <img
                        className={styles.img}
                        alt="project preview image"
                        src={imgSrc}
                    />
                    <h3 className={styles.name}>{name}</h3>
                </a>
            </Link>
        </div>
    );
};

export default ProjectCard;
