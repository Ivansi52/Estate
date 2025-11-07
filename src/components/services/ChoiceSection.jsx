import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/ChoiceSection.module.css';
import ussrsGroup2 from '@/images/Users_Group2.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import LexusIcon from '@/images/lexusIcon.png';
import pionerIcon from '@/images/pioner.png';
import slavDvorIcon from '@/images/slav_dvor.png';
import RPIcon from '@/images/RiverPark.png';

const cardsData = [
  {
    id: 1,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
  {
    id: 2,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
  {
    id: 3,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
  {
    id: 4,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
  {
    id: 5,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
  {
    id: 6,
    category: 'Experience',
    title: 'Experience in countries',
    description: 'We take into account legal, cultural, and marketing specifics of each market.',
    gradientText: '15+',
  },
];

const ChoiceSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const totalSlides = 3; // маркеры и слайды для окна справа

  const logos = [
    { src: LexusIcon, alt: "Lexus", name: "Lexus" },
    { src: pionerIcon, alt: "Pioner", name: "Pioner" },
    { src: slavDvorIcon, alt: "Slav Dvor", name: "Slav Dvor" },
    { src: RPIcon, alt: "River Park", name: "River Park" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const goPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.choiceContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.number}>04</div>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            Why we’re the right <span className={styles.highlighted}>choice</span>
          </h2>
          <p className={styles.description}>
            We bring creativity and experience together to deliver results that exceed expectations.
          </p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardsGrid}>
          {cardsData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.gradientNumber}>{card.gradientText}</div>
              <div className={styles.category}>{card.category}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.rightWindow}>
          <div className={styles.userInfo}>
            <div className={styles.userPhotoWrapper}>
              <Image
                {...getOptimizedImageProps(ussrsGroup2, "Users Group", 40, 40)}
                className={styles.userPhoto}
              />
            </div>
            <h3 className={styles.userName}>DesignRush</h3>
          </div>

          <p className={styles.windowDescription}>
            First place in service completeness – from concept and design to promotion and reputation management.
          </p>

          <div className={styles.sliderControls}>
            <button onClick={goPrev} className={styles.arrowBtn} aria-label="Previous">
              &#8592;
            </button>

            <div className={styles.dots}>
              {[...Array(totalSlides)].map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === activeSlide ? styles.activeDot : ''}`}
                  onClick={() => setActiveSlide(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={goNext} className={styles.arrowBtn} aria-label="Next">
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Анимация логотипов компаний */}
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
};

export default ChoiceSection;
