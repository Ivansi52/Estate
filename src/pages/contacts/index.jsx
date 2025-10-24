import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import FeedBack from "@/components/FeedBack";
import GoogleMap from "@/components/GoogleMap";
import styles from "@/styles/Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch</title>
        <meta name="description" content="Contact our web development team for consultation and project inquiries" />
      </Head>
      
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
                    →
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
