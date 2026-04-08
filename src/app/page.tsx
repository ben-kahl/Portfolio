'use client';
import styles from "./page.module.css";
import Selector from "./components/Selector";
import HomeText from "./components/HomeText";
import HamburgerNav from "./components/HamburgerNav";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<string>('projects');

  return (
    <div className={styles.page}>
      <HamburgerNav color="#171717" />
      <div className={styles.name}>
        <h1>BEN KAHL</h1>
      </div>
      <div className={styles.projectList}>
        <div className={styles.moonContainer}>
          <div className={styles.backgroundCircle}></div>
          <div className={styles.foregroundCircle}>
            <div className={styles.links}>
              <ul>
                <li
                  className={`${styles.projects} ${hoveredLink === 'projects' && styles.activeLink}`}
                  onMouseEnter={() => setHoveredLink('projects')}
                >
                  {hoveredLink === 'projects' && <Selector />}
                  <Link href="/projects">PROJECTS</Link>
                </li>
                <li
                  className={`${styles.about} ${hoveredLink === 'about' && styles.activeLink}`}
                  onMouseEnter={() => setHoveredLink('about')}
                >
                  {hoveredLink === 'about' && <Selector />}
                  <Link href='/about'>ABOUT</Link>
                </li>
                <li
                  className={`${styles.contact} ${hoveredLink === 'contact' && styles.activeLink}`}
                  onMouseEnter={() => setHoveredLink('contact')}
                >
                  {hoveredLink === 'contact' && <Selector />}
                  <Link href='/contact'>CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <HomeText />
    </div>
  );
}
