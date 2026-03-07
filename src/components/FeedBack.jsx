import React, { useRef, useState, useEffect } from 'react';
import {useForm, useController} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {contactFormSchema} from '@/utils/validationSchemas'
import Image from 'next/image';
import styles from '@/styles/FeedBack.module.css';
import feedbackImg from '@/images/feedback.svg';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import facebookIcon from '@/images/facebook.png';
import instagramIcon from '@/images/instagram.png';
import linkedinIcon from '@/images/linkdin.png';
import redditIcon from '@/images/reddit.png';

import person1 from '@/images/person_1.png';
import person2 from '@/images/person_2.png';
import person3 from '@/images/person_3.png';

import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const FLAG_CDN = 'https://flagcdn.com/w40';
const COUNTRY_CODES = [
    { code: '+375', label: 'Беларусь', iso2: 'by' },
    { code: '+7', label: 'Россия', iso2: 'ru' },
    { code: '+380', label: 'Украина', iso2: 'ua' },
    { code: '+48', label: 'Польша', iso2: 'pl' },
    { code: '+370', label: 'Литва', iso2: 'lt' },
    { code: '+371', label: 'Латвия', iso2: 'lv' },
    { code: '+372', label: 'Эстония', iso2: 'ee' },
    { code: '+7', label: 'Казахстан', iso2: 'kz' },
    { code: '+998', label: 'Узбекистан', iso2: 'uz' },
    { code: '+996', label: 'Кыргызстан', iso2: 'kg' },
    { code: '+373', label: 'Молдова', iso2: 'md' },
    { code: '+994', label: 'Азербайджан', iso2: 'az' },
    { code: '+995', label: 'Грузия', iso2: 'ge' },
    { code: '+374', label: 'Армения', iso2: 'am' },
    { code: '+44', label: 'Великобритания', iso2: 'gb' },
    { code: '+49', label: 'Германия', iso2: 'de' },
    { code: '+33', label: 'Франция', iso2: 'fr' },
];

const COUNTRY_CODES_BY_PREFIX = [...COUNTRY_CODES].sort(
    (a, b) => b.code.length - a.code.length
);

function matchCountryByPrefix(value) {
    if (!value || !value.startsWith('+')) return null;
    const digits = value.slice(1).replace(/\D/g, '');
    const withPlus = '+' + digits;
    for (const country of COUNTRY_CODES_BY_PREFIX) {
        if (withPlus.startsWith(country.code) || country.code === withPlus) {
            return country;
        }
    }
    return null;
}

function formatPhoneLocalWithSpace(digits) {
    const d = digits.replace(/\D/g, '');
    if (d.length <= 2) return d;
    return d.slice(0, 2) + ' ' + d.slice(2);
}

