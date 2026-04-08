'use client';
import styles from './SubpageLayout.module.css';
import HamburgerNav from './HamburgerNav';

interface SubpageLayoutProps {
  children: React.ReactNode;
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <div className={styles.pageContainer}>
      <HamburgerNav />
      <div className={styles.backgroundLayer}>
        <div className={styles.stripe1} />
        <div className={styles.stripe2} />
        <div className={styles.stripe3} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
