import Header from './header';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>{children}</div>
        </div>
    );
}