const FeedBack = () => {

    const [attachedFiles, setAttachedFiles] = useState([]);
    const [bottomErrors, setBottomErrors] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+375');
    const [phoneLocal, setPhoneLocal] = useState('');
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const countryDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
                setCountryDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            description: '',
            privacyPolicy: false
        },
        mode: 'onChange'
    })

    const {register, handleSubmit, formState, watch, reset, setValue} = form;

    const {errors, isSubmitting, isValidating} = formState;

    useEffect(() => {
        const digitsOnly = phoneLocal.replace(/\D/g, '');
        const fullPhone = phoneLocal.startsWith('+')
            ? phoneLocal
            : selectedCountryCode + digitsOnly;
        setValue('phone', fullPhone, { shouldValidate: true });
    }, [selectedCountryCode, phoneLocal, setValue]);

    useEffect(() => {
        const messages = Object.values(errors)
            .map((err) => err?.message)
            .filter(Boolean);
        setBottomErrors(messages);

        if (messages.length > 0) {
            const timer = setTimeout(() => {
                setBottomErrors([]);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errors]);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files || []);
        setAttachedFiles(files);
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                reset();
                setPhoneLocal('');
                setSelectedCountryCode('+375');
            } else {
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error', error);
            alert('Error submitting form. Please try again.');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    {...getOptimizedImageProps(feedbackImg, "Feedback", 0, 0)}
                    className={styles.image}
                />

                {/* Левый верхний прямоугольник */}
                <div className={styles.overlayBox}>
                    <h2 className={styles.title}>
                        Drop your details<br/>
                        <span className={styles.subtitle}>— we’ll contact you.</span>
                    </h2>
                </div>

                {/* Новый блок в правом верхнем углу */}
                <div className={styles.topRightBox}>
                    <div className={styles.photos}>
                        <Image
                            {...getOptimizedImageProps(person1, "Person 1", 50, 50, true)}
                            className={styles.personPhoto}
                        />
                        <Image
                            {...getOptimizedImageProps(person2, "Person 2", 50, 50, true)}
                            className={styles.personPhoto}
                        />
                        <Image
                            {...getOptimizedImageProps(person3, "Person 3", 50, 50, true)}
                            className={styles.personPhoto}
                        />
                    </div>

                    <div className={styles.circle}>
                        <span className={styles.circleText}>+87%</span>
                    </div>

                    <p className={styles.topRightText}>
                        of clients return with new tasks
                    </p>
                </div>

                {/* Форма слева по центру по вертикали */}
                <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputRow}>
                        <input type="text" {...register('name')} placeholder="Name"
                               className={styles.inputField}/>
                        <div className={styles.phoneRow}>
                            <div
                                className={styles.countrySelectWrapper}
                                ref={countryDropdownRef}
                                data-open={countryDropdownOpen}
                            >
                                <button
                                    type="button"
                                    className={styles.countryTrigger}
                                    onClick={() => setCountryDropdownOpen((v) => !v)}
                                    aria-expanded={countryDropdownOpen}
                                    aria-haspopup="listbox"
                                    aria-label="Выбор кода страны"
                                >
                                    <span className={styles.countryTriggerFlag}>
                                        {(() => {
                                            const cur = COUNTRY_CODES.find(c => c.code === selectedCountryCode);
                                            return cur ? (
                                                <img
                                                    src={`${FLAG_CDN}/${cur.iso2}.png`}
                                                    alt=""
                                                    className={styles.countryFlagImg}
                                                    width={28}
                                                    height={21}
                                                />
                                            ) : null;
                                        })()}
                                    </span>
                                    <FiChevronDown
                                        className={styles.countryTriggerArrow}
                                        size={20}
                                        color="rgba(255,255,255,0.9)"
                                        aria-hidden
                                    />
                                </button>
                                {countryDropdownOpen && (
                                    <ul
                                        className={styles.countryDropdownList}
                                        role="listbox"
                                        aria-label="Коды стран"
                                    >
                                        {COUNTRY_CODES.map(({ code, label, iso2 }) => (
                                            <li
                                                key={`${code}-${label}`}
                                                role="option"
                                                aria-selected={selectedCountryCode === code}
                                                className={styles.countryDropdownItem}
                                                onClick={() => {
                                                    setSelectedCountryCode(code);
                                                    setCountryDropdownOpen(false);
                                                }}
                                            >
                                                <span className={styles.countryDropdownFlag}>
                                                    <img
                                                        src={`${FLAG_CDN}/${iso2}.png`}
                                                        alt=""
                                                        className={styles.countryFlagImg}
                                                        width={28}
                                                        height={21}
                                                    />
                                                </span>
                                                <span className={styles.countryDropdownCode}>{code}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <input
                                type="tel"
                                value={phoneLocal}
                                onChange={(e) => {
                                    const raw = e.target.value;
                                    if (raw.startsWith('+')) {
                                        const country = matchCountryByPrefix(raw);
                                        if (country) {
                                            setSelectedCountryCode(country.code);
                                            const rest = raw.slice(country.code.length).replace(/\D/g, '');
                                            setPhoneLocal(formatPhoneLocalWithSpace(rest));
                                            return;
                                        }
                                        setPhoneLocal(raw);
                                        return;
                                    }
                                    setPhoneLocal(formatPhoneLocalWithSpace(raw));
                                }}
                                placeholder="29 123 45 67"
                                className={styles.phoneInput}
                            />
                        </div>
                    </div>

                    <div className={styles.inputRow}>
                        <input type="email" {...register('email')} placeholder="Email"
                               className={styles.inputField}/>
                        <div className={styles.selectWrapper}>
                            <select {...register('service')} className={styles.selectField}>
                                <option value="" disabled>Choose service</option>
                                <option value="design">Design</option>
                                <option value="development">Development</option>
                                <option value="marketing">Marketing</option>
                                <option value="SEO">SEO</option>

                            </select>
                            <svg
                                className={styles.selectIcon}
                                width="34"
                                height="36"
                                viewBox="0 0 34 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.6668 15.001L17.0002 21.001L11.3335 15.001"
                                    stroke="white"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.descriptionWrapper}>
                        <textarea
                            {...register('description')}
                            placeholder="Task description"
                            className={styles.textArea}
                            rows={5}
                        />
                        <input
                            type="file"
                            multiple
                            ref={fileInputRef}
                            className={styles.fileInput}
                            onChange={handleFileChange}
                        />
                        <div className={styles.descriptionIconBlock}>
                            <svg
                                className={styles.descriptionIcon}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={handleIconClick}
                            >
                                <g opacity="0.65">
                                    <path
                                        d="M3.77979 9.55399L9.52503 3.80875C11.2336 2.10021 14.0037 2.10021 15.7123 3.80875C17.4208 5.5173 17.4206 8.28754 15.7121 9.99609L9.08293 16.6252C7.9439 17.7642 6.09748 17.7641 4.95845 16.6251C3.81942 15.486 3.81914 13.6395 4.95817 12.5005L11.5873 5.87133C12.1568 5.30182 13.0807 5.30182 13.6502 5.87133C14.2197 6.44085 14.2193 7.36399 13.6498 7.93351L7.90454 13.6787"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                            <span className={styles.descriptionFileHint}>(10Mb — max)</span>
                        </div>
                    </div>
                    {attachedFiles.length > 0 && (
                        <ul className={styles.fileList}>
                            {attachedFiles.map((file) => (
                                <li key={file.name} className={styles.fileListItem}>
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox" {...register('privacyPolicy')}
                            className={styles.checkbox}/>
                        <span>I agree to the Privacy Policy</span>
                    </label>

                    <button type="submit" disabled={isSubmitting} className={styles.sendButton}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                        <span className={styles.arrowCircle}>
              <FiArrowRight size={20} color="white"/>
            </span>
                    </button>
                    {bottomErrors.length > 0 && (
                        <div className={styles.errorToastContainer}>
                            {bottomErrors.map((msg, idx) => (
                                <div key={idx} className={styles.errorToast}>
                                    {msg}
                                </div>
                            ))}
                        </div>
                    )}
                </form>

                {/* Прямоугольник с соц. сетями в правом нижнем углу */}
                <div className={styles.socialBox}>
                    <a href="https://www.facebook.com/profile.php?id=61572227234263" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(facebookIcon, "Facebook", 24, 24)}/>
                    </a>
                    <a href="https://www.instagram.com/to2clients" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(instagramIcon, "Instagram", 24, 24)}/>
                    </a>
                    <a href="https://www.linkedin.com/in/2clients-web-agency-2081503a9/" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(linkedinIcon, "LinkedIn", 24, 24)}/>
                    </a>
                    <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(redditIcon, "Reddit", 24, 24)}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
