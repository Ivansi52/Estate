import Head from "next/head";
import CalculatorBlock from "@/components/CalculatorBlock";
import FeedBack from "@/components/FeedBack";
import styles from "@/styles/Calculator.module.css";

export default function Calculator() {
  return (
    <>
      <Head>
        <title>Web Development Cost Calculator - Free Project Estimate | 2Clients</title>
        <meta name="description" content="Get an instant estimate for your web development project with our free cost calculator. Calculate pricing for websites, e-commerce, and digital solutions." />
        <meta name="keywords" content="web development calculator, project cost estimator, website pricing calculator, e-commerce cost calculator, digital project estimate" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/calculator" />
        <meta property="og:title" content="Web Development Cost Calculator - 2Clients" />
        <meta property="og:description" content="Get an instant estimate for your web development project with our free calculator." />
        <meta property="og:image" content="https://2clients.com/calculator-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/calculator" />
        <meta name="twitter:title" content="Web Development Cost Calculator - 2Clients" />
        <meta name="twitter:description" content="Get an instant estimate for your web development project with our free calculator." />
        <meta name="twitter:image" content="https://2clients.com/calculator-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/calculator" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
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
