import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import RussiaFlag from '@/images/RussiaFlag.png';
import EsFlag from '@/images/EsFlag.png';
import EnglandFlag from '@/images/EnglandFlag.png';

const LANGUAGES = [
  { code: 'ru', label: 'Русский', flag: RussiaFlag },
  { code: 'en', label: 'English', flag: EnglandFlag },
  { code: 'es', label: 'Español', flag: EsFlag },
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
    <div className={styles.flagWrapper} ref={dropdownRef}>
      <Image
        height={40}
        width={40}
        src={selectedLang.flag}
        alt={selectedLang.label}
        className={styles.flag}
        onClick={toggleDropdown}
      />
      {dropdownOpen && (
        <ul className={styles.langDropdown}>
          {LANGUAGES.filter(lang => lang.code !== selectedLang.code).map(lang => (
            <li
              key={lang.code}
              className={styles.langItem}
              onClick={() => onSelectLang(lang)}
            >
              <Image height={40} width={40} src={lang.flag} alt={lang.label} className={styles.flag} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
