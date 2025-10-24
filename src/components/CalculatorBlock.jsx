import Image from 'next/image';
import styles from '@/styles/CalculatorBlock.module.css';
import CalculatorImage from '@/images/4_objects.png';

export default function CalculatorBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.mainHeading}>
            Not sure where to start? Try the <span className={styles.highlight}>calculator.</span>
          </h1>
          <h2 className={styles.subHeading}>We help you!</h2>
          <p className={styles.description}>
            Answer a few questions — and instantly see a cost estimate based on your needs.
          </p>
          <p className={styles.note}>
            Get a Free Consultation with a Developer and SEO Specialist after the Estimate
          </p>
          <button className={styles.button}>
            FIND OUT THE COSTS
            <span className={styles.arrowCircle}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={CalculatorImage} alt="Calculator illustration" width={675} height={790} />
        </div>
      </div>
    </section>
  );
}
