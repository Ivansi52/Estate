import styles from '@/styles/FilterBar.module.css';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

// SVG иконки для фильтров
const WebsiteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9995 6.99963L19.9995 11.9996L14.9995 16.9996M8.99951 16.9996L3.99951 11.9996L8.99951 6.99963" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SEOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6.99963L14.1538 12.9371C14.0488 13.0438 13.9957 13.0972 13.9487 13.1393C13.1894 13.8189 12.0411 13.819 11.2817 13.1393C11.2347 13.0972 11.1812 13.0438 11.0762 12.9371C10.9711 12.8304 10.9186 12.7771 10.8716 12.735C10.1122 12.0553 8.96348 12.0553 8.20412 12.735C8.15722 12.777 8.10483 12.8302 8.00029 12.9363L3.99951 16.9996M20 6.99963L19.9995 12.9996M20 6.99963H13.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SMMIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.38407 12.7403C9.18987 12.565 11.417 9.95016 11.417 6.74994C11.417 3.43627 9.0291 0.75 6.08349 0.75C3.13789 0.75 0.75 3.43627 0.75 6.74994C0.75 7.93064 1.05306 9.03162 1.57659 9.95987L1.19967 11.2319L1.19907 11.2338C1.0547 11.721 0.982483 11.9648 1.03391 12.127C1.07871 12.2683 1.17818 12.3798 1.30384 12.4302C1.44755 12.4878 1.66269 12.4072 2.09288 12.2458L2.099 12.2437L3.23011 11.8197C4.05526 12.4087 5.034 12.7497 6.08355 12.7497C6.1844 12.7497 6.2846 12.7466 6.38407 12.7403ZM6.38407 12.7403V12.7403ZM6.38407 12.7403C7.11381 15.0758 9.09167 16.75 11.4171 16.75C12.4667 16.75 13.4452 16.4087 14.2703 15.8197L15.4011 16.2437L15.4033 16.2442C15.8364 16.4066 16.0534 16.488 16.1976 16.4301C16.3233 16.3797 16.4215 16.2683 16.4663 16.1269C16.5178 15.9645 16.4458 15.7205 16.301 15.2319L15.9241 13.9598L16.0503 13.7245C16.4961 12.8478 16.75 11.8322 16.75 10.7499C16.75 7.43624 14.3626 4.74996 11.417 4.74996L11.2173 4.7541L11.1166 4.75964" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MobileAppsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6666 5.83333H14.8739C14.4593 5.83333 14.1667 5.41459 14.1667 5C14.1667 3.61929 13.0474 2.5 11.6667 2.5C10.286 2.5 9.16667 3.61929 9.16667 5C9.16667 5.41459 8.87404 5.83333 8.45945 5.83333H6.66667C6.20643 5.83333 5.83333 6.20643 5.83333 6.66667V8.45945C5.83333 8.87404 5.41459 9.16667 5 9.16667C3.61929 9.16667 2.5 10.286 2.5 11.6667C2.5 13.0474 3.61929 14.1667 5 14.1667C5.41459 14.1667 5.83333 14.4593 5.83333 14.8739V16.6667C5.83333 17.1269 6.20643 17.5 6.66667 17.5L16.6667 17.5C17.1269 17.5 17.5 17.1269 17.5 16.6666V14.8739C17.5 14.4593 17.0813 14.1667 16.6667 14.1667C15.286 14.1667 14.1667 13.0474 14.1667 11.6667C14.1667 10.286 15.286 9.16667 16.6667 9.16667C17.0813 9.16667 17.5 8.87404 17.5 8.45945L17.5 6.66667C17.5 6.20643 17.1269 5.83333 16.6666 5.83333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M9 15C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9M12 15V12M9 9H12M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V12M12 9V3M12 9H15M12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9M12 12C12 10.3431 13.3431 9 15 9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const horizontalFilters = [
  { id: 'website', label: 'Website', icon: WebsiteIcon },
  { id: 'seo', label: 'SEO', icon: SEOIcon },
  { id: 'smm', label: 'SMM', icon: SMMIcon },
  { id: 'mobile', label: 'Mobile Apps', icon: MobileAppsIcon },
  { id: 'design', label: 'Design', icon: DesignIcon }
];

const comingSoonOptions = {
  'all-types': [
    'Web portal (Online portal)',
    'Blog',
    'Mobile website',
    'Advanced website',
    'Affordable website',
    'Website template',
    'Premium website',
    'Forum website'
  ],
  'cms-framework': [
    'MODX',
    'Joomla',
    'OpenCart',
    'WooCommerce',
    'Drupal',
    'NetCat',
    'Shopify',
    'Wix',
    'Webflow',
    'CS-Cart'
  ],
  'framework-development': [
    'Development with React',
    'Development with Vue.js',
    'Development with Angular',
    'Development with Yii',
    'Development with Laravel',
    'Development with Django',
    'Development with NestJS',
    'Development with Next.js',
    'Development with .NET'
  ],
  'technical-specifications': [
    'Cart / Checkout',
    'Shipping / Delivery',
    'Multilingual',
    'Site search & filters',
    'Wishlist & compare',
    'Discounts / Coupons / Promo codes',
    'Map & locations (Google Maps / Yandex Maps)',
    'CMS migration',
    'Forms / Contact'
  ],
  'full-automation': [
    'Meeting transcription',
    'Accounting / ERP / Inventory',
    'CRM marketing',
    'Live chat',
    'Email & marketing automation',
    'Project & HR automation'
  ]
};

