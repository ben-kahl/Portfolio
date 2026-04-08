'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerNav.module.css';

interface HamburgerNavProps {
  color?: string;
}

export default function HamburgerNav({ color = '#e3e3e3' }: HamburgerNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.hamburgerButton} onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill={color}>
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
            ✕
          </button>
          <ul className={styles.navLinks}>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
