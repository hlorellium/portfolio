import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import { useContext } from 'react';
import { ColorContext } from '../context/colorContext';

export default function Home() {
    const { currentPalette } = useContext(ColorContext);

    return (
        <div className={styles.container}>
            <Head>
                <title>Pjotr Anohhin</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <style global jsx>{`
                :root {
                    --link: ${currentPalette.link};
                    --bg: ${currentPalette.bg};
                    --projectCard: ${currentPalette.projectCard};
                    --projectFont: ${currentPalette.projectFont};
                    --font: ${currentPalette.font};
                    --invertedFont: ${currentPalette.invertedFont};
                    --lightShadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    --darkShadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    --transition: all 0.25s ease-in-out;
                    --radius: 0.25rem;
                }
            `}</style>
            <main className={styles.main}>
                <h1 className={styles.title}>Pjotr Anohhin</h1>
                <Link href="/projects">
                    <a className={styles.link}>Watch my projects</a>
                </Link>
            </main>
        </div>
    );
}
