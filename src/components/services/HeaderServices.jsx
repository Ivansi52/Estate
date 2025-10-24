import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/HeaderServices.module.css';
import Icon172 from '@/images/172.png';
import RectangaleIcon from '@/images/Rectangle 2085655824.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

const HeaderServices = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Services for business growth in one place
          </h1>
          
          <p className={styles.description}>
            We offer a full range of professional services tailored to help your 
            business grow, stand out, and succeed in a competitive market. 
            Let's build something great together.
          </p>

          <div className={styles.innovation}>
            <Image
              {...getOptimizedImageProps(RectangaleIcon, "Innovation", 45, 45)}
              className={styles.innovationImage}
            />
            <span className={styles.innovationText}>
              Implementing innovations
            </span>
          </div>

          <nav className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Homepage
            </Link>
            <span className={styles.breadcrumbSeparator}> </span> 
            <span className={styles.breadcrumbCurrent}>&gt;
              Services
            </span>
          </nav>
        </div>

        <div className={styles.imageContainer}>
          <Image
            {...getOptimizedImageProps(Icon172, "Business growth", 680, 680, true)}
            className={styles.mainImage}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderServices;