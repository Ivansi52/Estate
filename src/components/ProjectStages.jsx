import { useState } from 'react';
import styles from '@/styles/ProjectStages.module.css';

const ActiveEllipse = () => (
  <svg viewBox="0 0 1075 266" aria-hidden="true" focusable="false">
    <path
      d="M537.5 1C685.87 1 820.161 15.8821 917.33 39.9258C965.922 51.9495 1005.18 66.2511 1032.26 82.0938C1059.41 97.9773 1074 115.213 1074 133C1074 150.787 1059.41 168.023 1032.26 183.906C1005.18 199.749 965.922 214.05 917.33 226.074C820.161 250.118 685.87 265 537.5 265C389.13 265 254.839 250.118 157.67 226.074C109.078 214.05 69.8248 199.749 42.7441 183.906C15.5937 168.023 1 150.787 1 133C1 115.213 15.5937 97.9773 42.7441 82.0938C69.8248 66.2511 109.078 51.9495 157.67 39.9258C254.839 15.8821 389.13 1 537.5 1Z"
      fill="none"
      stroke="url(#active_gradient)"
      strokeWidth="4"
    />
    <defs>
      <linearGradient id="active_gradient" x1="550.117" y1="0" x2="548.547" y2="266" gradientUnits="userSpaceOnUse">
        <stop offset="0.2" stopColor="white" stopOpacity="0.35" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const ActiveEllipseSmall = () => (
  <svg viewBox="0 0 852 189" aria-hidden="true" focusable="false">
    <path
      d="M426 0.5C543.611 0.5 650.073 11.0758 727.119 28.167C765.646 36.7135 796.791 46.883 818.291 58.1592C829.041 63.7975 837.356 69.7 842.978 75.7939C848.597 81.8853 851.5 88.1394 851.5 94.5C851.5 100.861 848.597 107.115 842.978 113.206C837.356 119.3 829.041 125.203 818.291 130.841C796.791 142.117 765.646 152.287 727.119 160.833C650.073 177.924 543.611 188.5 426 188.5C308.389 188.5 201.927 177.924 124.881 160.833C86.3539 152.287 55.2092 142.117 33.709 130.841C22.9586 125.203 14.6439 119.3 9.02246 113.206C3.4034 107.115 0.5 100.861 0.5 94.5C0.5 88.1394 3.4034 81.8853 9.02246 75.7939C14.6439 69.7 22.9586 63.7975 33.709 58.1592C55.2092 46.883 86.3539 36.7135 124.881 28.167C201.927 11.0758 308.389 0.5 426 0.5Z"
      fill="none"
      stroke="url(#active_small_gradient)"
      strokeWidth="4"
    />
    <defs>
      <linearGradient id="active_small_gradient" x1="434" y1="0" x2="434" y2="189" gradientUnits="userSpaceOnUse">
        <stop offset="0.2" stopColor="white" stopOpacity="0.35" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const InactiveEllipseLarge = () => (
  <svg viewBox="0 0 1075 266" aria-hidden="true" focusable="false">
    <path
      d="M537.5 1C685.87 1 820.161 15.8821 917.33 39.9258C965.922 51.9495 1005.18 66.2511 1032.26 82.0938C1059.41 97.9773 1074 115.213 1074 133C1074 150.787 1059.41 168.023 1032.26 183.906C1005.18 199.749 965.922 214.05 917.33 226.074C820.161 250.118 685.87 265 537.5 265C389.13 265 254.839 250.118 157.67 226.074C109.078 214.05 69.8248 199.749 42.7441 183.906C15.5937 168.023 1 150.787 1 133C1 115.213 15.5937 97.9773 42.7441 82.0938C69.8248 66.2511 109.078 51.9495 157.67 39.9258C254.839 15.8821 389.13 1 537.5 1Z"
      fill="none"
      stroke="url(#inactive_gradient)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient id="inactive_gradient" x1="550.117" y1="0" x2="548.547" y2="266" gradientUnits="userSpaceOnUse">
        <stop offset="0.2" stopColor="white" stopOpacity="0.11" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const InactiveEllipseSmall = () => (
  <svg viewBox="0 0 852 189" aria-hidden="true" focusable="false">
    <path
      d="M426 0.5C543.611 0.5 650.073 11.0758 727.119 28.167C765.646 36.7135 796.791 46.883 818.291 58.1592C829.041 63.7975 837.356 69.7 842.978 75.7939C848.597 81.8853 851.5 88.1394 851.5 94.5C851.5 100.861 848.597 107.115 842.978 113.206C837.356 119.3 829.041 125.203 818.291 130.841C796.791 142.117 765.646 152.287 727.119 160.833C650.073 177.924 543.611 188.5 426 188.5C308.389 188.5 201.927 177.924 124.881 160.833C86.3539 152.287 55.2092 142.117 33.709 130.841C22.9586 125.203 14.6439 119.3 9.02246 113.206C3.4034 107.115 0.5 100.861 0.5 94.5C0.5 88.1394 3.4034 81.8853 9.02246 75.7939C14.6439 69.7 22.9586 63.7975 33.709 58.1592C55.2092 46.883 86.3539 36.7135 124.881 28.167C201.927 11.0758 308.389 0.5 426 0.5Z"
      fill="none"
      stroke="url(#inactive_small_gradient)"
    />
    <defs>
      <linearGradient id="inactive_small_gradient" x1="434" y1="0" x2="434" y2="189" gradientUnits="userSpaceOnUse">
        <stop offset="0.2" stopColor="white" stopOpacity="0.11" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const EllipseDot = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="white"/>
  </svg>
);

const EllipseDotTop = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#1F59E0"/>
  </svg>
);

const Arrow = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2938 8.83201C21.7263 8.48861 21.7986 7.85958 21.4551 7.42704L15.859 0.378384C15.5156 -0.0541565 14.8866 -0.126415 14.4541 0.216991C14.0215 0.560396 13.9493 1.18942 14.2927 1.62196L19.267 7.88743L13.0015 12.8618C12.569 13.2052 12.4967 13.8342 12.8401 14.2667C13.1835 14.6993 13.8126 14.7715 14.2451 14.4281L21.2938 8.83201Z" fill="white"/>
  </svg>
);

const Arrow3 = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2938 8.83201C21.7263 8.48861 21.7986 7.85958 21.4551 7.42704L15.859 0.378384C15.5156 -0.0541565 14.8866 -0.126415 14.4541 0.216991C14.0215 0.560396 13.9493 1.18942 14.2927 1.62196L19.267 7.88743L13.0015 12.8618C12.569 13.2052 12.4967 13.8342 12.8401 14.2667C13.1835 14.6993 13.8126 14.7715 14.2451 14.4281L21.2938 8.83201Z" fill="#6B91EA"/>
  </svg>
);

