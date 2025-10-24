import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import { FaEnvelope } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Logo from '@/images/Logo.png';
import LangChoice from './LangChoice';

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  // Логика скролла для глассморфизма
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Добавляем эффект при скролле - усиление глассморфизма
      setIsScrolled(currentScrollY > 50);
    };

    // Добавляем обработчик с правильными опциями
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Пример смены фона для активной страницы "/projects"
  const isProjectsPage = currentPath === '/projects';
  const headerClass = `${styles.header} ${isProjectsPage ? styles.projectsBackground : ''} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClass}>
      <div className={styles.left} onClick={()=> router.push('/')}>
        <Image src={Logo} alt="Logo" className={styles.logo} />
        <span className={styles.brand} >Digital marketing agency in Moscow</span>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${currentPath === '/services' ? styles.active : ''}`}
            onClick={() => router.push('/services')}
          >
            Services <IoIosArrowDown className={styles.arrowIcon} />
          </li>
          <li className={`${styles.navItem} ${currentPath === '/projects' ? styles.active : ''}`} onClick={() => router.push('/projects')}>
            Portfolio
          </li>
          <li className={`${styles.navItem} ${currentPath === '/prices' ? styles.active : ''}`} onClick={() => router.push('/prices')}>
            Pricing
          </li>
          <li className={`${styles.navItem} ${currentPath === '/calculator' ? styles.active : ''}`} onClick={() => router.push('/calculator')}>
            Calculator
          </li>
          <li className={`${styles.navItem} ${currentPath === '/about' ? styles.active : ''}`} onClick={() => router.push('/about')}>
            About Us
          </li>
          <li className={`${styles.navItem} ${currentPath === '/contacts' ? styles.active : ''}`} onClick={() => router.push('/contacts')}>
            Contact Us
          </li>

          <li>
            <LangChoice />
          </li>
        </ul>
      </nav>

      <div className={styles.right}>
        <div className={styles.infoBlock}>
          <div className={styles.hours}>Working hours: 10:00 - 18:00 Mo-Fr</div>
          <div className={styles.contact}>
            <FaEnvelope className={styles.envelopeIcon} />
            <span className={styles.email}>info@2clients.com</span>
          </div>
        </div>
        <button className={styles.requestButton}>Send Request</button>
      </div>
    </header>
  );
}
