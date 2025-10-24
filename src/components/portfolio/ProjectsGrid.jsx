import React from 'react';
import styles from '@/styles/ProjectCards.module.css';
import forestHomeIcon from '@/images/forest_home.png';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

const projects = [
  {
    id: 1,
    title: 'Construction Company',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: forestHomeIcon,
  },
  {
    id: 2,
    title: 'Design Studio',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: forestHomeIcon,
  },
  {
    id: 3,
    title: 'Creative Agency',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: forestHomeIcon,
  },
  {
    id: 4,
    title: 'Interior Design',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: forestHomeIcon,
  },
  {
    id: 5,
    title: 'Construction Company',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: forestHomeIcon,
  },
  {
    id: 6,
    title: 'Design Studio',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: forestHomeIcon,
  },
  {
    id: 7,
    title: 'Creative Agency',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: forestHomeIcon,
  },
  {
    id: 8,
    title: 'Interior Design',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: forestHomeIcon,
  },
  {
    id: 9,
    title: 'Construction Company',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: forestHomeIcon,
  },
  {
    id: 10,
    title: 'Design Studio',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: forestHomeIcon,
  },
  {
    id: 11,
    title: 'Creative Agency',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: forestHomeIcon,
  },
  {
    id: 12,
    title: 'Interior Design',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: forestHomeIcon,
  },
];

const ProjectCards = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <div className={styles.card} key={project.id}>
          <div className={styles.categories}>
            {project.categories.map((cat, index) => (
              <span className={styles.category} key={index}>
                {cat}
              </span>
            ))}
          </div>

          <h3 className={styles.description}>{project.description}</h3>

          <div className={styles.bottomBlock}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.imageContainer}>
              <Image {...getOptimizedImageProps(project.image, project.title, 0, 0)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
