import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';
import styles from '@/styles/TestimonialsSlider.module.css';

import person1 from '@/images/person_1.png';
import person2 from '@/images/person_2.png';
import person3 from '@/images/person_3.png';

// Данные отзывов (пока одинаковые, как указано в ТЗ)
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person1,
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, GlobalCorp',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person2,
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder, StartupXYZ',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person3,
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'CTO, InnovateLabs',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person1,
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'VP Marketing, GrowthCo',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person2,
    rating: 5
  },
  {
    id: 6,
    name: 'James Wilson',
    position: 'Owner, LocalBusiness',
    content: '2Clients transformed our digital presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. Highly professional team!',
    avatar: person3,
    rating: 5
  }
];

const TestimonialsSlider = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>What our clients say</h2>
        <p className={styles.subtitle}>
          Real feedback from businesses we've helped grow
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={setSwiper}
          className={styles.swiper}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={styles.testimonialCard}>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                
                <p className={styles.content}>"{testimonial.content}"</p>
                
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <Image
                      {...getOptimizedImageProps(testimonial.avatar, testimonial.name, 60, 60, true)}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorPosition}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные кнопки навигации */}
        <button className={`swiper-button-prev ${styles.navButton} ${styles.prevButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`swiper-button-next ${styles.navButton} ${styles.nextButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Кастомная пагинация */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
