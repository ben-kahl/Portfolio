'use client';
import styles from "./page.module.css";
import SubpageLayout from "../components/SubpageLayout";
import PageTitle from "../components/PageTitle";

const contacts = [
  { icon: "/emailIcon.png", text: "ben.kahl2002@gmail.com", href: "mailto:ben.kahl2002@gmail.com" },
  { icon: "/github.png", text: "github.com/ben-kahl", href: "https://www.github.com/ben-kahl" },
  { icon: "/linkedin.png", text: "linkedin.com/in/ben-kahl", href: "https://www.linkedin.com/in/ben-kahl/" },
];

export default function Contact() {
  return (
    <SubpageLayout>
      <PageTitle text="CONTACT" />
      <div className={styles.contactContent}>
        <h1 className={styles.heading}>CONTACT</h1>
        <div className={styles.contactPanel}>
          {contacts.map((contact, index) => (
            <a
              key={contact.text}
              href={contact.href}
              className={styles.contactRow}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className={styles.contactIcon} style={{ backgroundImage: `url(${contact.icon})` }} />
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
