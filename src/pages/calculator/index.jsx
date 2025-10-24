import Head from "next/head";
import CalculatorBlock from "@/components/CalculatorBlock";
import FeedBack from "@/components/FeedBack";
import styles from "@/styles/Calculator.module.css";

export default function Calculator() {
  return (
    <>
      <Head>
        <title>Calculator - Web Development Cost Estimator</title>
        <meta name="description" content="Calculate the cost of your web development project with our free calculator" />
      </Head>
      <main>
        <section className={styles.calculatorHero}>
          <div className={styles.container}>
            <div className={styles.breadcrumbs}>
              <span className={styles.home}>Homepage</span>
              <span className={styles.arrow}>{'>'}</span>
              <span className={styles.current}>Calculator</span>
            </div>
            
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.calculatorText}>CALCULATOR</span>
                <span className={styles.costCircle}>COST</span>
              </h1>
              <p className={styles.heroDescription}>
                Get an instant estimate for your project
              </p>
            </div>
          </div>
        </section>
        
        <CalculatorBlock />
        <FeedBack />
      </main>
    </>
  );
}
