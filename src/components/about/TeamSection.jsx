import Image from 'next/image';
import styles from '@/styles/TeamSection.module.css';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ethan Reed',
      position: 'Corporate Account Manager',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 2,
      name: 'Ethan Reed',
      position: 'Senior Software Engineer',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 3,
      name: 'Ethan Reed',
      position: 'Head of Sales',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 4,
      name: 'Ethan Reed',
      position: 'Corporate Account Manager',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 5,
      name: 'Ethan Reed',
      position: 'Art Director',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 6,
      name: 'Ethan Reed',
      position: 'Corporate Account Manager',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 7,
      name: 'Ethan Reed',
      position: 'CEO',
      image: '/images/worker.png',
      experience: 'Experience'
    },
    {
      id: 8,
      name: 'Ethan Reed',
      position: 'Senior Software Engineer',
      image: '/images/worker.png',
      experience: 'Experience'
    }
  ];

  return (
    <div className={styles.teamSection}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.numberBadge}>02</div>
          <h2 className={styles.title}>
            People behind our<br />
            <span className={styles.successBadge}>success</span>
          </h2>
          <p className={styles.subtitle}>
            Together, we bring diverse perspectives and a shared commitment to driving innovation and excellence.
          </p>
        </div>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.experienceButtons}>
                <button className={styles.experienceBtn}>Experience</button>
                <button className={styles.experienceBtn}>Experience</button>
              </div>
              <Image
                {...getOptimizedImageProps(member.image, member.name, 400, 260)}
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamPosition}>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
