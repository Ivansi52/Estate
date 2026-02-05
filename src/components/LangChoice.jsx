import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import RussiaFlag from '@/images/RussiaFlag.png';
import EsFlag from '@/images/EsFlag.png';
import EnglandFlag from '@/images/EnglandFlag.png';

const LANGUAGES = [
  { code: 'ru', short: 'RU', label: 'Русский', flag: RussiaFlag },
  { code: 'en', short: 'EN', label: 'English', flag: EnglandFlag },
  { code: 'es', short: 'ES', label: 'Español', flag: EsFlag },
];

export default function LangChoice() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[1]); // English по умолчанию
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleDropdown() {
    setDropdownOpen(prev => !prev);
  }

  function onSelectLang(lang) {
    setSelectedLang(lang);
    setDropdownOpen(false);
    // Тут можно добавить логику смены языка сайта
  }

  return (
    <div
      className={`${styles.flagWrapper} ${dropdownOpen ? styles.open : ''}`}
      ref={dropdownRef}
      onClick={toggleDropdown}
    >
      <div className={styles.langTrigger}>
        <Image
          height={32}
          width={32}
          src={selectedLang.flag}
          alt={selectedLang.label}
          className={styles.flag}
        />
        <span>{selectedLang.short}</span>
        <svg className={styles.langTriggerIcon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {dropdownOpen && (
        <ul className={styles.langDropdown}>
          {LANGUAGES.filter(lang => lang.code !== selectedLang.code).map(lang => (
            <li
              key={lang.code}
              className={styles.langItem}
              onClick={() => onSelectLang(lang)}
            >
              <Image height={32} width={32} src={lang.flag} alt={lang.label} className={styles.flag} />
              <span>{lang.short}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
