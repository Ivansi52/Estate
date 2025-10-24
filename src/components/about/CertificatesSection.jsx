import { useState, useEffect } from 'react';
import styles from '@/styles/CertificatesSection.module.css';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setActiveCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCertificate(null);
  };

  // Автопрокрутка каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className={styles.certificatesSection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.numberBadge}>03</div>
          <h2 className={styles.title}>
            <span className={styles.titleBlack}>Certified for your </span>
            <span className={styles.titleWhite}>trust</span>
          </h2>
          <p className={styles.subtitle}>
            By meeting global standards, we ensure our partners and clients can rely on us with confidence.
          </p>
        </div>

        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={`${styles.certificateCard} ${index === currentIndex ? styles.active : ''}`}
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

        <div className={styles.certificateImage}>
          {/* <img 
            src="/images/rewies_logo.png" 
            alt="2Clients amoSTART Certificate" 
            className={styles.image}
          /> */}
        </div>
      </div>

      {/* Модальное окно для отображения сертификата */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={styles.modalImageContainer}>
              <Image 
                {...getOptimizedImageProps("/images/certificate.png", "amoCRM Certificate 2025", 0, 0)}
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
