import Head from 'next/head';
import Layout from '../../components/layout';
import ProjectCard from '../../components/projectCard';
import styles from '../../styles/projects.module.css';
import { getSortedProjectsData } from '../../utils/projects';

export default function Projects({ allProjectsData }) {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <div className={styles.divider} />
                <div className={styles.grid}>
                    {allProjectsData.map(({ id, title }) => (
                        <ProjectCard
                            key={id}
                            imgSrc={`/projects/${id}/capture.png`}
                            name={title}
                            href={id}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
};
