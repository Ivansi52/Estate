import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ProjectStages.module.css';
import projectStagesImg from '@/images/project_stages.png';

export default function StepBlock() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'We start with a video meeting to understand your goals, audience, and market. Through briefing and research, we gather all the insights needed to shape a clear project vision and build a tailored strategy for success.',
      label: 'Step 1'
    },
    {
      id: 2,
      title: 'Design, Development & Launching',
      description: 'We turn the strategy into action — creating designs, developing the website, or launching marketing campaigns. After thorough testing and fine-tuning, your project goes live, ready to make an impact.',
      label: 'Step 2'
    },
    {
      id: 3,
      title: 'Growth & Long-Term Support',
      description: 'Our work doesn\'t end at launch. We provide ongoing support, content updates, performance optimization, and new solutions to keep your business growing and competitive.',
      label: 'Step 3'
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.blockNumber}>05</div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Simple steps. Powerful <span className={styles.highlight}>results</span>
            </h2>
            <p className={styles.description}>
              Great design starts with simple steps that create powerful results. We turn clear ideas into impactful visuals that make a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.backgroundBlock}>
        <div className={styles.imageWrapper}>
          <Image
            src={projectStagesImg}
            alt="Project Stages"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Интерактивные точки слева */}
          <div className={styles.stepLabels}>
            {steps.map((step) => (
              <button
                key={step.id}
                className={`${styles.step} ${activeStep === step.id ? styles.active : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Динамический текст справа */}
          <div className={styles.stepDescriptions}>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{currentStep.title}</h3>
              <p className={styles.descriptionText}>
                {currentStep.description}
              </p>
            </div>
          </div>
          <p className={styles.wireframes}>Wireframes</p>
        <p className={styles.testing}>Testing</p>
        <p className={styles.prototype}>Interactive Prototype</p>
        <p className={styles.launch}>Launch</p>

        </div>

        {/* Текст по центру */}
        <div className={styles.textOverlay}>
          <h2 className={styles.projectStages}>Project Stages</h2>
          <h3 className={styles.discovery}>Discovery & Strategy</h3>
          <p className={styles.information}>Information Architecture</p>
          <h3 className={styles.design}>Design, Development & Launching</h3>
          <h3 className={styles.growth}>Growth & Long-Term Support</h3>
          <p className={styles.support}>Support</p>
        </div>
      </div>
    </>
  );
}
