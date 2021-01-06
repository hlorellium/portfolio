import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/projects.module.css';

export default function Projects() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Projects</title>
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>Projects</h1>
                </main>
            </div>
        </Layout>
    );
}
