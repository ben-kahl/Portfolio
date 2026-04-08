'use client';
import styles from "./page.module.css";
import SubpageLayout from "../components/SubpageLayout";
import PageTitle from "../components/PageTitle";
import Link from "next/link";

const projects = [
  { title: "PROJECT 1", description: "Description of project one", link: "#" },
  { title: "PROJECT 2", description: "Description of project two", link: "#" },
  { title: "PROJECT 3", description: "Description of project three", link: "#" },
];

export default function Projects() {
  return (
    <SubpageLayout>
      <PageTitle text="PROJECTS" />
      <div className={styles.projectsContent}>
        {projects.map((project, index) => (
          <Link href={project.link} key={project.title} className={styles.projectPanel} style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </SubpageLayout>
  );
}
