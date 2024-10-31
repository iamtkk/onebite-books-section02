import Link from 'next/link';
import styles from './global-layout.module.css';
const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href='/'>📚 ONBITE BOOKS</Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>제작 @iamtk</footer>
    </div>
  );
};
export default GlobalLayout;
