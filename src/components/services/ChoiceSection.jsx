import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/ChoiceSection.module.css';
import ussrsGroup2 from '@/images/Users_Group2.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import LexusIcon from '@/images/lexusIcon.png';
import pionerIcon from '@/images/pioner.png';
import slavDvorIcon from '@/images/slav_dvor.png';
import RPIcon from '@/images/RiverPark.png';
import company1Icon from '@/images/company1.svg';
import company2Icon from '@/images/company2.svg';
import company4Icon from '@/images/company4.svg';
import company5Icon from '@/images/company5.svg';

const cardsData = [
  {
    id: 1,
    category: 'Experience',
    title: 'Experience in countries',
    description: "We take into account legal, cultural, and marketing\n specifics of each market.",
    gradientText: '15+',
  },
  {
    id: 2,
    category: 'Support',
    title: 'Support',
    description: "We're always here to answer questions\nand solve issues quickly.",
    gradientText: '24/7',
  },
  {
    id: 3,
    category: 'Faster Launch',
    title: 'Faster Launch',
    description: "Optimized processes help us bring your\nsite to life sooner.",
    gradientText: '30%',
  },
  {
    id: 4,
    category: 'Custom design',
    title: 'Custom design',
    description: "Every website is crafted to match your brand's\nunique style and goals.",
    gradientText: '100%',
  },
  {
    id: 5,
    category: 'Years of experience',
    title: 'Years of experience',
    description: "A proven track record of delivering successful\nprojects.",
    gradientText: '10+',
  },
  {
    id: 6,
    category: 'Happy clients',
    title: 'Happy clients',
    description: "Businesses worldwide trust us to grow\ntheir online presence.",
    gradientText: '500+',
  },
];

const ChoiceSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3; // маркеры и слайды для окна справа

  const logos = [
    { src: LexusIcon, alt: "Lexus", name: "Lexus" },
    { src: pionerIcon, alt: "Pioner", name: "Pioner" },
    { src: slavDvorIcon, alt: "Slav Dvor", name: "Slav Dvor" },
    { src: RPIcon, alt: "River Park", name: "River Park" },
    { src: company1Icon, alt: "Company 1", name: "Company 1" },
    { src: company2Icon, alt: "Company 2", name: "Company 2" },
    { src: company4Icon, alt: "Company 4", name: "Company 4" },
    { src: company5Icon, alt: "Company 5", name: "Company 5" },
  ];

  // Функция для создания массива без повторений подряд
  const createDuplicatedLogos = (sourceArray, times) => {
    if (sourceArray.length === 0) return [];
    if (sourceArray.length === 1) {
      // Если только один элемент, просто повторяем его
      return Array(times).fill(sourceArray[0]);
    }
    
    let result = [...sourceArray];
    
    for (let i = 1; i < times; i++) {
      const lastItem = result[result.length - 1];
      let nextArray = [...sourceArray];
      
      // Всегда проверяем и перемещаем, если последний элемент совпадает с первым
      while (nextArray.length > 0 && (lastItem.src === nextArray[0].src || lastItem.name === nextArray[0].name)) {
        // Циклически сдвигаем массив на один элемент
        nextArray = [...nextArray.slice(1), nextArray[0]];
        
        // Защита от бесконечного цикла (если все элементы одинаковые)
        if (nextArray.every(item => item.src === lastItem.src)) {
          break;
        }
      }
      
      result = [...result, ...nextArray];
    }
    
    return result;
  };

  const duplicatedLogos = createDuplicatedLogos(logos, 4);

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
            >
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
};

export default ChoiceSection;
