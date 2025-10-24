import Head from "next/head";
import FeedBack from "@/components/FeedBack";
import styles from "@/styles/Prices.module.css";

export default function Prices() {
  return (
    <>
      <Head>
        <title>Pricing - Web Development Services</title>
        <meta name="description" content="Transparent pricing for our web development services and packages" />
      </Head>
      <main>
        <section className={styles.pricesHero}>
          <div className={styles.container}>
            <div className={styles.breadcrumbs}>
              <span className={styles.home}>Homepage</span>
              <span className={styles.arrow}>{'>'}</span>
              <span className={styles.current}>Pricing</span>
            </div>
            
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.pricingText}>PRICING</span>
                <span className={styles.plansCircle}>PLANS</span>
              </h1>
              <p className={styles.heroDescription}>
                Choose the perfect package for your web development needs
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.pricingSection}>
          <div className={styles.container}>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3>Basic</h3>
                  <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>2,999</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  <li>5-10 pages website</li>
                  <li>Responsive design</li>
                  <li>Basic SEO optimization</li>
                  <li>Contact form</li>
                  <li>1 month support</li>
                </ul>
                <button className={styles.ctaButton}>Get Started</button>
              </div>
              
              <div className={`${styles.pricingCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.cardHeader}>
                  <h3>Professional</h3>
                  <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>5,999</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  <li>10-20 pages website</li>
                  <li>Advanced responsive design</li>
                  <li>Full SEO optimization</li>
                  <li>CMS integration</li>
                  <li>E-commerce functionality</li>
                  <li>3 months support</li>
                </ul>
                <button className={styles.ctaButton}>Get Started</button>
              </div>
              
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3>Enterprise</h3>
                  <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>9,999</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  <li>Unlimited pages</li>
                  <li>Custom design & development</li>
                  <li>Advanced SEO & analytics</li>
                  <li>Custom CMS</li>
                  <li>Advanced e-commerce</li>
                  <li>API integrations</li>
                  <li>6 months support</li>
                </ul>
                <button className={styles.ctaButton}>Get Started</button>
              </div>
            </div>
          </div>
        </section>
        
        <FeedBack />
      </main>
    </>
  );
}
