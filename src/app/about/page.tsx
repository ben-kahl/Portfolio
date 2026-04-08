'use client';
import styles from "./page.module.css";
import SubpageLayout from "../components/SubpageLayout";
import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <SubpageLayout>
      <PageTitle text="ABOUT" />
      <div className={styles.aboutContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.name}>Ben Kahl</h1>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.bioPanel}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Finibus
              malesuada nisi mauris curae senectus ornare ultricies morbi. Commodo
              augue pharetra consectetur augue porta commodo ornare nam. Facilisi
              suspendisse litora euismod vivamus ornare vehicula integer est magnis.
              Facilisi placerat fringilla habitant sagittis felis litora. Turpis
              malesuada ornare quis conubia amet.
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            <span>PLACEHOLDER IMAGE</span>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