const Arrow4 = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2938 8.83201C21.7263 8.48861 21.7986 7.85958 21.4551 7.42704L15.859 0.378384C15.5156 -0.0541565 14.8866 -0.126415 14.4541 0.216991C14.0215 0.560396 13.9493 1.18942 14.2927 1.62196L19.267 7.88743L13.0015 12.8618C12.569 13.2052 12.4967 13.8342 12.8401 14.2667C13.1835 14.6993 13.8126 14.7715 14.2451 14.4281L21.2938 8.83201Z" fill="#1F59E0"/>
  </svg>
);

const Arrow5 = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2938 8.83201C21.7263 8.48861 21.7986 7.85958 21.4551 7.42704L15.859 0.378384C15.5156 -0.0541565 14.8866 -0.126415 14.4541 0.216991C14.0215 0.560396 13.9493 1.18942 14.2927 1.62196L19.267 7.88743L13.0015 12.8618C12.569 13.2052 12.4967 13.8342 12.8401 14.2667C13.1835 14.6993 13.8126 14.7715 14.2451 14.4281L21.2938 8.83201Z" fill="#1F59E0"/>
  </svg>
);

const Arrow6 = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2938 8.83201C21.7263 8.48861 21.7986 7.85958 21.4551 7.42704L15.859 0.378384C15.5156 -0.0541565 14.8866 -0.126415 14.4541 0.216991C14.0215 0.560396 13.9493 1.18942 14.2927 1.62196L19.267 7.88743L13.0015 12.8618C12.569 13.2052 12.4967 13.8342 12.8401 14.2667C13.1835 14.6993 13.8126 14.7715 14.2451 14.4281L21.2938 8.83201Z" fill="#5E87E9"/>
  </svg>
);

