import React, { useState } from 'react';
import styles from '@/styles/FullCycleCare.module.css';
import Image from 'next/image';
import shar2 from '@/images/shar2.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

const FullCycleCare = () => {
  const [activeButton, setActiveButton] = useState('Request');
  
  const buttonTexts = {
    Request: {
      title: 'We build experiences',
      subtitle: 'that breathe',
      description: 'Because lasting experiences aren\'t made by chance — they\'re shaped with purpose.'
    },
    Support: {
      title: '24/7 Support',
      subtitle: 'always here',
      description: 'Our dedicated team ensures your project runs smoothly with round-the-clock assistance.'
    },
    Discuss: {
      title: 'Strategic Planning',
      subtitle: 'every step',
      description: 'We analyze your needs and create a roadmap that aligns with your business goals.'
    },
    Develop: {
      title: 'Custom Solutions',
      subtitle: 'built for you',
      description: 'From concept to deployment, we craft digital solutions tailored to your unique requirements.'
    }
  };

  const currentText = buttonTexts[activeButton];

  return (
    <div className={styles.container}>
      <div className={styles.imageBlock}>
        {/* Блок с номером, заголовком и описанием поверх изображения в левом верхнем углу */}
        <div className={styles.contentBlock}>
          <div className={styles.number}>02</div>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>
              Your project, our full-cycle{' '}
              <span className={styles.careHighlight}>care</span>
            </h2>
            <p className={styles.description}>
              We start simple — you submit a request, and we quickly get in touch.
            </p>
          </div>
        </div>

        {/* Интерактивный контент поверх изображения */}
        <div className={styles.overlayContent}>
          <h2 className={styles.overlayTitle}>
            <span className={styles.titleLineTop}>{currentText.title}</span><br />
            <span className={styles.titleLineBottom}>{currentText.subtitle}</span>
          </h2>
          <p className={styles.overlayDescription}>
            {currentText.description}
          </p>

          {/* Интерактивные кнопки */}
          <div className={styles.buttonsContainer}>
            <button 
              className={`${styles.actionButton} ${styles.btnRequest} ${activeButton === 'Request' ? styles.active : ''}`}
              onClick={() => setActiveButton('Request')}
            >
              Request
            </button>
            <button 
              className={`${styles.actionButton} ${styles.btnSupport} ${activeButton === 'Support' ? styles.active : ''}`}
              onClick={() => setActiveButton('Support')}
            >
              Support
            </button>
            <button 
              className={`${styles.actionButton} ${styles.btnDiscuss} ${activeButton === 'Discuss' ? styles.active : ''}`}
              onClick={() => setActiveButton('Discuss')}
            >
              Discuss
            </button>
            <button 
              className={`${styles.actionButton} ${styles.btnDevelop} ${activeButton === 'Develop' ? styles.active : ''}`}
              onClick={() => setActiveButton('Develop')}
            >
              Develop
            </button>
          </div>
        </div>

        <Image {...getOptimizedImageProps(shar2, "Illustration", 0, 0)} className={styles.image} />
      </div>
    </div>
  );
};

export default FullCycleCare;
