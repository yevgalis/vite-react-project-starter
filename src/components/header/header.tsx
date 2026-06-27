import reactLogo from '@/assets/icons/react.svg';
import viteLogo from '@/assets/icons/vite.svg';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <a className={styles.link} href="https://vite.dev" target="_blank" rel="noreferrer">
        <img className={styles.logo} src={viteLogo} alt="Vite logo" />
      </a>
      <a className={styles.link} href="https://react.dev" target="_blank" rel="noreferrer">
        <img className={`${styles.logo} ${styles.logo}`} src={reactLogo} alt="React logo" />
      </a>
    </header>
  );
};
