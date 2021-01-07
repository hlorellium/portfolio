import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/projectCard.module.css';

const ProjectCard = ({ imgSrc, name, href }) => {
    return (
        <div className={styles.block}>
            <Link href={`/projects/${href || '#'}`}>
                <a>
                    <div className={styles.imageContainer}></div>
                    <Image
                        className={styles.img}
                        alt="project preview image"
                        src={imgSrc}
                        width={400}
                        height={200}
                        layout="intrinsic"
                    />
                    <h3 className={styles.name}>{name}</h3>
                </a>
            </Link>
        </div>
    );
};

export default ProjectCard;
