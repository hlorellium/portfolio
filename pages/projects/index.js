import Head from 'next/head';
import Layout from '../../components/layout';
import ProjectCard from '../../components/projectCard';
import styles from '../../styles/projects.module.css';

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <div className={styles.divider}/>
                <div className={styles.grid}>
                    <ProjectCard
                        imgSrc="/projects/loan_calculator/capture.png"
                        name="Loan Calculator"
                        href="loan-calculator"
                    />
                </div>
            </main>
        </Layout>
    );
}
