import Head from 'next/head';
import Link from 'next/link';
import ThemeSwitcher from '../components/themeSwitcher';
import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pjotr Anohhin</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <ThemeSwitcher />
                <h1 className={styles.title}>Pjotr Anohhin</h1>
                <Link href="/projects">
                    <a className={styles.link}>Watch my projects</a>
                </Link>
            </main>
        </div>
    );
}
