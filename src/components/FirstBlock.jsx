import styles from '@/styles/FirstBlock.module.css';
import Image from 'next/image';
import WaterIcon from '@/images/water.png';
import LexusIcon from '@/images/lexusIcon.png';
import pionerIcon from '@/images/pioner.png';
import slavDvorIcon from '@/images/slav_dvor.png';
import RPIcon from '@/images/RiverPark.png';
import { useEffect, useState } from 'react';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function FirstBlock() {
  const logos = [
    { src: LexusIcon, alt: "Lexus" },
    { src: pionerIcon, alt: "Pioner" },
    { src: slavDvorIcon, alt: "Slav Dvor" },
    { src: RPIcon, alt: "River Park" },
  ];

  // Дублируем массив для бесшовной анимации
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        {/* Левая часть с текстом */}
        <div className={styles.leftSection}>
          <h1 className={styles.buildingText}>Building</h1>
          <h1 className={styles.yourDigitalText}>Your Digital</h1>
          {/* Кнопка под Your Digital */}
          <button className={styles.quoteButton}>
            GET A QUOTE
            <span className={styles.arrowCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Центральное изображение */}
        <div className={styles.centerImage}>
          <Image 
            {...getOptimizedImageProps(WaterIcon, "Water", 550, 550, true)}
            className={styles.waterImage}
          />
        </div>
        
        {/* Правая часть с текстом */}
        <div className={styles.rightSection}>
          <p className={styles.description}>
            Web design, development, marketing, and automation — all in one place.
          </p>
          <h1 className={styles.successText}>Success</h1>
          <h1 className={styles.togetherText}>Together</h1>
        </div>
      </div>

      {/* Карусель логотипов */}
      <div className={styles.logosContainer}>
        <div className={styles.logosGradientLeft}></div>
        <div className={styles.logosCarousel}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image 
                {...getOptimizedImageProps(logo.src, logo.alt, 150, 60)}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
        <div className={styles.logosGradientRight}></div>
      </div>
    </div>
  );
}