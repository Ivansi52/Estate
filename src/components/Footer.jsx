import styles from '@/styles/Footer.module.css';
import logo from '@/images/Logo.svg';
import phoneIcon from '@/images/entypo_phone.png';
import whatsappIcon from '@/images/ant-design_whats-app-outlined.png';
import telegramIcon from '@/images/uil_telegram-alt.png';
import EnglandFlag from '@/images/EnglandFlag.png';
import EsFlag from '@/images/EsFlag.png';
import RussiaFlag from '@/images/RussiaFlag.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
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
        {/* Phone number section - centered at top */}
        <div className={styles.phoneSection}>
          <div className={styles.phoneSectionContent}>
          <div className={styles.phoneSectionRow}>
          <div className={styles.phoneWrapper}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
              <path d="M16.7227 14.0602C16.4672 13.9289 15.1945 13.3055 14.9578 13.2211C14.7211 13.132 14.5477 13.0898 14.3766 13.3523C14.2031 13.6125 13.7109 14.1914 13.5563 14.3672C13.4063 14.5406 13.2539 14.5617 12.9984 14.4328C11.4797 13.6734 10.4836 13.0781 9.48282 11.3602C9.21798 10.9031 9.74766 10.9359 10.2422 9.94922C10.3266 9.77578 10.2844 9.62813 10.2188 9.49688C10.1531 9.36563 9.63751 8.09531 9.42188 7.57734C9.21329 7.07344 8.99766 7.14375 8.84063 7.13437C8.69063 7.125 8.51954 7.125 8.3461 7.125C8.17266 7.125 7.89376 7.19063 7.65704 7.44609C7.42032 7.70625 6.75235 8.33203 6.75235 9.60234C6.75235 10.8727 7.67813 12.1031 7.80469 12.2766C7.93594 12.45 9.62579 15.0562 12.2203 16.1789C13.8609 16.8867 14.5031 16.9477 15.3234 16.8258C15.8227 16.7508 16.8516 16.2023 17.0648 15.5953C17.2781 14.9906 17.2781 14.4727 17.2149 14.3648C17.1516 14.25 16.9781 14.1844 16.7227 14.0602Z" fill="white"/>
              <path d="M21.6844 7.93125C21.1547 6.67266 20.3953 5.54297 19.4274 4.57266C18.4594 3.60469 17.3297 2.84297 16.0688 2.31563C14.7797 1.77422 13.4109 1.5 12 1.5H11.9531C10.5328 1.50703 9.15704 1.78828 7.86329 2.34141C6.61407 2.87578 5.49376 3.63516 4.53517 4.60312C3.57657 5.57109 2.82423 6.69609 2.30392 7.95C1.76485 9.24844 1.49298 10.6289 1.50001 12.0492C1.50704 13.6758 1.8961 15.2906 2.62501 16.7344V20.2969C2.62501 20.8922 3.10782 21.375 3.70314 21.375H7.26798C8.71173 22.1039 10.3266 22.493 11.9531 22.5H12.0024C13.4063 22.5 14.768 22.2281 16.05 21.6961C17.3039 21.1734 18.4313 20.4234 19.3969 19.4648C20.3649 18.5063 21.1266 17.3859 21.6586 16.1367C22.2117 14.843 22.493 13.4672 22.5 12.0469C22.507 10.6195 22.2305 9.23438 21.6844 7.93125ZM18.143 18.1969C16.5 19.8234 14.3203 20.7188 12 20.7188H11.9602C10.5469 20.7117 9.14298 20.3602 7.90314 19.6992L7.70626 19.5938H4.40626V16.2938L4.30079 16.0969C3.63985 14.857 3.28829 13.4531 3.28126 12.0398C3.27189 9.70312 4.16485 7.50937 5.80314 5.85703C7.43907 4.20469 9.62579 3.29062 11.9625 3.28125H12.0024C13.1742 3.28125 14.3109 3.50859 15.382 3.95859C16.4274 4.39687 17.3649 5.02734 18.1711 5.83359C18.975 6.6375 19.6078 7.57734 20.0461 8.62266C20.5008 9.70547 20.7281 10.8539 20.7234 12.0398C20.7094 14.3742 19.793 16.5609 18.143 18.1969Z" fill="white"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
              <path d="M22.265 2.42833C21.9802 2.19168 21.6366 2.0366 21.2707 1.97955C20.9049 1.9225 20.5304 1.96563 20.187 2.10433L2.26603 9.33933C1.88288 9.49703 1.55674 9.7675 1.33087 10.1149C1.105 10.4622 0.990086 10.87 1.00137 11.2842C1.01265 11.6984 1.1496 12.0993 1.39404 12.4339C1.63848 12.7684 1.97886 13.0207 2.37003 13.1573L5.99503 14.4183L8.01503 21.1003C8.04274 21.1895 8.08279 21.2743 8.13403 21.3523C8.14203 21.3643 8.15303 21.3723 8.16103 21.3853C8.2201 21.4672 8.29124 21.5397 8.37203 21.6003L8.44203 21.6503C8.53688 21.713 8.64171 21.7589 8.75203 21.7863L8.76503 21.7873L8.77103 21.7903C8.83783 21.8039 8.90585 21.8106 8.97403 21.8103L8.99203 21.8073C9.09443 21.8055 9.19595 21.788 9.29303 21.7553C9.31503 21.746 9.33636 21.736 9.35703 21.7253C9.42959 21.6955 9.4984 21.6572 9.56203 21.6113L9.71403 21.4823L12.416 18.4993L16.446 21.6213C16.8006 21.8978 17.2374 22.0481 17.687 22.0483C18.1583 22.0478 18.615 21.8852 18.9806 21.5879C19.3462 21.2906 19.5984 20.8766 19.695 20.4153L22.958 4.39833C23.0318 4.03799 23.0063 3.66437 22.8843 3.31739C22.7622 2.97041 22.5482 2.66311 22.265 2.42833ZM9.37003 14.7363C9.23182 14.8748 9.13725 15.0507 9.09803 15.2423L8.78803 16.7463L8.00403 14.1533L12.069 12.0363L9.37003 14.7363ZM17.672 20.0403L12.909 16.3503C12.7098 16.1963 12.4598 16.1231 12.209 16.1454C11.9582 16.1676 11.725 16.2837 11.556 16.4703L10.69 17.4253L10.996 15.9383L18.079 8.85533C18.2471 8.68625 18.3492 8.46269 18.367 8.22495C18.3848 7.98722 18.317 7.75096 18.176 7.55876C18.0349 7.36656 17.8299 7.23107 17.5978 7.17672C17.3656 7.12237 17.1217 7.15273 16.91 7.26233L6.74503 12.5543L3.02003 11.1913L20.999 4.00033L17.672 20.0403Z" fill="white"/>
            </svg>
            <span className={styles.phoneNumber}>8 800 9303030</span>
          </div>
          <button className={styles.callbackButton}>Request a Callback</button>
          </div>
          <p className={styles.phoneCaption}>Contact us via your preferred messenger</p>
          </div>
        </div>
        
        {/* Правая колонка (контакты) */}
        <div className={styles.right}>
          <div className={styles.contactLine}><strong>Email:</strong> info@2clients.com</div>
          <div className={styles.contactLine}><strong>Adresse:</strong> ul. Nezavisimosti 25</div>
          <div className={styles.contactLine}><strong>Working hours:</strong> 08:00 - 20:00</div>
        </div>

        {/* Newsletter — привязан к низу футера */}
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

                
                <div className={styles.download}>Download Company Presentation</div>
              </div>
            </div>
          </div>

          

          {/* Колонки меню и языковой селектор */}
          <div className={styles.menuLangWrapper}>
            <div className={styles.menuColumns}>
              <div className={styles.menuColumn}>
                <h3 className={styles.menuTitle}>Menu</h3>
                <ul className={styles.menuList}>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/projects">Portfolio</Link></li>
                  <li><Link href="/prices">Pricing</Link></li>
                  <li><Link href="/calculator">Calculator</Link></li>
                  <li><Link href="/about">About us</Link></li>
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
            <div className={styles.langSelector} ref={dropdownRef} aria-expanded={langDropdownOpen}>
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.langArrow}>
                  <path d="M13.3346 8.33301L10.0013 11.6663L6.66797 8.33301" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
