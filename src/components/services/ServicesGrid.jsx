import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ServicesGrid.module.css';
import FilterButtons from './FilterButtons';
import ServiceModal from '@/components/ServiceModal';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import figmaIcon from '@/images/Figma.png';
import arrowIcon from '@/images/Vector(2).png';

// SVG Icon Components
const DesignBrandingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 25H20M15 25C12.2386 25 10 27.2386 10 30C10 32.7614 12.2386 35 15 35C17.7614 35 20 32.7614 20 30V25M15 25C12.2386 25 10 22.7614 10 20C10 17.2386 12.2386 15 15 15M20 25V20M15 15H20M15 15C12.2386 15 10 12.7614 10 10C10 7.23858 12.2386 5 15 5H20M20 15V20M20 15V5M20 15H25M20 20C20 22.7614 22.2386 25 25 25C27.7614 25 30 22.7614 30 20C30 17.2386 27.7614 15 25 15M20 20C20 17.2386 22.2386 15 25 15M20 5H25C27.7614 5 30 7.23858 30 10C30 12.7614 27.7614 15 25 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WebDevelopmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.9993 11.666L33.3327 19.9993L24.9993 28.3327M14.9993 28.3327L6.66602 19.9993L14.9993 11.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogoDesignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9993 13.3342L6.66602 26.6675V33.3342L13.3327 33.3341L26.666 20.0008M19.9993 13.3342L24.7804 8.55309L24.7833 8.55025C25.4414 7.89212 25.7711 7.56246 26.1511 7.43899C26.4858 7.33023 26.8464 7.33023 27.1812 7.43899C27.5609 7.56238 27.8902 7.89165 28.5474 8.54886L31.447 11.4485C32.1071 12.1085 32.4372 12.4387 32.5609 12.8193C32.6696 13.154 32.6696 13.5146 32.5608 13.8493C32.4373 14.2296 32.1076 14.5593 31.4485 15.2183L31.4471 15.2198L26.666 20.0008M19.9993 13.3342L26.666 20.0008" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SEOPromotionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3334 11.666L23.5898 21.5618C23.4149 21.7396 23.3264 21.8286 23.248 21.8987C21.9824 23.0315 20.0687 23.0316 18.8031 21.8988C18.7247 21.8286 18.6356 21.7397 18.4605 21.5618C18.2854 21.384 18.1978 21.2951 18.1195 21.2249C16.8539 20.0921 14.9393 20.0921 13.6737 21.2249C13.5955 21.2949 13.5082 21.3836 13.334 21.5605L6.66602 28.3327M33.3334 11.666L33.3327 21.666M33.3334 11.666H23.3327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContextualAdvertisingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.2083 29.375C25.2083 27.3039 22.8765 25.625 20 25.625C17.1235 25.625 14.7917 27.3039 14.7917 29.375M29.375 25.6255C29.375 24.0877 28.0895 22.7662 26.25 22.1875M10.625 25.6255C10.625 24.0877 11.9105 22.7662 13.75 22.1875M26.25 17.1701C26.8893 16.4835 27.2917 15.4856 27.2917 14.375C27.2917 12.3039 25.8926 10.625 24.1667 10.625C23.3663 10.625 22.6362 10.9861 22.0833 11.5799M13.75 17.1701C13.1107 16.4835 12.7083 15.4856 12.7083 14.375C12.7083 12.3039 14.1074 10.625 15.8333 10.625C16.6337 10.625 17.3638 10.9861 17.9167 11.5799M20 21.875C18.2741 21.875 16.875 20.1961 16.875 18.125C16.875 16.0539 18.2741 14.375 20 14.375C21.7259 14.375 23.125 16.0539 23.125 18.125C23.125 20.1961 21.7259 21.875 20 21.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SMMPromotionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5639 23.4819C16.8248 23.1532 21.0006 18.2503 21.0006 12.2499C21.0006 6.03675 16.5233 1 11.0003 1C5.47729 1 1 6.03675 1 12.2499C1 14.4637 1.56825 16.528 2.54986 18.2685L1.84312 20.6537L1.842 20.6572C1.57131 21.5707 1.43591 22.0277 1.53232 22.3318C1.61634 22.5969 1.80283 22.8058 2.03844 22.9003C2.30791 23.0084 2.71129 22.8572 3.51789 22.5547L3.52937 22.5508L5.6502 21.7557C7.19736 22.86 9.0325 23.4994 11.0004 23.4994C11.1895 23.4994 11.3774 23.4935 11.5639 23.4819ZM11.5639 23.4819V23.4819ZM11.5639 23.4819C12.9321 27.8608 16.6406 31 21.0008 31C22.9687 31 24.8035 30.36 26.3505 29.2557L28.4709 30.0507L28.475 30.0516C29.287 30.3561 29.6939 30.5087 29.9643 30.4002C30.1999 30.3057 30.384 30.0968 30.468 29.8317C30.5646 29.5271 30.4295 29.0696 30.1581 28.1536L29.4514 25.7684L29.6881 25.3272C30.5239 23.6834 31 21.7791 31 19.7498C31 13.5367 26.5236 8.49993 21.0006 8.49993L20.6262 8.50769L20.4374 8.51807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AmoCRMIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6673 21.6673L31.6673 26.6673M31.6673 26.6673L26.6673 31.6673M31.6673 26.6673H8.33398M13.334 18.334L8.33398 13.334M8.33398 13.334L13.334 8.33398M8.33398 13.334H31.6673" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SERMIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25.001V28.0007C5 29.8675 5 30.8003 5.36331 31.5133C5.68289 32.1405 6.19245 32.6515 6.81966 32.971C7.532 33.334 8.46499 33.334 10.3282 33.334H35.0003M5 25.001V8.33398M5 25.001L11.4223 19.6491L11.4276 19.6448C12.5894 18.6767 13.1715 18.1916 13.8026 17.9946C14.5481 17.7619 15.3512 17.7987 16.0726 18.098C16.6842 18.3517 17.2204 18.8879 18.2929 19.9605L18.3037 19.9712C19.3929 21.0604 19.9389 21.6064 20.5603 21.8596C21.2956 22.1591 22.1142 22.1849 22.8678 21.9349C23.5068 21.723 24.0903 21.2132 25.2572 20.1923L34.9999 11.6673" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TechnicalSupportIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.6676 35.1271L31.7681 29.873C32.7395 29.3121 33.2243 29.0316 33.5776 28.6392C33.8901 28.2921 34.1265 27.8832 34.2708 27.439C34.4336 26.938 34.4336 26.3782 34.4336 25.2617V14.7381C34.4336 13.6216 34.4336 13.0619 34.2708 12.561C34.1265 12.1167 33.8901 11.7075 33.5776 11.3603C33.2258 10.9697 32.7421 10.6904 31.779 10.1344L22.666 4.87297C21.6945 4.31209 21.2098 4.03222 20.6934 3.92245C20.2364 3.82533 19.764 3.82533 19.3071 3.92245C18.7907 4.03222 18.3043 4.31209 17.3328 4.87297L8.23072 10.1281C7.26038 10.6883 6.77559 10.9682 6.42253 11.3603C6.10996 11.7075 5.8739 12.1167 5.72955 12.561C5.56641 13.0631 5.56641 13.6243 5.56641 14.746V25.2543C5.56641 26.376 5.56641 26.9368 5.72955 27.439C5.8739 27.8832 6.10996 28.2921 6.42253 28.6392C6.77579 29.0316 7.26094 29.3121 8.23242 29.873L17.3328 35.1271C18.3043 35.688 18.7907 35.968 19.3071 36.0778C19.764 36.1749 20.2364 36.1749 20.6934 36.0777C21.2098 35.968 21.6962 35.688 22.6676 35.1271Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 19.9999C15 22.7613 17.2386 24.9999 20 24.9999C22.7614 24.9999 25 22.7613 25 19.9999C25 17.2385 22.7614 14.9999 20 14.9999C17.2386 14.9999 15 17.2385 15 19.9999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MobileAppsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3333 11.6667H29.7477C28.9185 11.6667 28.3333 10.8292 28.3333 10C28.3333 7.23858 26.0948 5 23.3333 5C20.5719 5 18.3333 7.23858 18.3333 10C18.3333 10.8292 17.7481 11.6667 16.9189 11.6667H13.3333C12.4129 11.6667 11.6667 12.4129 11.6667 13.3333V16.9189C11.6667 17.7481 10.8292 18.3333 10 18.3333C7.23858 18.3333 5 20.5719 5 23.3333C5 26.0948 7.23858 28.3333 10 28.3333C10.8292 28.3333 11.6667 28.9185 11.6667 29.7477V33.3333C11.6667 34.2538 12.4129 35 13.3333 35L33.3333 35.0001C34.2538 35.0001 35 34.2538 35 33.3333V29.7477C35 28.9185 34.1625 28.3333 33.3333 28.3333C30.5719 28.3333 28.3333 26.0948 28.3333 23.3333C28.3333 20.5719 30.5719 18.3333 33.3333 18.3333C34.1625 18.3333 35 17.7481 35 16.9189L35.0001 13.3333C35.0001 12.4129 34.2538 11.6667 33.3333 11.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FreeAuditIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99935 18.3337V10.3337C9.99935 8.46682 9.99935 7.5327 10.3627 6.81966C10.6822 6.19245 11.1918 5.68289 11.819 5.36331C12.532 5 13.4662 5 15.333 5H22.7905C22.9948 5 23.1735 5 23.3327 5.00145M33.3311 15C33.3326 15.1593 33.3327 15.3383 33.3327 15.5428V29.6726C33.3327 31.5358 33.3327 32.4675 32.9697 33.1798C32.6501 33.807 32.1392 34.3175 31.512 34.637C30.7997 35 29.8677 35 28.0044 35L21.666 35M33.3311 15C33.3266 14.5242 33.3089 14.2229 33.2399 13.9355C33.1583 13.5954 33.023 13.2702 32.8403 12.972C32.6341 12.6356 32.3475 12.3481 31.771 11.7716L26.5618 6.5625C25.9857 5.98636 25.697 5.69761 25.3607 5.49154C25.0624 5.30877 24.7375 5.17376 24.3974 5.0921C24.1099 5.02308 23.8087 5.00578 23.3327 5.00145M33.3311 15H33.333M33.3311 15H28.6609C26.7977 15 25.8647 15 25.1523 14.637C24.5251 14.3175 24.0156 13.8065 23.696 13.1793C23.3327 12.4663 23.3327 11.5335 23.3327 9.66667V5.00145M14.9993 23.3333L18.3327 26.6667M6.66602 35V30.8333L19.166 18.3333L23.3327 22.5L10.8327 35H6.66602Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Добавляем категории к данным услуг
const servicesData = [
  {
    id: 1,
    icon: figmaIcon,
    iconComponent: DesignBrandingIcon,
    title: 'Design and Branding',
    categories: ['Brand Identity', 'Logo Design', 'Marketing Materials'],
    filterCategories: ['Brand building', 'Small or medium business', 'Large business'],
    description: 'We design logos, develop brand guidelines, create marketing materials, and craft packaging to build a consistent and memorable brand identity.'
  },
  {
    id: 2,
    icon: figmaIcon,
    iconComponent: WebDevelopmentIcon,
    title: 'Web Development',
    categories: ['Frontend', 'Backend', 'E-commerce'],
    filterCategories: ['Business automation', 'Boost traffic', 'Small or medium business', 'Large business'],
    description: 'We design and build responsive, user-friendly websites tailored to your business needs, ensuring fast performance and seamless functionality.'
  },
  {
    id: 3,
    icon: figmaIcon,
    iconComponent: LogoDesignIcon,
    title: 'Logo Design',
    categories: ['Keywords', 'Analytics', 'Content'],
    filterCategories: ['Boost traffic', 'Increase sales', 'Support and maintenance', 'Small or medium business', 'Large business'],
    description: 'We create unique and memorable logos that reflect your brand’s identity. We create unique and memorable logos that reflect your brand’s identity.'
  },
  {
    id: 4,
    icon: figmaIcon,
    iconComponent: SEOPromotionIcon,
    title: 'SEO Promotion',
    categories: ['iOS', 'Android', 'Cross-platform'],
    filterCategories: ['Business automation', 'Small or medium business', 'Large business'],
    description: 'We optimize your website to improve search engine rankings, increase organic traffic, and boost online visibility through keyword research, on-page and off-page SEO'
  },
  {
    id: 5,
    icon: figmaIcon,
    iconComponent: ContextualAdvertisingIcon,
    title: 'Contextual Advertising',
    categories: ['Content', 'Ads', 'Analytics'],
    filterCategories: ['Brand building', 'Boost traffic', 'Increase sales', 'Small or medium business'],
    description: 'We create and manage targeted ad campaigns that appear on relevant websites and platforms, driving qualified traffic and increasing conversions.'
  },
  {
    id: 6,
    icon: figmaIcon,
    iconComponent: SMMPromotionIcon,
    title: 'SMM Promotion',
    categories: ['Research', 'Wireframes', 'Prototyping'],
    filterCategories: ['Brand building', 'Small or medium business', 'Large business'],
    description: 'We create and manage social media campaigns to grow your audience, boost engagement, and increase brand awareness across platforms.'
  },
  {
    id: 7,
    icon: figmaIcon,
    iconComponent: AmoCRMIcon,
    title: 'amoCRM',
    categories: ['Blogs', 'Videos', 'Graphics'],
    filterCategories: ['Brand building', 'Boost traffic', 'Small or medium business'],
    description: 'We set up and customize amoCRM to streamline your sales process, automate workflows, and improve customer relationship management.'
  },
  {
    id: 8,
    icon: figmaIcon,
    iconComponent: SERMIcon,
    title: 'SERM',
    categories: ['Platforms', 'Payment', 'Logistics'],
    filterCategories: ['Business automation', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'We help build and maintain a positive online reputation for your business. We help build and maintain a positive online reputation for your business.'
  },
  // Новые добавленные услуги
  {
    id: 9,
    icon: figmaIcon,
    iconComponent: TechnicalSupportIcon,
    title: 'Technical Support',
    categories: ['Hosting', 'Storage', 'Security'],
    filterCategories: ['Business automation', 'Support and maintenance', 'Large business'],
    description: 'We provide ongoing maintenance, troubleshooting, and technical assistance to ensure your systems and websites run smoothly and securely.'
  },
  {
    id: 10,
    icon: figmaIcon,
    iconComponent: MobileAppsIcon,
    title: 'Mobile Apps ',
    categories: ['BI', 'Reports', 'Dashboards'],
    filterCategories: ['Business automation', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'We develop custom mobile applications and intelligent bots to enhance user engagement, automate tasks, and improve customer interaction.'
  },
  {
    id: 11,
    icon: figmaIcon,
    iconComponent: FreeAuditIcon,
    title: 'Free Audit',
    categories: ['Planning', 'Consulting', 'Roadmaps'],
    filterCategories: ['Brand building', 'Boost traffic', 'Increase sales', 'Small or medium business', 'Large business'],
    description: 'Get a comprehensive analysis of your current digital presence at no cost. Get a comprehensive analysis of your current digital presence at no cost.'
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
                        {service.iconComponent ? (
                          <div className={styles.svgWrapper}>
                            <service.iconComponent />
                          </div>
                        ) : (
                        <Image
                          {...getOptimizedImageProps(service.icon, "Service icon", 20, 30)}
                          className={styles.icon}
                        />
                        )}
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
                    <br />
                    <Link 
                      href="/projects" 
                      className={styles.viewPortfolioLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View our portfolio →
                    </Link>
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