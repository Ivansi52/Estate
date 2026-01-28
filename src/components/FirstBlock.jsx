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
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const logos = [
    { src: LexusIcon, alt: "Lexus", name: "Lexus" },
    { src: pionerIcon, alt: "Pioner", name: "Pioner" },
    { src: slavDvorIcon, alt: "Slav Dvor", name: "Slav Dvor" },
    { src: RPIcon, alt: "River Park", name: "River Park" },
  ];

  // Дублируем массив несколько раз для бесконечной анимации
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        {/* Левая часть с текстом */}
        <div className={styles.leftSection}>
          <h1 className={styles.buildingText}><span className={styles.buildingWord}>Building</span></h1>
          <h1 className={styles.yourDigitalText}>Your Digital</h1>
          {/* Кнопка под Your Digital */}
          <button className={styles.quoteButton}>
            GET A QUOTE
            <span className={styles.arrowCircle}>
              <svg width="26.29" height="26.29" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.38246 14.238V12.0476L17.5253 12.0476L11.5015 6.02374L13.0567 4.46851L21.731 13.1428L13.0567 21.8171L11.5015 20.2618L17.5253 14.238L4.38246 14.238Z" fill="white"/>
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
            <div 
              key={index} 
              className={styles.logoItem}
              onMouseEnter={() => setHoveredLogo(logo.name)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <Image 
                {...getOptimizedImageProps(logo.src, logo.alt, 150, 60)}
                className={styles.logoImage}
              />
              {hoveredLogo === logo.name && (
                <div className={styles.logoTooltip}>
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.logosGradientRight}></div>
      </div>
    </div>
  );
}