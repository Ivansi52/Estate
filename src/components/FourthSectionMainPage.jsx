import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/FourthSection.module.css';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import img1 from '@/images/neboscreb.png';
import img2 from '@/images/chasi.png';
import img3 from '@/images/car.png';
import img4 from '@/images/cars.png';

import jamesEditionLogo from '@/images/james_edition.png';

const cardsData = [
  {
    image: img1,
    categoriesLeft: ['Web design', 'SEO optimization'],
    categoriesRight: ['Product Design'],
    title: ['Corporate Site', 'for Real', 'Estate'],
  },
  {
    image: img2,
    categoriesLeft: ['Web design', 'SEO optimization'],
    categoriesRight: ['Traffic growth', 'Product Design'],
    title: ['E-commerce site', 'for Luxury', 'Marketplace'],
  },
  {
    image: img3,
    categoriesLeft: ['Web design', 'SEO optimization'],
    categoriesRight: ['Traffic growth', 'Product Design'],
    title: ['Multi-page site', 'for Auto', 'Retailers'],
  },
  {
    image: img4,
    categoriesLeft: ['Web design', 'SEO optimization'],
    categoriesRight: ['Traffic growth', 'Product Design'],
    title: ['Corporate site', 'for Premium ', 'Automotive'],
  },
];

// Контент для блока hoverInfo (можно сделать динамическим если надо)
const hoverInfoContent = {
  circles: [
    { bigNumber: '+300%', text: 'traffic' },
    { bigNumber: 'over 9', text: 'weeks' },
  ],
  title: 'Multi-page site for Auto Retailers',
  resultsLabel: 'Results:',
  resultsList: [
    'Organic traffic grew by 300% over 9 weeks',
    'Keyword visibility on Google increased by 160%',
    'Bounce rate decreased by 25%',
    'Average session duration improved by 2.8×',
    'Lead submissions from organic sources increased by 170%',
  ],
  linkText: 'See the case',
};

export default function FourthSection({ sectionNumber }) {
  // hoverIndex - индекс карточки, hoveredSide - "left" или "right"
  const [hoverState, setHoverState] = useState({ hoverIndex: null, hoveredSide: null });

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Верхняя часть */}
        <div className={styles.topRow}>
          <div className={styles.leftSide}>
            <div className={styles.number}>{sectionNumber}</div>
            <div className={styles.textBlock}>
              <h2 className={styles.heading}>
                <span>Designs that <span className={styles.highlight}>speak</span></span>
                <br />
                <span>for themselves</span>
              </h2>
              <p className={styles.description}>
                Explore our portfolio and see how we turn ideas into impactful digital solutions.
              </p>
            </div>
          </div>

          <button className={styles.moreButton}>
            MORE
            <span className={styles.arrowCircle}>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.1797" cy="22.1797" r="22.1797" fill="white"/>
                <path d="M13.6256 23.2199V21.1076H26.2998L20.4908 15.2986L21.9906 13.7988L30.3555 22.1637L21.9906 30.5286L20.4908 29.0289L26.2998 23.2199H13.6256Z" fill="#01203F"/>
              </svg>
            </span>
          </button>
        </div>

        {/* Сетка карточек */}
        <div className={styles.grid}>
          {cardsData.map(({ image, categoriesLeft, categoriesRight, title }, index) => {
            // Определяем с какой стороны карточка - 0 и 2 - слева, 1 и 3 - справа (пример)
            const isLeftSide = index % 2 === 0;

            // Определяем класс для анимации
            const hoverClass =
              hoverState.hoverIndex === index
                ? isLeftSide
                  ? styles.leftHover
                  : styles.rightHover
                : '';

            return (
              <div
                className={`${styles.card} ${hoverClass}`}
                key={index}
                onMouseEnter={() => setHoverState({ hoverIndex: index, hoveredSide: isLeftSide ? 'left' : 'right' })}
                onMouseLeave={() => setHoverState({ hoverIndex: null, hoveredSide: null })}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={image} 
                    alt={`Portfolio ${index + 1}`} 
                    fill 
                    className={styles.cardImage}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>

                {/* Категории левый верхний угол */}
                <div className={styles.categoriesLeft}>
                  {categoriesLeft.map((cat, i) => (
                    <div className={styles.category} key={i}>{cat}</div>
                  ))}
                </div>

                {/* Категории правый верхний угол */}
                <div className={styles.categoriesRight}>
                  {categoriesRight.map((cat, i) => (
                    <div className={styles.category} key={i}>{cat}</div>
                  ))}
                </div>

                {/* Заголовок по центру */}
                <div className={styles.title}>
                  {title.map((line, i) => (
                    <span key={i} className={styles.titleLine}>{line}</span>
                  ))}
                </div>

                {/* Лого в левом нижнем углу */}
                <div className={styles.logo}>
                  <Image {...getOptimizedImageProps(jamesEditionLogo, "Company Logo", 140, 14)} />
                </div>

                {/* Инфо при ховере */}
                <div
                  className={`${styles.hoverInfo} ${
                    isLeftSide ? styles.left : styles.right
                  }`}
                >
                  <div className={styles.infoCircles}>
                    {hoverInfoContent.circles.map(({ bigNumber, text }, i) => (
                      <div className={styles.infoCircle} key={i}>
                        <div className="bigNumber">{bigNumber}</div>
                        <div>{text}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.infoTitle}>{hoverInfoContent.title}</div>
                  <div className={styles.infoResultsLabel}>{hoverInfoContent.resultsLabel}</div>
                  <ul className={styles.infoResultsList}>
                    {hoverInfoContent.resultsList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.seeCaseLink}>
                    {hoverInfoContent.linkText}
                    <svg
                      className={styles.seeCaseArrow}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7L17 17"
                        stroke="#000000ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 17H17V7"
                        stroke="#000000ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}