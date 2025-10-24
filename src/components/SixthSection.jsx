import React from 'react';
import Image from 'next/image';
import styles from '@/styles/SixthSection.module.css';

import circleImage from '@/images/Intersect.png';
import icon from '@/images/heart_beat.png';
import topLeft from '@/images/top_left.png';
import topRight from '@/images/top_right.png';
import bottomLeft from '@/images/buttom_left.png';
import bottomRight from '@/images/buttom_right.png';
import leftCenter from '@/images/left_center.png';
import rightCenter from '@/images/right_center.png';
import bottomLeftFromCenter from '@/images/buttom_left_from_center.png';
import bottomRightFromCenter from '@/images/buttom_right_from_center.png';
import topLeftFromCenter from '@/images/top_left_from_center.png';
import topRightFromCenter from '@/images/top_right_from_center.png';

const itemsLeft = [
  'E-commerce',
  'Healthcare',
  'Real Estate',
  'Finance',
  'Education',
];

const itemsRight = [
  'Automotive',
  'Fashion',
  'Tech Startups',
  'Hospitality',
  'Logistics',
];

export default function SixthSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.topRow}>
          <div className={styles.number}>06</div>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Powering growth in diverse <span className={styles.highlight}>fields</span>
            </h2>
            <p className={styles.description}>
              Driving success across industries, we deliver tailored solutions that fuel growth and innovation no matter the field.
            </p>
          </div>
        </div>

        {/* Grid with circle and fields */}
        <div className={styles.grid}>
          {/* ВЕРХНИЕ PNG полоски */}
          <Image src={topLeft} alt="top lines" className={styles.linesTopLeft} width={155} height={189} />
          <Image src={topRight} alt="top lines" className={styles.linesTopRight} width={155} height={189} />

          {/* НИЖНИЕ PNG полоски */}
          <Image src={bottomLeft} alt="bottom lines" className={styles.linesBottomLeft} width={155} height={189} />
          <Image src={bottomRight} alt="bottom lines" className={styles.linesBottomRight} width={155} height={189} />

          {/* ЦЕНТРАЛЬНЫЕ PNG полоски */}
          <Image src={leftCenter} alt="center left lines" className={styles.linesCenterLeft} width={160} height={0} />
          <Image src={rightCenter} alt="center right lines" className={styles.linesCenterRight} width={160} height={0} />

          {/* ДОПОЛНИТЕЛЬНЫЕ ПОЛОСКИ ИЗ ЦЕНТРА */}
          <Image src={bottomLeftFromCenter} alt="bottom left from center" className={styles.linesBottomLeftFromCenter} width={100} height={160} />
          <Image src={bottomRightFromCenter} alt="bottom right from center" className={styles.linesBottomRightFromCenter} width={100} height={160} />
          <Image src={topLeftFromCenter} alt="top left from center" className={styles.linesTopLeftFromCenter} width={100} height={160} />
          <Image src={topRightFromCenter} alt="top right from center" className={styles.linesTopRightFromCenter} width={100} height={160} />

          <div className={`${styles.column} ${styles.leftColumn}`}>
            {itemsLeft.map((item, index) => (
              <div key={index} className={styles.item}>
                <Image src={icon} alt="icon" width={24} height={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.circle}>
            <Image src={circleImage} alt="circle" width={235} height={235} />
          </div>

          <div className={`${styles.column} ${styles.rightColumn}`}>
            {itemsRight.map((item, index) => (
              <div key={index} className={styles.item}>
                <Image src={icon} alt="icon" width={24} height={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}