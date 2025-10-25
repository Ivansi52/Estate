import styles from '@/styles/FilterBar.module.css';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const horizontalFilters = [
  { id: 'websites', label: 'Websites', active: false },
  { id: 'ecommerce', label: 'E-commerce', active: false },
  { id: 'landing', label: 'Landing Pages', active: false },
  { id: 'corporate', label: 'Corporate', active: false },
  { id: 'portfolio', label: 'Portfolio', active: false },
  { id: 'blog', label: 'Blog', active: false },
  { id: 'mobile', label: 'Mobile Apps', active: false }
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
      {horizontalFilters.map((filter) => (
        <button
          key={filter.id}
          className={`${styles.filterButton} ${
            activeHorizontalFilter === filter.id ? styles.filterButtonActive : ''
          }`}
          onClick={() => handleHorizontalFilterClick(filter.id)}
        >
            <span className={styles.buttonLabel}>{filter.label}</span>
        </button>
      ))}

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
        <span className={styles.buttonLabel}>Popular</span>
      </button>
    </div>
  );
}
