import styles from './PageTitle.module.css';

interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h1>{text}</h1>
    </div>
  );
}
