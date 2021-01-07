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
                <div className={styles.me}>
                    <h1 className={styles.title}>Pjotr Anohhin</h1>
                    <div className={styles.divider} />
                    <p className={styles.description}>frontend developer</p>
                </div>
                <div className={styles.cta}>
                    <Link href="/projects">
                        <a className={styles.link}>watch <br />projects</a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
