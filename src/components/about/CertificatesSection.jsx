import { useState } from 'react';
import styles from '@/styles/CertificatesSection.module.css';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';
import certificate from '@/images/certificate.png';

export default function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 2,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 3,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 4,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 5,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 6,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    },
    {
      id: 7,
      title: 'amoCRM Certificate 2025',
      hasArrow: true,
      isActive: false
    }
  ];

  const handleCertificateClick = (certificate) => {
    if (activeCertificate && activeCertificate.id === certificate.id) {
      // Если кликнули на уже активную карточку, скрываем изображение
      setActiveCertificate(null);
    } else {
      // Иначе показываем изображение для выбранной карточки
      setActiveCertificate(certificate);
    }
  };

  return (
    <div className={styles.certificatesSection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.numberBadge}>03</div>
          <h2 className={styles.title}>
            <span className={styles.titleBlack}>Certified for your </span>
            <span className={styles.titleWhite}>trust</span>
          </h2>
          <p className={styles.subtitle}>By meeting global standards, we ensure our partners and clients can rely<br /> on us withconfidence.</p>
        </div>

        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={styles.certificateCard}
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className={styles.certificateContent}>
                <span className={styles.certificateTitle}>{certificate.title}</span>
                <div className={styles.arrowIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.certificateImage} ${activeCertificate ? styles.certificateImageVisible : ''}`}>
          {activeCertificate && (
            <Image 
              {...getOptimizedImageProps(certificate, "amoCRM Certificate 2025", 593, 458)}
              className={styles.image}
            />
          )}
        </div>
      </div>
    </div>
  );
}
