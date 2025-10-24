import Image from 'next/image';
import styles from '@/styles/GrayWindows.module.css';
import Photo from '@/images/telo.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function GrayWindows() {
  return (
    <div className={styles.section}>
        <div className={styles.headerBlock}>
          <div className={styles.numberBadge}>01</div>
          <h2 className={styles.title}>
            Company 2Clients<br />
            <span className={styles.leaderBadge}>Leader</span> in B2B services
          </h2>
          <p className={styles.subtitle}>
            We have professionals who know how to achieve results in the most competitive industries.
          </p>
        </div>
      <div className={styles.container}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.windowSmall}>
            <h2 className={styles.gradientTitle}>Solving Market Challenges</h2>
            <div className={styles.spacer}></div>
            <p className={styles.leftTopText}>
              Every project has two sides — the business that wants to grow, and the customer who needs to quickly think: "This solution is for me."<br />
              Many websites are created to please the owner, forgetting about the people who will actually use them.
            </p>
          </div>
          <div className={styles.windowSmall}>
            <h2 className={styles.gradientTitle}>Boosting Business Profitability, Day by Day</h2>
            <div className={styles.spacer}></div>
            <p className={styles.leftBottomText}>
              Over 50 successful projects and 5 years of proven expertise.
            </p>
          </div>
        </div>

        {/* Центральное окно с контентом */}
        <div className={styles.middleWindow}>
          <div className={styles.centerContent}>
            {/* Левая часть текста */}
            <div className={styles.centerText}>
              <h2 className={styles.centerTitle}>Company Philosophy</h2>
              <p className={styles.centerParagraph}>
                This is how 2Clients was founded. The name says it all: "Two Clients" — and at the same time, "to clients", meaning "for clients." <br /> <br />
                This play on words reflects our philosophy: listening to the business, understanding the customer, and creating products that generate profit. <br /> <br />
                For us, it's not just words — it's a method we apply to every project.
              </p>
            </div>

            {/* Вертикальная пунктирная линия */}
            <div className={styles.divider}></div>

            {/* Правая часть с изображением и текстом */}
            <div className={styles.centerRight}>
              <Image {...getOptimizedImageProps(Photo, "Stanislav Shantalin", 205, 238)} />
              <p className={styles.name}>Stanislav Shantalin</p>
              <p className={styles.position}>Founder of 2Clients</p>
              <p className={styles.centerRightText}>
                - Launched over 50 digital projects<br />
                - Worked with markets in Russia, Europe, and Latin America<br />
                - Personally oversees the website creation process
              </p>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <div className={styles.windowSmallRight}>
            <h2 className={styles.gradientTitle}>Our Mission</h2>
            <div className={styles.spacer}></div>
            <p className={styles.rightTopText}>
              To unite the goals of businesses and customers, crafting products that represent the brand while resonating with the audience.
            </p>
          </div>
          <div className={styles.windowSmallRight}>
            <h2 className={styles.gradientTitle}>98% of our clients continue working with us</h2>
            <div className={styles.spacer}></div>
            <p className={styles.rightBottomText}>
              We focus on fostering strong, long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}