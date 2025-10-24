import styles from '@/styles/FilterBar.module.css';
import { FaBars, FaCommentAlt, FaPuzzlePiece } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FiTrendingUp } from 'react-icons/fi';

const filterButtons = [
  {
    id: 'website',
    label: 'Website',
    leftIcon: <BiCodeAlt />,
    rightIcon: <IoIosArrowDown />,
    options: ['Landing Page', 'Corporate Site', 'E-commerce', 'Promo Site'],
  },
  {
    id: 'seo',
    label: 'SEO',
    leftIcon: <FiTrendingUp />,
    rightIcon: <IoIosArrowDown />,
    options: ['Audit', 'Optimization', 'Link Building'],
  },
  {
    id: 'smm',
    label: 'SMM',
    leftIcon: <FaCommentAlt />,
    rightIcon: <IoIosArrowDown />,
    options: ['Instagram', 'Facebook', 'TikTok'],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    leftIcon: <FaPuzzlePiece />,
    rightIcon: <IoIosArrowDown />,
    options: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    id: 'design',
    label: 'Design',
    leftIcon: <span className={styles.figmaIcon}>F</span>, // буква F, стилизуем через CSS
    rightIcon: <IoIosArrowDown />,
    options: ['UI/UX', 'Logo', 'Branding'],
  },
];

export default function FilterBar() {
  const handlePopularClick = () => {
    alert('Popular clicked');
  };

  return (
    <div className={styles.filterBar}>
      {/* Кнопка All Filters */}
      <div className={styles.buttonStatic}>
        <FaBars className={styles.icon} />
        <span>ALL FILTERS</span>
      </div>

      {/* Фильтры с дропдауном */}
      {filterButtons.map((filter) => (
        <div key={filter.id} className={styles.filterButtonWrapper}>
          <button className={styles.filterButton}>
            {/* Синяя иконка слева */}
            <span className={styles.iconLeftCircle}>
              {filter.leftIcon}
            </span>

            {/* Название фильтра */}
            <span className={styles.buttonLabel}>{filter.label}</span>

            {/* Стрелка справа */}
            {filter.rightIcon && (
              <span className={styles.iconRight}>{filter.rightIcon}</span>
            )}
          </button>

          {/* Выпадающий список */}
          <div className={styles.dropdown}>
            {filter.options.map((option) => (
              <label key={option} className={styles.option}>
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

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
