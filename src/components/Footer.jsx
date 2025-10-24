import styles from '@/styles/Footer.module.css';
import logo from '@/images/Logo.png';
import phoneIcon from '@/images/entypo_phone.png';
import whatsappIcon from '@/images/ant-design_whats-app-outlined.png';
import telegramIcon from '@/images/uil_telegram-alt.png';
import EnglandFlag from '@/images/EnglandFlag.png';
import EsFlag from '@/images/EsFlag.png';
import RussiaFlag from '@/images/RussiaFlag.png';
import Image from 'next/image';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: EnglandFlag },
    { code: 'es', label: 'Spanish', flag: EsFlag },
    { code: 'ru', label: 'Russian', flag: RussiaFlag },
  ];

  const selectedLanguageObj = languages.find(lang => lang.code === selectedLang);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleDropdown() {
    setLangDropdownOpen(prev => !prev);
  }

  function selectLanguage(code) {
    setSelectedLang(code);
    setLangDropdownOpen(false);
  }

  return (
    <div style={{ padding: '0 20px 20px' }}>
      <footer className={styles.footer}>
        <div className={styles.inner}>

          {/* Левая колонка (логотип, описание, презентация) */}
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <div className={styles.logoWrapper}>
                <Image src={logo} width={128} height={128} alt="Logo" className={styles.logo} />
              </div>

              <div className={styles.leftContent}>
                <h2 className={styles.heading}>
                  Digital marketing agency,<br />
                  Web development & SEO
                </h2>

                <div className={styles.details}>
                  <div>INN: 234809520206</div>
                  <div>OGRNIP: 321237500143541</div>
                </div>

                <div className={styles.download}>Download Company Presentation</div>
              </div>
            </div>

            {/* Newsletter блок */}
            <div className={styles.newsletterWrapper}>
              <div className={styles.newsletterBox}>
                <h2 className={styles.newsletterTitle}>Join our newsletter</h2>
                <h3 className={styles.newsletterSubtitle}>
                  No spam — only valuable content to help you grow your digital presence.
                </h3>
                <div className={styles.inputRow}>
                  <input type="email" placeholder="Email" className={styles.emailInput} />
                  <button className={styles.sendButton}>
                    <BsArrowRight size={24} color="#fff" />
                  </button>
                </div>
                <label className={styles.agreeRow}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span>I agree to the Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>

          {/* Центральная колонка (телефон) */}
          <div className={styles.center}>
            <div className={styles.phoneRow}>
              <Image src={phoneIcon} width={28} height={28} alt="Phone" className={styles.phoneIcon} />
              <span className={styles.phoneNumber}>8 800 1013536</span>
              <div className={styles.requestCallback}>Request a Callback</div>
            </div>
            <div className={styles.callNote}>Calls from Russian regions are free</div>
          </div>

          {/* Правая колонка (контакты) */}
          <div className={styles.right}>
            <div className={styles.contactLine}><strong>Email:</strong> info@2clients.com</div>
            <div className={styles.contactLine}><strong>Adresse:</strong> ul. Nezavisimosti 25</div>
            <div className={styles.contactLine}><strong>Working hours:</strong> 08:00 - 20:00</div>

            <div className={styles.social}>
              <Image src={whatsappIcon} width={24} height={24} alt="WhatsApp" />
              <Image src={telegramIcon} width={24} height={24} alt="Telegram" />
              <span className={styles.socialNumber}>8 800 9303030</span>
            </div>
          </div>

          {/* Колонки меню и языковой селектор */}
          <div className={styles.menuLangWrapper}>
            <div className={styles.menuColumns}>
              <div className={styles.menuColumn}>
                <h3 className={styles.menuTitle}>Menu</h3>
                <ul className={styles.menuList}>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Pricing</li>
                  <li>Calculator</li>
                  <li>About us</li>
                </ul>
              </div>
              <div className={styles.menuColumn}>
                <h3 className={styles.menuTitle}>Services</h3>
                <ul className={styles.menuList}>
                  <li>Website development</li>
                  <li>SEO</li>
                  <li>Contextual Advertising</li>
                  <li>SMM and Email</li>
                  <li>Mobile Apps</li>
                  <li>Design and Branding</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className={styles.menuColumn}>
                <h3 className={styles.menuTitle}>Company</h3>
                <ul className={styles.menuList}>
                  <li>Our story</li>
                  <li>Support</li>
                  <li>Press</li>
                  <li>Join the collective</li>
                  <li>Hire a 10x Designer</li>
                </ul>
              </div>
              <div className={styles.menuColumn}>
                <h3 className={styles.menuTitle}>Legal</h3>
                <ul className={styles.menuList}>
                  <li>Privacy policy</li>
                  <li>Terms&Conditions</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>

            {/* Языковой селектор */}
            <div className={styles.langSelector} ref={dropdownRef}>
              <button
                className={styles.langButton}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={langDropdownOpen}
                type="button"
              >
                {selectedLanguageObj && (
                  <Image
                    src={selectedLanguageObj.flag}
                    alt={selectedLanguageObj.label}
                    width={40}
                    height={40}
                  />
                )}
                <BsChevronDown size={18} color="#0344DC" className={styles.langArrow} />
              </button>

              {langDropdownOpen && (
                <ul className={styles.langDropdown} role="listbox">
                  {languages.map(lang => (
                    <li
                      key={lang.code}
                      role="option"
                      aria-selected={lang.code === selectedLang}
                      className={styles.langOption}
                      onClick={() => selectLanguage(lang.code)}
                    >
                      <Image src={lang.flag} alt={lang.label} width={40} height={40} />
                      <span>{lang.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
        <div className={styles.footerBottomText}>
          Website development and promotion.<br />
          PPC advertising, SMM, brand reputation management.<br />
          © 2Clients, 2025. All rights reserved. Copying is prohibited.
        </div>
      </footer>
    </div>
  );
}
