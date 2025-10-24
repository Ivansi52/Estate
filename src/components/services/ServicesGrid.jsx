import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ServicesGrid.module.css';
import FilterButtons from './FilterButtons';
import ServiceModal from '@/components/ServiceModal';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import figmaIcon from '@/images/Figma.png';
import arrowIcon from '@/images/Vector(2).png';

// Добавляем категории к данным услуг
const servicesData = [
  {
    id: 1,
    icon: figmaIcon,
    title: 'Design and Branding',
    categories: ['Brand Identity', 'Logo Design', 'Marketing Materials'],
    filterCategories: ['Brand building', 'Small or medium business', 'Large business'],
    description: 'We design logos, develop brand guidelines, create marketing materials, and craft packaging to build a consistent and memorable brand identity.'
  },
  {
    id: 2,
    icon: figmaIcon,
    title: 'Web Development',
    categories: ['Frontend', 'Backend', 'E-commerce'],
    filterCategories: ['Business automation', 'Boost traffic', 'Small or medium business', 'Large business'],
    description: 'We create responsive and user-friendly websites with modern technologies and optimal performance.'
  },
  {
    id: 3,
    icon: figmaIcon,
    title: 'SEO Optimization',
    categories: ['Keywords', 'Analytics', 'Content'],
    filterCategories: ['Boost traffic', 'Increase sales', 'Support and maintenance', 'Small or medium business', 'Large business'],
    description: 'We optimize websites for search engines to increase visibility and drive organic traffic.'
  },
  {
    id: 4,
    icon: figmaIcon,
    title: 'Mobile Development',
    categories: ['iOS', 'Android', 'Cross-platform'],
    filterCategories: ['Business automation', 'Small or medium business', 'Large business'],
    description: 'We develop native and cross-platform mobile applications for various business needs.'
  },
  {
    id: 5,
    icon: figmaIcon,
    title: 'Social Media Marketing',
    categories: ['Content', 'Ads', 'Analytics'],
    filterCategories: ['Brand building', 'Boost traffic', 'Increase sales', 'Small or medium business'],
    description: 'We create and manage social media campaigns to engage audiences and drive conversions.'
  },
  {
    id: 6,
    icon: figmaIcon,
    title: 'UI/UX Design',
    categories: ['Research', 'Wireframes', 'Prototyping'],
    filterCategories: ['Brand building', 'Small or medium business', 'Large business'],
    description: 'We design intuitive user interfaces and experiences that delight users and achieve business goals.'
  },
  {
    id: 7,
    icon: figmaIcon,
    title: 'Content Creation',
    categories: ['Blogs', 'Videos', 'Graphics'],
    filterCategories: ['Brand building', 'Boost traffic', 'Small or medium business'],
    description: 'We produce engaging content that tells your brand story and connects with your audience.'
  },
  {
    id: 8,
    icon: figmaIcon,
    title: 'E-commerce Solutions',
    categories: ['Platforms', 'Payment', 'Logistics'],
    filterCategories: ['Business automation', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'We build complete e-commerce ecosystems with seamless shopping experiences.'
  },
  // Новые добавленные услуги
  {
    id: 9,
    icon: figmaIcon,
    title: 'Cloud Services',
    categories: ['Hosting', 'Storage', 'Security'],
    filterCategories: ['Business automation', 'Support and maintenance', 'Large business'],
    description: 'We provide secure and scalable cloud solutions for businesses of all sizes with 24/7 support.'
  },
  {
    id: 10,
    icon: figmaIcon,
    title: 'Data Analytics',
    categories: ['BI', 'Reports', 'Dashboards'],
    filterCategories: ['Business automation', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'We transform raw data into actionable insights with powerful analytics tools and custom dashboards.'
  },
  {
    id: 11,
    icon: figmaIcon,
    title: 'Digital Strategy',
    categories: ['Planning', 'Consulting', 'Roadmaps'],
    filterCategories: ['Brand building', 'Boost traffic', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'We develop comprehensive digital strategies that align with your business goals and drive growth.'
  }
];

// Массив для определения позиции карточек
const gridLayout = [
  [true, false, true, true],    // Первая строка: слева есть, потом пусто, потом две справа
  [false, true, true, false],   // Вторая строка: по бокам пусто, в центре две
  [true, true, true, false],    // Третья строка: три слева, справа пусто
  [true, false, true, true]     // Четвертая строка: такой же как первый ряд
];

export default function ServicesGrid() {
  const [activeFilter, setActiveFilter] = useState('See all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Фильтрация услуг
  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'See all') return true;
    return service.filterCategories.includes(activeFilter);
  });

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  let cardIndex = 0;

  return (
    <div className={styles.wrapper}>
      {/* Компонент фильтров */}
      <FilterButtons 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      
      <div className={styles.container}>
        {gridLayout.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((hasCard, colIndex) => {
              if (!hasCard) {
                return <div key={`${rowIndex}-${colIndex}`} className={styles.emptyCell} />;
              }

              // Если закончились отфильтрованные услуги, показываем пустую ячейку
              if (cardIndex >= filteredServices.length) {
                return <div key={`${rowIndex}-${colIndex}`} className={styles.emptyCell} />;
              }

              const service = filteredServices[cardIndex];
              cardIndex++;

              return (
                <div 
                  key={`${rowIndex}-${colIndex}-${service.id}`} 
                  className={styles.card}
                  onClick={() => handleServiceClick(service.title)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Верхняя часть карточки */}
                  <div className={styles.cardTop}>
                    <div className={styles.iconSection}>
                      <div className={styles.iconCircle}>
                        <Image
                          {...getOptimizedImageProps(service.icon, "Service icon", 20, 30)}
                          className={styles.icon}
                        />
                      </div>
                      <h2 className={styles.title}>{service.title}</h2>
                    </div>
                    <div className={styles.arrow}>
                      <Image
                        {...getOptimizedImageProps(arrowIcon, "Arrow", 24, 24)}
                      />
                    </div>
                  </div>

                  {/* Категории */}
                  <div className={styles.categories}>
                    {service.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Описание */}
                  <p className={styles.description}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Модальное окно */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedService}
      />
    </div>
  );
}