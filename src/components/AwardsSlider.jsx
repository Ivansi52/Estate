import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';
import styles from '@/styles/AwardsSlider.module.css';

import certificate from '@/images/certificate.png';

// Данные наград (заглушки, как указано в ТЗ)
const awards = [
  {
    id: 1,
    title: 'Best Digital Agency 2024',
    organization: 'Web Excellence Awards',
    year: '2024',
    image: certificate
  },
  {
    id: 2,
    title: 'Top SEO Performance',
    organization: 'Search Marketing Institute',
    year: '2024',
    image: certificate
  },
  {
    id: 3,
    title: 'Innovation in Web Design',
    organization: 'Design Forward',
    year: '2023',
    image: certificate
  },
  {
    id: 4,
    title: 'Excellence in E-commerce',
    organization: 'Digital Commerce Awards',
    year: '2023',
    image: certificate
  },
  {
    id: 5,
    title: 'Best Mobile Experience',
    organization: 'Mobile Excellence',
    year: '2023',
    image: certificate
  },
  {
    id: 6,
    title: 'Outstanding Client Service',
    organization: 'Service Excellence Awards',
    year: '2024',
    image: certificate
  }
];

const AwardsSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Awards & Recognition</h2>
        <p className={styles.subtitle}>
          Recognized for excellence in digital marketing and web development
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.awards-button-next',
            prevEl: '.awards-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {awards.map((award) => (
            <SwiperSlide key={award.id}>
              <div className={styles.awardCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    {...getOptimizedImageProps(award.image, award.title, 200, 150)}
                    className={styles.awardImage}
                  />
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <p className={styles.organization}>{award.organization}</p>
                  <span className={styles.year}>{award.year}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные кнопки навигации */}
        <button className={`awards-button-prev ${styles.navButton} ${styles.prevButton}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`awards-button-next ${styles.navButton} ${styles.nextButton}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AwardsSlider;
