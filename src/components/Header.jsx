import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import { FaEnvelope } from 'react-icons/fa';
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
        <svg className={styles.logo} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V31.8171H12.1095V27.9242H3.97915V3.8943H12.1095V0H0Z" fill="white"/>
          <path d="M15.5757 0L15.5703 0.00419952V8.57393L25.1747 31.8182L25.1764 31.8172V23.2481L15.5757 0Z" fill="#FF1700"/>
          <path d="M32.6115 0H28.6328V31.818H32.6115V0Z" fill="white"/>
        </svg>
        <div className={styles.brand}>
          <span>Digital marketing agency</span>
          <span>in Moscow</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${currentPath === '/services' ? styles.active : ''}`}
            onClick={() => router.push('/services')}
          >
            Services
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
