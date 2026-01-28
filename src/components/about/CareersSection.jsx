import Image from 'next/image';
import styles from '@/styles/CareersSection.module.css';
//  import Photo1 from '@/images/telo.png';
//  import Photo2 from '@/images/e2556c79-9abc-4876-b93c-2dba3289d7ff.png';
//  import Photo3 from '@/images/telo.png';

export default function CareersSection() {
  const positions = [
    { id: 1, number: '01', title: 'Web Designer' },
    { id: 2, number: '02', title: 'Senior Backend Developer' },
    { id: 3, number: '03', title: 'Customer manager' },
    { id: 4, number: '04', title: 'Senior Seo specialist' }
  ];


  return (
    <div className={styles.careersSection}>
      <div className={styles.container}>
        {/* ======= HEADER ======= */}
        <div className={styles.headerBlock}>
          <div className={styles.numberBadge}>04</div>
          <h2 className={styles.title}>Become part of 2Clients and make an impact</h2>
          <p className={styles.subtitle}>
            Join our team of experts and help us build products that delight clients and drive business success. Together, we achieve more.
          </p>
        </div>

        {/* ======= MORE BUTTON ======= */}
        <div className={styles.moreButton}>
          <button className={styles.button}>
            <span className={styles.buttonText}>MORE</span>
            <div className={styles.arrowIcon}>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <circle cx="22.1797" cy="22.1797" r="22.1797" fill="white"/>
                <path d="M14.166 23.2214V21.138H26.666L20.9369 15.4089L22.416 13.9297L30.666 22.1797L22.416 30.4297L20.9369 28.9505L26.666 23.2214H14.166Z" fill="#01203F"/>
              </svg>
            </div>
          </button>
        </div>

        {/* ======= POSITIONS ======= */}
        <div className={styles.positionsGrid}>
          {positions.map((position) => (
            <div key={position.id} className={styles.positionCard}>
              <div className={styles.positionContent}>
                <div className={styles.positionNumber}>{position.number}</div>
                <div className={styles.positionTitle}>{position.title}</div>
              </div>
              <div className={`${styles.ellipse} ${styles[`ellipse${position.id}`]}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
