import styles from '@/styles/ProjectPageHeader.module.css';


export default function ProjectPageHeader() {
  return (
    <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.h1}>PROJECTS</h1>
        <h2 className={styles.h2}>CATALOG</h2>
      </div>
      <div className={styles.breadcrumb}>
        <span className={styles.home}>Homepage</span>
        <span className={styles.arrow}>{'>'}</span>
        <span className={styles.current}>Projects</span>
      </div>
    </div>
  </header>

  );
}
