import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/SecondBlockMainPage.module.css';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import LogoCardIcon from '@/images/Users_Group.png';
import HesterenkaImage from '@/images/hesterenka.png';
import SEOImage from '@/images/seo-image.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

const CARD_NEIGHBORS = {
  card1: ['card2'],
  card2: ['card1'],
  card4: ['card5'],
  card5: ['card4'],
};

export default function HeroBlock() {
  const [expandedCard, setExpandedCard] = useState(null);

  const isSubtitleHidden = (cardId) =>
    expandedCard && CARD_NEIGHBORS[cardId]?.includes(expandedCard);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.number}>01</div>

          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Discover what we</span>
              <span className={styles.headingLine}>can build <span className={styles.highlight}>together</span></span>
            </h2>
            <p className={styles.subtext}>
              <span className={styles.subtextLine}>We craft digital solutions that drive results — tailored  </span>
              <span className={styles.subtextLine}>to your business, your audience, and your goals.</span>
            </p>
          </div>

          <button className={styles.ctaButton}>
            <span className={styles.ctaText}>WEB SERVICES</span>
            <span className={styles.ctaIcon}><FaArrowRight /></span>
          </button>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.row}>
            {/* Маленькие карточки */}
            {expandedCard === 'card1' ? (
              <div
                className={styles.cardLargeWithImage}
                onMouseEnter={() => setExpandedCard('card1')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.categories}>
                    <span className={styles.category}>Landing pages</span>
                    <span className={styles.category}>Corporate sites</span>
                    <span className={styles.category}>E-Commerce</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>Website Development</h3>
                    <p className={styles.largeCardDesc}>
                      Modern, responsive websites<br /> delivered turnkey.
                    </p>
                    {/*<p className={styles.largeCardTags}>*/}
                    {/*  → Landing pages, corporate sites, redesigns.*/}
                    {/*</p>*/}
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
            ) : (
              <div
                className={`${styles.cardSmall} ${isSubtitleHidden('card1') ? styles.neighborExpanded : ''}`}
                onMouseEnter={() => setExpandedCard('card1')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2083 29.375C25.2083 27.3039 22.8765 25.625 20 25.625C17.1235 25.625 14.7917 27.3039 14.7917 29.375M29.375 25.6255C29.375 24.0877 28.0895 22.7662 26.25 22.1875M10.625 25.6255C10.625 24.0877 11.9105 22.7662 13.75 22.1875M26.25 17.1701C26.8893 16.4835 27.2917 15.4856 27.2917 14.375C27.2917 12.3039 25.8926 10.625 24.1667 10.625C23.3663 10.625 22.6362 10.9861 22.0833 11.5799M13.75 17.1701C13.1107 16.4835 12.7083 15.4856 12.7083 14.375C12.7083 12.3039 14.1074 10.625 15.8333 10.625C16.6337 10.625 17.3638 10.9861 17.9167 11.5799M20 21.875C18.2741 21.875 16.875 20.1961 16.875 18.125C16.875 16.0539 18.2741 14.375 20 14.375C21.7259 14.375 23.125 16.0539 23.125 18.125C23.125 20.1961 21.7259 21.875 20 21.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>Contextual Advertising</h3>
                    <p className={`${styles.cardDesc} ${isSubtitleHidden('card1') ? styles.cardDescHidden : ''}`}>
                      Setup and optimization of advertising campaigns.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                    Google Ads, YouTube Ads, Meta Ads, retargeting.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {expandedCard === 'card2' ? (
              <div
                className={styles.cardLargeWithImage}
                onMouseEnter={() => setExpandedCard('card2')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.categories}>
                    <span className={styles.category}>Social media</span>
                    <span className={styles.category}>Email sequences</span>
                    <span className={styles.category}>Engagement</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>Website Development</h3>
                    <p className={styles.largeCardDesc}>
                      Modern, responsive websites <br /> delivered turnkey.
                    </p>
                    {/* <p className={styles.largeCardTags}>
                      → Landing pages, corporate sites, redesigns.
                    </p> */}
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
            ) : (
              <div
                className={`${styles.cardSmall} ${isSubtitleHidden('card2') ? styles.neighborExpanded : ''}`}
                onMouseEnter={() => setExpandedCard('card2')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5639 23.4819C16.8248 23.1532 21.0006 18.2503 21.0006 12.2499C21.0006 6.03675 16.5233 1 11.0003 1C5.47729 1 1 6.03675 1 12.2499C1 14.4637 1.56825 16.528 2.54986 18.2685L1.84312 20.6537L1.842 20.6572C1.57131 21.5707 1.43591 22.0277 1.53232 22.3318C1.61634 22.5969 1.80283 22.8058 2.03844 22.9003C2.30791 23.0084 2.71129 22.8572 3.51789 22.5547L3.52937 22.5508L5.6502 21.7557C7.19736 22.86 9.0325 23.4994 11.0004 23.4994C11.1895 23.4994 11.3774 23.4935 11.5639 23.4819ZM11.5639 23.4819V23.4819ZM11.5639 23.4819C12.9321 27.8608 16.6406 31 21.0008 31C22.9687 31 24.8035 30.36 26.3505 29.2557L28.4709 30.0507L28.475 30.0516C29.287 30.3561 29.6939 30.5087 29.9643 30.4002C30.1999 30.3057 30.384 30.0968 30.468 29.8317C30.5646 29.5271 30.4295 29.0696 30.1581 28.1536L29.4514 25.7684L29.6881 25.3272C30.5239 23.6834 31 21.7791 31 19.7498C31 13.5367 26.5236 8.49993 21.0006 8.49993L20.6262 8.50769L20.4374 8.51807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>Social Media Marketing </h3>
                    <p className={`${styles.cardDesc} ${isSubtitleHidden('card2') ? styles.cardDescHidden : ''}`}>
                      Helping you communicate <br />
                       directly with your audience.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                    Social media, email sequences, engagement.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Большая карточка с изображением и кнопкой в вырезе */}
            {true ? (
              <div className={styles.cardLargeWithImage}>
                <div className={styles.cardContent}>
                  <div className={styles.categories}>
                    <span className={styles.category}>Web Design</span>
                    <span className={styles.category}>Redesign</span>
                    <span className={styles.category}>E-Commerce</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>Website Development</h3>
                    <p className={styles.largeCardDesc}>
                      Modern, responsive websites <br /> delivered turnkey.
                    </p>
                    {/* <p className={styles.largeCardTags}>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                        <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="white"/>
                      </svg>
                      Landing pages, corporate sites, redesigns.
                    </p> */}
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
            ) : (
              <div
                className={styles.cardSmall}
                onMouseEnter={() => setExpandedCard('card3')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <Image {...getOptimizedImageProps(LogoCardIcon, "Logo", 40, 40)} />
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>SMM</h3>
                    <p className={styles.cardDesc}>
                      Helping you communicate directly with your audience.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                    Google Ads, Yandex.Direct, RSYA, retargeting.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.row}>
            {/* Большая карточка слева */}
            {true ? (
              <div className={styles.cardLargeWithImage}>
                <div className={styles.cardContent} style={{ position: 'relative', zIndex: 2 }}>
                  <div className={styles.categories}>
                  <span className={styles.category}>Audits</span>
                    <span className={styles.category}>Content</span>
                    <span className={styles.category}>Semantics</span>
                    <span className={styles.category}>Traffic growth</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle} style={{ whiteSpace: 'nowrap', marginBottom: '15px' }}>Search Engine Optimization (SEO)</h3>
                    <p className={styles.largeCardDesc} style={{ whiteSpace: 'nowrap', marginBottom: '20px' }}>
                      Getting websites to the top <br /> of Yandex and Google.
                    </p>
                    {/* <p className={styles.largeCardTags}>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                        <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="white"/>
                      </svg>
                      Audits, content, semantics, traffic growth
                    </p> */}
                  </div>
                </div>
                <div className={styles.imageWrapper} style={{ position: 'absolute', zIndex: 1, top: '40%', right: 0, transform: 'translateY(-50%) scale(2.0)' }}>
                  <Image
                    {...getOptimizedImageProps(SEOImage, "Search Engine Optimization (SEO)", 903, 903, true)}
                  />
                </div>
                <div className={styles.cutCorner}></div>
                <button className={styles.cutCornerButton}>
                  <FaArrowUp />
                </button>
              </div>
            ) : (
              <div
                className={styles.cardSmall}
                onMouseEnter={() => setExpandedCard('card6')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2083 29.375C25.2083 27.3039 22.8765 25.625 20 25.625C17.1235 25.625 14.7917 27.3039 14.7917 29.375M29.375 25.6255C29.375 24.0877 28.0895 22.7662 26.25 22.1875M10.625 25.6255C10.625 24.0877 11.9105 22.7662 13.75 22.1875M26.25 17.1701C26.8893 16.4835 27.2917 15.4856 27.2917 14.375C27.2917 12.3039 25.8926 10.625 24.1667 10.625C23.3663 10.625 22.6362 10.9861 22.0833 11.5799M13.75 17.1701C13.1107 16.4835 12.7083 15.4856 12.7083 14.375C12.7083 12.3039 14.1074 10.625 15.8333 10.625C16.6337 10.625 17.3638 10.9861 17.9167 11.5799M20 21.875C18.2741 21.875 16.875 20.1961 16.875 18.125C16.875 16.0539 18.2741 14.375 20 14.375C21.7259 14.375 23.125 16.0539 23.125 18.125C23.125 20.1961 21.7259 21.875 20 21.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>SMM</h3>
                    <p className={styles.cardDesc}>
                      Setup and optimization of advertising campaigns.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                    Google Ads, Yandex.Direct, RSYA, retargeting.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Две маленькие карточки справа */}
            {expandedCard === 'card4' ? (
              <div
                className={styles.cardLargeWithImage}
                onMouseEnter={() => setExpandedCard('card4')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.categories}>
                    <span className={styles.category}>Web/mobile apps</span>
                    <span className={styles.category}>Telegram bots</span>
                    <span className={styles.category}>AI assistants</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>Website Development</h3>
                    <p className={styles.largeCardDesc}>
                      Modern, responsive websites <br /> delivered turnkey.
                    </p>
                    {/* <p className={styles.largeCardTags}>
                      → Landing pages, corporate sites, redesigns.
                    </p> */}
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
            ) : (
              <div
                className={`${styles.cardSmall} ${isSubtitleHidden('card4') ? styles.neighborExpanded : ''}`}
                onMouseEnter={() => setExpandedCard('card4')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 8.75H22.3108C21.6889 8.75 21.25 8.12188 21.25 7.5C21.25 5.42893 19.5711 3.75 17.5 3.75C15.4289 3.75 13.75 5.42893 13.75 7.5C13.75 8.12188 13.3111 8.75 12.6892 8.75H10C9.30964 8.75 8.75 9.30964 8.75 10V12.6892C8.75 13.3111 8.12189 13.75 7.5 13.75C5.42893 13.75 3.75 15.4289 3.75 17.5C3.75 19.5711 5.42893 21.25 7.5 21.25C8.12189 21.25 8.75 21.6889 8.75 22.3108V25C8.75 25.6904 9.30964 26.25 10 26.25L25 26.25C25.6904 26.25 26.25 25.6903 26.25 25V22.3108C26.25 21.6889 25.6219 21.25 25 21.25C22.9289 21.25 21.25 19.5711 21.25 17.5C21.25 15.4289 22.9289 13.75 25 13.75C25.6219 13.75 26.25 13.3111 26.25 12.6892L26.25 10C26.25 9.30964 25.6903 8.75 25 8.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>
                      Mobile Apps &{isSubtitleHidden('card4') ? <><br />AI bots</> : ' AI bots'}
                    </h3>
                    <p className={`${styles.cardDesc} ${isSubtitleHidden('card4') ? styles.cardDescHidden : ''}`}>
                      Development of digital products.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                    Web/mobile apps, <br />Telegram bots, AI assistants.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {expandedCard === 'card5' ? (
              <div
                className={styles.cardLargeWithImage}
                onMouseEnter={() => setExpandedCard('card5')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.categories}>
                    <span className={styles.category}>Logos</span>
                    <span className={styles.category}>Identity</span>
                    <span className={styles.category}>UI/UX design</span>
                  </div>
                  <div className={styles.titleDescBlock}>
                    <h3 className={styles.largeCardTitle}>Webdesign</h3>
                    <p className={styles.largeCardDesc}>
                      Creating visual style <br />
                      and brand logic.
                    </p>
                    {/* <p className={styles.largeCardTags}>
                      → Landing pages, corporate sites, redesigns.
                    </p> */}
                  </div>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    {...getOptimizedImageProps(HesterenkaImage, "Design and Branding", 675, 675, true)}
                  />
                </div>
                <div className={styles.cutCorner}></div>
                <button className={styles.cutCornerButton}>
                  <FaArrowUp />
                </button>
              </div>
            ) : (
              <div
                className={`${styles.cardSmall} ${isSubtitleHidden('card5') ? styles.neighborExpanded : ''}`}
                onMouseEnter={() => setExpandedCard('card5')}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className={styles.cardLogo}>
                  <div className={styles.logoCircle}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.25 18.75H15M11.25 18.75C9.17893 18.75 7.5 20.4289 7.5 22.5C7.5 24.5711 9.17893 26.25 11.25 26.25C13.3211 26.25 15 24.5711 15 22.5V18.75M11.25 18.75C9.17893 18.75 7.5 17.0711 7.5 15C7.5 12.9289 9.17893 11.25 11.25 11.25M15 18.75V15M11.25 11.25H15M11.25 11.25C9.17893 11.25 7.5 9.57107 7.5 7.5C7.5 5.42893 9.17893 3.75 11.25 3.75H15M15 11.25V15M15 11.25V3.75M15 11.25H18.75M15 15C15 17.0711 16.6789 18.75 18.75 18.75C20.8211 18.75 22.5 17.0711 22.5 15C22.5 12.9289 20.8211 11.25 18.75 11.25M15 15C15 12.9289 16.6789 11.25 18.75 11.25M15 3.75H18.75C20.8211 3.75 22.5 5.42893 22.5 7.5C22.5 9.57107 20.8211 11.25 18.75 11.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.titleAndDesc}>
                    <h3 className={styles.cardTitle}>Webdesign & Branding</h3>
                    <p className={`${styles.cardDesc} ${isSubtitleHidden('card5') ? styles.cardDescHidden : ''}`}>
                      Creating visual style <br />
                      and brand logic.
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.cardTags}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M0 9.29167V7.20833H12.5L6.77083 1.47917L8.25 0L16.5 8.25L8.25 16.5L6.77083 15.0208L12.5 9.29167H0Z" fill="#01203F"/>
                    </svg>
                      Logos, identity, UI/UX <br/>
                    design.
                  </p>
                  <div className={styles.diagonalArrow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8445 30.6453L9.48747 28.2882L23.6296 14.1461L10.666 14.1461V10.7991H29.3336V29.4668H25.9866L25.9866 16.5031L11.8445 30.6453Z" fill="#01203F"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            </div>
        </div>
      </div>
    </section>
  );
}
