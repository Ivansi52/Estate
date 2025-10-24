import Image from 'next/image';
import styles from '@/styles/AboutBackground.module.css';
import ballsImg from '@/images/balls.png';
import rectImg from '@/images/Rectangle 2085655824.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

export default function HeaderAbout() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.cornerText}>
          Building solutions for tomorrow
        </h1>

        <p className={styles.cornerDescription}>
          We are committed to creating innovative and reliable solutions that meet today’s needs
          while shaping a better tomorrow. Guided by expertise, driven by technology, and inspired
          by people, our company brings together experience and vision to help clients grow, adapt,
          and succeed in a rapidly changing world.
        </p>

        <div className={styles.rightBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src={ballsImg}
              alt="Balls"
              fill
              className={styles.image}
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          <div className={styles.underImageText}>
            <Image
              {...getOptimizedImageProps(rectImg, "Rectangle", 47, 45, true)}
            />
            <span className={styles.implementText}>
              Implementing innovations
            </span>
          </div>

          <div className={styles.whiteBoxes}>
            <div className={styles.whiteBox}>
              <span className={styles.whiteBoxNumber}>15+</span>
              <p className={styles.whiteBoxDescription}>Experience in countries</p>
            </div>
            <div className={styles.whiteBox}>
              <span className={styles.whiteBoxNumber}>50+</span>
              <p className={styles.whiteBoxDescription}>Ready integrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
