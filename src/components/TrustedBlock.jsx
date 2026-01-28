'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/TrustedBlock.module.css';
import bgImage from '@/images/fon_zigzag.png';
import cards from '@/data/cards'; // массив карточек
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function YourComponent({ number }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Автопрокрутка каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.number}>{number}</div> {/* Здесь номер из пропса */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Trusted by<br />
            our <span className={styles.highlight}>clients</span>
          </h2>
          <p className={styles.description}>
            Hear directly from our clients—real stories showcasing the impact of our work and the value we bring to every project.
          </p>
        </div>
      </div>

      <div
        className={styles.blockBackground}
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className={styles.slider}>
          <div
            key={activeCard.id}
            className={styles.cardContent}
          >
            <Image 
              src={activeCard.photo} 
              alt="Home" 
              className={styles.homePhoto}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />

            <div className={styles.rightContent}>
              <Image 
                src={activeCard.logo} 
                alt="Logo" 
                className={styles.reviewsLogo}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />

              <h2 className={styles.clientName}>{activeCard.name}</h2>

              <p className={styles.clientDescription}>{activeCard.description}</p>

              <div className={styles.resultTag}>{activeCard.tag}</div>

              <div className={styles.caseLink}>{activeCard.caseLink}</div>

              <div className={styles.categories}>
                {activeCard.categories.map((cat, index) => (
                  <div key={index} className={styles.category}>{cat}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={prevCard}>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46 20V26H11L27 42L23 46L0 23L23 0L27 4L11 20H46Z" fill="white"/>
            </svg>
          </button>
          <button className={styles.controlButton} onClick={nextCard}>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
              <path d="M46 20V26H11L27 42L23 46L0 23L23 0L27 4L11 20H46Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