export default function StepBlock() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'We start with a video meeting to understand your goals, audience, and market. Through briefing and research, we gather all the insights needed to shape a clear project vision and build a tailored strategy for success.',
      label: 'Step 1',
      meta: []
    },
    {
      id: 2,
      title: 'Design, Development & Launching',
      description: 'We turn the strategy into action — creating designs, developing the website, or launching marketing campaigns. After thorough testing and fine-tuning, your project goes live, ready to make an impact.',
      label: 'Step 2',
      meta: ['Information Architecture', 'Wireframes', 'Interactive Prototype']
    },
    {
      id: 3,
      title: 'Growth & Long-Term Support',
      description: 'Our work doesn\'t end at launch. We provide ongoing support, content updates, performance optimization, and new solutions to keep your business growing and competitive.',
      label: 'Step 3',
      meta: ['Testing', 'Launch', 'Support']
    }
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.blockNumber}>05</div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              <span className={styles.headingPart1}>Simple steps.</span>
              <span className={styles.headingLine2}>
                <span>Powerful </span>
                <span className={styles.resultsContainer}>results</span>
              </span>
            </h2>
            <p className={styles.description}>
              Great design starts with simple steps that create<br />
              powerful results. We turn clear ideas into impactful<br />
              visuals that make a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.stageSection}>
        <div className={styles.stageContent}>
          <h3 className={styles.projectStages}>Project Stages</h3>
          <div className={styles.stageList}>
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const sizeClass = step.id === 1 ? styles.stageItemSmall : step.id === 3 ? styles.stageItemMedium : styles.stageItemLarge;
              return (
                <button
                  key={step.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`${styles.stageItem} ${sizeClass} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                >
                  <div className={styles.stageLabel}>
                    <span className={`${styles.stepText} ${step.id === 1 ? styles.stepText1 : ''} ${step.id === 2 ? styles.stepText2 : ''}`}>{step.label}</span>
                  </div>
                  <div className={styles.stageEllipse}>
                    <div
                      className={`${styles.ellipseGraphic} ${
                        step.id === 1 ? styles.ellipseSmall : step.id === 3 ? styles.ellipseMedium : styles.ellipseLarge
                      }`}
                    >
                      {isActive ? (step.id === 1 ? <ActiveEllipseSmall /> : <ActiveEllipse />) : step.id === 1 ? <InactiveEllipseSmall /> : <InactiveEllipseLarge />}
                    </div>
                    <div className={styles.connectorLeft} aria-hidden="true">
                      <span className={styles.connectorLine} />
                      <span className={styles.connectorDot} />
                    </div>
                    <div className={styles.connectorRight} aria-hidden="true">
                      <span className={styles.connectorLine} />
                      <span className={styles.connectorDot} />
                    </div>
                    {step.id === 2 && (
                      <>
                        <div className={styles.ellipseDotTop}>
                          <EllipseDotTop />
                        </div>
                        <div className={styles.ellipseDotBottomLeft}>
                          <EllipseDot />
                        </div>
                        <div className={styles.ellipseDotBottomRight}>
                          <EllipseDot />
                        </div>
                        <div className={styles.ellipseArrow1}>
                          <Arrow />
                        </div>
                        <div className={styles.ellipseArrow2}>
                          <Arrow />
                        </div>
                        <div className={styles.ellipseArrow3}>
                          <Arrow3 />
                        </div>
                        <div className={styles.ellipseArrow4}>
                          <Arrow4 />
                        </div>
                        <div className={styles.ellipseArrow5}>
                          <Arrow5 />
                        </div>
                        <div className={styles.ellipseArrow6}>
                          <Arrow6 />
                        </div>
                      </>
                    )}
                    <div className={styles.stageTitle}>{step.title}</div>
                    {step.meta.length > 0 && step.id !== 3 && (
                      <>
                        {step.meta.map((item) => {
                          let metaClass = '';
                          if (item === 'Wireframes') {
                            metaClass = styles.metaWireframes;
                          } else if (item === 'Information Architecture') {
                            metaClass = styles.metaInformationArchitecture;
                          } else if (item === 'Interactive Prototype') {
                            metaClass = styles.metaInteractivePrototype;
                          }
                          return (
                            <span key={item} className={`${styles.metaItem} ${metaClass}`}>{item}</span>
                          );
                        })}
                      </>
                    )}
                    {step.id === 3 && (
                      <>
                        <span className={styles.metaTesting}>Testing</span>
                        <span className={styles.metaLaunch}>Launch</span>
                        <span className={styles.metaSupport}>Support</span>
                      </>
                    )}
                  </div>
                  <p className={`${styles.stageDescription} ${isActive ? styles.stageDescriptionActive : ''} ${step.id === 2 ? styles.stageDescription2 : ''}`}>
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
