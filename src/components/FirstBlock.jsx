import styles from '@/styles/FirstBlock.module.css';
import Image from 'next/image';
import WaterIcon from '@/images/water.png';
import LexusIcon from '@/images/lexusIcon.png';
import pionerIcon from '@/images/pioner.png';
import slavDvorIcon from '@/images/slav_dvor.png';
import RPIcon from '@/images/RiverPark.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';
import { memo } from 'react';

const LOGOS = [
  { src: LexusIcon, alt: 'Lexus', name: 'Lexus' },
  { src: pionerIcon, alt: 'Pioner', name: 'Pioner' },
  { src: slavDvorIcon, alt: 'Slav Dvor', name: 'Slav Dvor' },
  { src: RPIcon, alt: 'River Park', name: 'River Park' },
];
/* 4 копии для длинной бесконечной ленты; цикл на -25% = одна копия */
const DUPLICATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

const LogosCarousel = memo(function LogosCarousel() {
  return (
    <div className={styles.logosContainer}>
      <div className={styles.logosCarousel}>
        {DUPLICATED_LOGOS.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className={styles.logoItem} title={logo.name}>
            <img
              src={logo.src?.src ?? logo.src}
              alt={logo.alt}
              width={150}
              height={60}
              className={styles.logoImage}
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default function FirstBlock() {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <p className={styles.tagline}>BOUTIQUE DIGITAL MARKETING AGENCY</p>
          <h1 className={styles.buildingText}><span className={styles.buildingWord}>For B2B</span></h1>
          <h1 className={styles.yourDigitalText}>Leaders</h1>
          <button className={styles.quoteButton}>
            BOOK A STRATEGY CALL
            <span className={styles.arrowCircle}>
              <svg width="26.29" height="26.29" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.38246 14.238V12.0476L17.5253 12.0476L11.5015 6.02374L13.0567 4.46851L21.731 13.1428L13.0567 21.8171L11.5015 20.2618L17.5253 14.238L4.38246 14.238Z" fill="white"/>
              </svg>
            </span>
          </button>
        </div>
        <div className={styles.centerImage}>
          <Image
            {...getOptimizedImageProps(WaterIcon, "Water", 550, 550, true)}
            className={styles.waterImage}
          />
        </div>
        <div className={styles.rightSection}>
          <p className={styles.description}>
            We build websites that increase<br />
            sales, strengthen trust, and scale<br />
            with your marketing
          </p>
          <h1 className={styles.successText}>That Value</h1>
          <h1 className={styles.togetherText}>Results</h1>
        </div>
      </div>
      <LogosCarousel />
    </div>
  );
}