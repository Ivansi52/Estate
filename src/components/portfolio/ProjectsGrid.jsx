import React from 'react';
import styles from '@/styles/ProjectCards.module.css';
import forestHomeIcon from '@/images/forest_home.png';
import Image from 'next/image';
import { getOptimizedImageProps } from '@/utils/imageOptimization';
const car = '/images/car.service.png'
const construction = '/images/construction.service.png'
const drone = '/images/drone.service.png'
const estate = '/images/estate.service.png'
const interior = '/images/interior.service.png'
const real = '/images/real.service.png'
const residental = '/images/residental.service.png'
const sofa = '/images/sofa.service.jpg'
const teeth = '/images/teeth.service.jpg'
const watches = '/images/watches.service.png'

const projects = [
  {
    id: 1,
    title: 'Construction Company',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: construction,
  },
  {
    id: 2,
    title: 'Real Estate Agency',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: estate,
  },
  {
    id: 3,
    title: 'Premium Electro Cars',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: car,
  },
  {
    id: 4,
    title: 'Interior Design Studio',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: interior,
  },
  {
    id: 5,
    title: 'Luxury Marketplace',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: watches,
  },
  {
    id: 6,
    title: 'Residential Complex',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: residental,
  },
  {
    id: 7,
    title: 'Dron Piloting School',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: drone,
  },
  {
    id: 8,
    title: 'Real Estate Agency',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: real,
  },
  {
    id: 9,
    title: 'Couch Design Studio',
    description: 'We design logos, develop brand guidelines, create marketing materials',
    categories: ['Experience', 'Experience'],
    image: sofa,
  },
  {
    id: 10,
    title: 'Teeth Clinic',
    description: 'We build portfolios and unique landing pages.',
    categories: ['Branding', 'UI/UX'],
    image: teeth,
  },
  {
    id: 11,
    title: 'Creative Agency',
    description: 'Marketing campaigns and motion design.',
    categories: ['Marketing'],
    image: construction,
    backgroundImage: '/images/construction.service.png',
  },
  {
    id: 12,
    title: 'Interior Design',
    description: 'Interior mockups and photorealistic renders.',
    categories: ['3D', 'Visual'],
    image: construction,
    backgroundImage: '/images/construction.service.png',
  },
];

const ProjectCards = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <div 
          className={styles.card} 
          key={project.id}
          style={{'--hover-bg-image': `url(${project.backgroundImage || project.image})`}}
        >
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
              <Image 
                {...getOptimizedImageProps(project.image, project.title, 300, 200)} 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
