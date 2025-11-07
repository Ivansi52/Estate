import Head from "next/head";
import FeedBack from "@/components/FeedBack";
import styles from "@/styles/Prices.module.css";

export default function Prices() {
  return (
    <>
      <Head>
        <title>Pricing Plans - Web Development Services & Packages | 2Clients</title>
        <meta name="description" content="Transparent pricing for web development services, e-commerce solutions, and digital marketing packages. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="web development pricing, digital marketing packages, e-commerce pricing, website development costs, digital agency pricing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/prices" />
        <meta property="og:title" content="Pricing Plans - Web Development Services | 2Clients" />
        <meta property="og:description" content="Transparent pricing for web development services and digital marketing packages." />
        <meta property="og:image" content="https://2clients.com/prices-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/prices" />
        <meta name="twitter:title" content="Pricing Plans - Web Development Services | 2Clients" />
        <meta name="twitter:description" content="Transparent pricing for web development services and digital marketing packages." />
        <meta name="twitter:image" content="https://2clients.com/prices-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/prices" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
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
