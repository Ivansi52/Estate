import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import FeedBack from "@/components/FeedBack";
import GoogleMap from "@/components/GoogleMap";
import StructuredDataContact from "@/components/SEO/StructuredDataContact";
import styles from "@/styles/Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch with 2Clients Digital Agency</title>
        <meta name="description" content="Contact 2Clients digital marketing agency for web development, SEO, and digital strategy consultation. Multiple office locations across Poland. Get in touch today!" />
        <meta name="keywords" content="contact 2clients, digital marketing consultation, web development contact, SEO services contact, digital agency contact, office locations" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/contacts" />
        <meta property="og:title" content="Contact Us - 2Clients Digital Agency" />
        <meta property="og:description" content="Contact 2Clients digital marketing agency for consultation and project inquiries." />
        <meta property="og:image" content="https://2clients.com/contacts-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/contacts" />
        <meta name="twitter:title" content="Contact Us - 2Clients Digital Agency" />
        <meta name="twitter:description" content="Contact 2Clients digital marketing agency for consultation and project inquiries." />
        <meta name="twitter:image" content="https://2clients.com/contacts-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/contacts" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
      </Head>
      
      <StructuredDataContact />
      
      {/* Hero Section with Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <Header />
          
          <div className={styles.heroContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/" className={styles.home}>Homepage</Link>
              <span className={styles.arrow}>›</span>
              <span className={styles.current}>Contacts</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.contactText}>CONTACT</span>
              <span className={styles.usCircle}>US</span>
            </h1>
            
            <a href="#" className={styles.downloadLink}>Download Company Presentation</a>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.contactInfo}>
              <p className={styles.address}>Adresse: ul. Nezavisimosti 25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className={styles.officesSection}>
        <div className={styles.container}>
          <div className={styles.officesContent}>
            <div className={styles.officesInfo}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.officesInfoContent}>
                <h2 className={styles.sectionTitle}>
                  Your next big idea
                  <br />
                  <span className={styles.highlightedWord}>starts</span> here
                </h2>
                <p className={styles.sectionDescription}>
                  Got an idea, a project, or just a question? We'd love
                  <br />
                  to hear from you. Reach out and let's turn your vision
                  <br />
                  into design that inspires.
                </p>
                <button className={styles.scheduleButton}>
                  <span>Schedule a video call</span>
                  <div className={styles.arrowIcon}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
                      <path d="M14.25 23.6248V21.5415H26.75L21.0208 15.8123L22.5 14.3331L30.75 22.5831L22.5 30.8331L21.0208 29.354L26.75 23.6248H14.25Z" fill="#01203F"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
          </div>
          
            <div className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <GoogleMap />
              </div>
            </div>
        </div>
      </section>

      <FeedBack />
    </>
  );
}
