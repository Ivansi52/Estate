import styles from '@/styles/FilterButtons.module.css';

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const buttons = [
    'See all',
    'Small or medium business',
    'Large business',
    'Support and maintenance',
    'Brand building',
    'Business automation',
    'Boost traffic',
    'Increase sales'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <button
            key={button}
            className={`${styles.button} ${activeFilter === button ? styles.active : ''}`}
            onClick={() => setActiveFilter(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;