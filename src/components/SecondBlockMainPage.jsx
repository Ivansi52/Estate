import Image from 'next/image';
import styles from '@/styles/SecondBlockMainPage.module.css';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import LogoCardIcon from '@/images/Users_Group.png';
import HesterenkaImage from '@/images/hesterenka.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function HeroBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.number}>01</div>

          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Discover what we can build <span className={styles.highlight}>together</span>
            </h2>
            <p className={styles.subtext}>
              We craft digital solutions that drive results — tailored to your business, your audience, and your goals.
            </p>
          </div>

          <button className={styles.ctaButton}>
            MORE
            <span className={styles.ctaIcon}><FaArrowRight /></span>
          </button>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.row}>
            {/* Маленькие карточки */}
            <a href="#" className={styles.cardSmall}>
              <div className={styles.cardLogo}>
                <div className={styles.logoCircle}>
                  <Image {...getOptimizedImageProps(LogoCardIcon, "Logo", 40, 40)} />
                </div>
                <div className={styles.titleAndDesc}>
                  <h3 className={styles.cardTitle}>Contextual Advertising</h3>
                  <p className={styles.cardDesc}>
                    Setup and optimization of advertising campaigns.
                  </p>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <p className={styles.cardTags}>
                  → Google Ads, Yandex.Direct, RSYA, retargeting.
                </p>
                <div className={styles.diagonalArrow}>
                  <FaArrowRight />
                </div>
              </div>
            </a>

            <a href="#" className={styles.cardSmall}>
              <div className={styles.cardLogo}>
                <div className={styles.logoCircle}>
                  <Image {...getOptimizedImageProps(LogoCardIcon, "Logo", 40, 40)} />
                </div>
                <div className={styles.titleAndDesc}>
                  <h3 className={styles.cardTitle}>Contextual Advertising</h3>
                  <p className={styles.cardDesc}>
                    Setup and optimization of advertising campaigns.
                  </p>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <p className={styles.cardTags}>
                  → Google Ads, Yandex.Direct, RSYA, retargeting.
                </p>
                <div className={styles.diagonalArrow}>
                  <FaArrowRight />
                </div>
              </div>
            </a>

            {/* Большая карточка с изображением и кнопкой в вырезе */}
            <div className={styles.cardLargeWithImage}>
              <div className={styles.cardContent}>
                <div className={styles.categories}>
                  <span className={styles.category}>Web Design</span>
                  <span className={styles.category}>Redesign</span>
                  <span className={styles.category}>E-Commerce</span>
                </div>

                <div className={styles.titleDescBlock}>
                  <h3 className={styles.largeCardTitle}>WebSite Development</h3>
                  <p className={styles.largeCardDesc}>
                    Modern, responsive websites delivered turnkey.
                  </p>
                  <p className={styles.largeCardTags}>
                    → Landing pages, corporate sites, redesigns.
                  </p>
                </div>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  {...getOptimizedImageProps(HesterenkaImage, "WebSite Development", 675, 675, true)}
                />
              </div>

              {/* Вырез */}
              <div className={styles.cutCorner}></div>

              {/* Кнопка поверх выреза */}
              <button className={styles.cutCornerButton}>
                <FaArrowUp />
                </button>
            </div>
          </div>

          <div className={styles.row}>
            {/* Большая карточка слева */}
            <div className={styles.cardLargeWithImage}>
                <div className={styles.cardContent}>
                <div className={styles.categories}>
                    <span className={styles.category}>Web Design</span>
                    <span className={styles.category}>Redesign</span>
                    <span className={styles.category}>E-Commerce</span>
                </div>

                <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>WebSite Development</h3>
                    <p className={styles.largeCardDesc}>
                    Modern, responsive websites delivered turnkey.
                    </p>
                    <p className={styles.largeCardTags}>
                    → Landing pages, corporate sites, redesigns.
                    </p>
                </div>
                </div>

                <div className={styles.imageWrapper}>
                <Image
                    {...getOptimizedImageProps(HesterenkaImage, "WebSite Development", 675, 675, true)}
                />
                </div>

                <div className={styles.cutCorner}></div>
                <button className={styles.cutCornerButton}>
                <FaArrowUp />
                </button>
            </div>

            {/* Две маленькие карточки справа */}
            <a href="#" className={styles.cardSmall}>
                <div className={styles.cardLogo}>
                <div className={styles.logoCircle}>
                    <Image {...getOptimizedImageProps(LogoCardIcon, "Logo", 40, 40)} />
                </div>
                <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>Contextual Advertising</h3>
                    <p className={styles.cardDesc}>
                    Setup and optimization of advertising campaigns.
                    </p>
                </div>
                </div>

                <div className={styles.cardBottom}>
                <p className={styles.cardTags}>
                    → Google Ads, Yandex.Direct, RSYA, retargeting.
                </p>
                <div className={styles.diagonalArrow}>
                    <FaArrowRight />
                </div>
                </div>
            </a>

            <a href="#" className={styles.cardSmall}>
                <div className={styles.cardLogo}>
                <div className={styles.logoCircle}>
                    <Image {...getOptimizedImageProps(LogoCardIcon, "Logo", 40, 40)} />
                </div>
                <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>Contextual Advertising</h3>
                    <p className={styles.cardDesc}>
                    Setup and optimization of advertising campaigns.
                    </p>
                </div>
                </div>

                <div className={styles.cardBottom}>
                <p className={styles.cardTags}>
                    → Google Ads, Yandex.Direct, RSYA, retargeting.
                </p>
                <div className={styles.diagonalArrow}>
                    <FaArrowRight />
                </div>
                </div>
            </a>
            </div>
        </div>
      </div>
    </section>
  );
}