const filterCategories = [
  {
    id: 'all-types',
    label: 'All types',
    options: [
      'Enterprise website',
      'E-commerce (Online store)',
      'One page (Single page)',
      'Multipage',
      'Turnkey (Full cycle)',
      'Promo website (Promotional)',
      'Business website',
      'Services website',
      'Catalog website',
      'Marketplace',
      'Affiliate website',
      'Personal website'
    ]
  },
  {
    id: 'cms-framework',
    label: 'CMS and Framework',
    options: [
      'Tilda',
      'WordPress',
      '1C-Bitrix'
    ]
  },
  {
    id: 'framework-development',
    label: 'Framework development',
    options: [
      'Development with Node.js'
    ]
  },
  {
    id: 'design-style',
    label: 'Design style',
    options: [
      'Template',
      'Custom',
      'Corporate',
      'Modern',
      'Premium',
      'Minimalist'
    ]
  },
  {
    id: 'technical-specifications',
    label: 'Technical specifications',
    options: [
      'Basic SEO optimization',
      'Ads setup & management',
      'Booking',
      'Blog',
      'Product catalog',
      'Client portal',
      'Reviews & rating',
      'Online payments / Acquiring'
    ]
  },
  {
    id: 'full-automation',
    label: 'Full automation',
    options: [
      'CRM implementation & support',
      'Chatbot development',
      'AI agents for business',
      'API integration',
      'Call tracking'
    ]
  },
  {
    id: 'industries',
    label: 'Industries',
    options: [
      'Automotive websites',
      'Real estate agency websites',
      'Hotel websites',
      'Medical websites',
      'Construction company website',
      'Online school websites',
      'Legal services websites',
      'Medical clinic websites',
      'Dental clinic websites',
      'Restaurant websites',
      'Beauty salon websites'
    ]
  },
  {
    id: 'cost-website',
    label: 'Cost of a website',
    options: [
      'Budget website',
      'Standard website',
      'Premium website',
      'Individual website'
    ]
  },
  {
    id: 'build-time',
    label: 'Build time',
    options: [
      'Urgent website',
      'Standard website',
      'Long-term website',
      'Quick website',
      'Ready-made solution',
      'Custom development'
    ]
  }
];

export default function FilterBar() {
  const [isAllFiltersOpen, setIsAllFiltersOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [activeHorizontalFilter, setActiveHorizontalFilter] = useState(null);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleAllFiltersClick = () => {
    setIsAllFiltersOpen(!isAllFiltersOpen);
    setOpenCategory(null);
  };

  const handleCategoryClick = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleComingSoonClick = () => {
    setIsComingSoonOpen(!isComingSoonOpen);
  };

  const handleHorizontalFilterClick = (filterId) => {
    setActiveHorizontalFilter(filterId);
  };

  const handlePopularClick = () => {
    alert('Popular clicked');
  };

  return (
    <div className={styles.filterBar}>
      {/* Кнопка All Filters - первая */}
      <div 
        className={styles.buttonStatic}
        onClick={handleAllFiltersClick}
      >
        <FaBars className={styles.icon} />
        <span>ALL FILTERS</span>
        <IoIosArrowDown className={`${styles.arrow} ${isAllFiltersOpen ? styles.arrowUp : ''}`} />
      </div>

      {/* Горизонтальные фильтры */}
      {horizontalFilters.map((filter) => {
        const IconComponent = filter.icon;
        return (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${
              activeHorizontalFilter === filter.id ? styles.filterButtonActive : ''
            }`}
            onClick={() => handleHorizontalFilterClick(filter.id)}
          >
            <div className={styles.iconCircle}>
              <IconComponent />
            </div>
            <span className={styles.buttonLabel}>{filter.label}</span>
          </button>
        );
      })}

      {/* Выпадающее меню с категориями */}
      {isAllFiltersOpen && (
        <div className={styles.categoriesDropdown}>
          {filterCategories.map((category) => (
            <div key={category.id} className={styles.categoryWrapper}>
              <div 
                className={styles.categoryButton}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryLabel}>{category.label}</span>
                <IoIosArrowDown className={`${styles.arrow} ${openCategory === category.id ? styles.arrowUp : ''}`} />
              </div>

              {/* Подменю с опциями */}
              {openCategory === category.id && (
                <div className={styles.optionsDropdown}>
                  {category.options.map((option) => (
              <label key={option} className={styles.option}>
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
                  
                  {/* Coming Soon подменю для указанных категорий */}
                  {comingSoonOptions[category.id] && (
                    <div className={styles.comingSoonSection}>
                      <div 
                        className={styles.comingSoonHeader}
                        onClick={handleComingSoonClick}
                      >
                        <span>Coming soon...</span>
                        <IoIosArrowDown className={`${styles.arrow} ${isComingSoonOpen ? styles.arrowUp : ''}`} />
                      </div>
                      
                      {isComingSoonOpen && (
                        <div className={styles.comingSoonSubmenu}>
                          {comingSoonOptions[category.id].map((option) => (
                            <div key={option} className={styles.comingSoonOption}>
                              <span>{option}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
          </div>
          ))}
        </div>
      )}

      {/* Кнопка Popular — без иконок и дропдауна */}
      <button
        className={`${styles.filterButton} ${styles.popularButton}`}
        onClick={handlePopularClick}
      >
        <span className={styles.buttonLabel}>POPULAR</span>
      </button>
    </div>
  );
}
