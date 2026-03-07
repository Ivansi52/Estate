import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import styles from '@/styles/ThirdBlockMainPage.module.css';
import logoFirstBigCardIcon from '@/images/icon_mirro_1.png';
import logoSecondBigCardIcon from '@/images/icon_mirro_2.png';
import leftCardIcon from '@/images/left_card_icon.png';
import rightCardIcon from '@/images/right_card_icon.png';

function hideSplineLogo(viewerEl) {
  if (!viewerEl?.shadowRoot) return;
  const root = viewerEl.shadowRoot;
  root.querySelectorAll('a').forEach((a) => {
    if (a.href?.includes('spline') || /built with|spline/i.test(a.textContent || '')) {
      a.style.setProperty('display', 'none', 'important');
    }
  });
}

export default function SecondSection() {
  const splineRef = useRef(null);
  const centerWrapRef = useRef(null);

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;
    const run = () => hideSplineLogo(el);
    el.addEventListener('load-complete', run);
    run();
    const t = setInterval(run, 150);
    const stop = setTimeout(() => clearInterval(t), 3000);
    return () => {
      el.removeEventListener('load-complete', run);
      clearInterval(t);
      clearTimeout(stop);
    };
  }, []);

  useEffect(() => {
    const wrap = centerWrapRef.current;
    if (!wrap) return;
    const onWheel = (e) => e.stopPropagation();
    wrap.addEventListener('wheel', onWheel, true);
    return () => wrap.removeEventListener('wheel', onWheel, true);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* Заголовок блока */}
        <div className={styles.topBlock}>
          <div className={styles.number}>02</div>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Why we’re the <br /> right <span className={styles.highlight}>choice</span>
            </h2>
            <p className={styles.subtext}>
              We bring creativity and experience together to deliver results that exceed expectations.
            </p>
          </div>
        </div>

        {/* Обёртка карточек */}
        <div className={styles.cardsWrapper}>
        {/* Первый ряд - большие карточки */}
        <div className={styles.topRowWrapper}>
          <div className={styles.aboutUsBadge}>
            <span className={styles.aboutUsText}>ABOUT US</span>
            <span className={styles.aboutUsIconWrapper}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="white" />
                <path
                  d="M13.25 23.1248V21.0415H25.75L20.0208 15.3123L21.5 13.8331L29.75 22.0831L21.5 30.3331L20.0208 28.854L25.75 23.1248H13.25Z"
                  fill="#01203F"
                />
              </svg>
            </span>
          </div>

          <div className={styles.topRow}>
            {/* Левая карточка */}
            <div className={`${styles.cardLarge} ${styles.cutBottomRight} ${styles.inverseRoundBottomRight} ${styles.inverseRoundBottomLeft}`}>
              <span className={styles.inverseRoundBottomLeftCut} aria-hidden="true" />
              <div className={styles.categoriesLeft}>
                <span className={styles.category}>Communication</span>
                <span className={styles.category}>Responsibility</span>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={logoSecondBigCardIcon} alt="Icon Left Card" width={250} height={250} />
              </div>
              <div className={styles.bottomLeftText}>
                <h3 className={styles.cardTitle}>Direct communication without barriers</h3>
                <p className={styles.cardDescription}>
                  Our team speaks fluent Russian, <br /> English, German, and Spanish. <br />  You’ll always be in touch directly with the developers.
                </p>
              </div>
            </div>

            {/* Правая карточка */}
            <div className={`${styles.cardLarge} ${styles.cutBottomLeft}`}>
              <div className={styles.categoriesRight}>
                <span className={styles.category}>Strategies</span>
                <span className={styles.category}>Effectiveness</span>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={logoFirstBigCardIcon} alt="Icon Right Card" width={250} height={250} />
              </div>
              <div className={styles.bottomRightText}>
                <h3 className={styles.cardTitle}>Marketing effectiveness</h3>
                <p className={styles.cardDescription}>
                  We developed 20+ strategies and <br /> generated leads worth over $200,000. <br /> Reduced ineffective ad spending for 37 companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Второй ряд - маленькие карточки */}
        <div className={styles.bottomRow}>
          {/* Левая крайняя карточка */}
          <div className={`${styles.cardSmall}`}>
            <div className={styles.bottomCardIcon}>
              <Image src={leftCardIcon} alt="Left Icon" width={182} height={182} />
            </div>
            <div className={styles.bottomLeftText}>
              <h3 className={styles.cardTitle}>Reliability and <br /> accountability guarantee</h3>
              <p className={styles.cardDescription}>
                We take 100% responsibility for your website’s performance, brand recognition, and customer loyalty.
              </p>
            </div>
          </div>

          {/* Левая центральная карточка */}
        <div className={`${styles.cardSmall} ${styles.cutTopRight}`}>
            <div className={styles.centerCardContent}>
                <div className={styles.categoriesBottomCenter}>
                <span className={styles.category}>Experience</span>
                </div>
                <div>
                <div className={styles.gradientNumber}>15+</div>
                <div className={styles.centerCardText}>
                    <h3 className={styles.cardTitle}>Experience in countries</h3>
                    <p className={styles.cardDescription}>
                    We take into account legal, cultural, and marketing specifics of each market. Your brand will be protected from financial losses.
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Правая центральная карточка */}
            <div className={`${styles.cardSmall} ${styles.cutTopLeft}`}>
            <div className={styles.centerCardContent}>
                <div className={styles.categoriesBottomCenter}>
                <span className={styles.category}>Connections</span>
                </div>
                <div>
                <div className={styles.gradientNumber}>50+</div>
                <div className={styles.centerCardText}>
                    <h3 className={styles.cardTitle}>Ready integrations</h3>
                    <p className={styles.cardDescription}>
                    We connect CRM, payment systems, <br /> chatbots, and other tools to boost conversion rates and save your managers’ time.
                    </p>
                </div>
                </div>
            </div>
            </div>


          {/* Правая крайняя карточка */}
          <div className={`${styles.cardSmall}`}>
            <div className={styles.bottomCardIcon}>
              <Image src={rightCardIcon} alt="Right Icon" width={182} height={182} />
            </div>
            <div className={styles.bottomRightText}>
              <h3 className={styles.cardTitle}>Partnership and  expertise</h3>
              <p className={styles.cardDescription}>
                We integrate into your business from day one, leveraging experience from 100+ successful cases and deep niche knowledge.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Вырез поверх карточек (бэк шара — оставляем) */}
        <div className={styles.cutoutFill} aria-hidden="true" />

        {/* Spline 3D: шар + бэк */}
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js"
          strategy="afterInteractive"
          type="module"
        />
        <div ref={centerWrapRef} className={styles.centerImage}>
          <spline-viewer
            ref={splineRef}
            url="https://prod.spline.design/Kw5fOFJcsz8sqnWI/scene.splinecode"
            background="#d4e8f7"
            loading="eager"
            events-target="local"
            className={styles.splineViewer}
          />
        </div>

      </div>
    </section>
  );
}
