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

import { FiArrowRight, FiChevronDown, FiX } from 'react-icons/fi';

const FLAG_CDN = 'https://flagcdn.com/w40';
const COUNTRY_CODES = [
    { code: '+93', label: 'Afghanistan', iso2: 'af' },
    { code: '+355', label: 'Albania', iso2: 'al' },
    { code: '+213', label: 'Algeria', iso2: 'dz' },
    { code: '+376', label: 'Andorra', iso2: 'ad' },
    { code: '+244', label: 'Angola', iso2: 'ao' },
    { code: '+1268', label: 'Antigua and Barbuda', iso2: 'ag' },
    { code: '+54', label: 'Argentina', iso2: 'ar' },
    { code: '+374', label: 'Armenia', iso2: 'am' },
    { code: '+61', label: 'Australia', iso2: 'au' },
    { code: '+43', label: 'Austria', iso2: 'at' },
    { code: '+994', label: 'Azerbaijan', iso2: 'az' },
    { code: '+1242', label: 'Bahamas', iso2: 'bs' },
    { code: '+973', label: 'Bahrain', iso2: 'bh' },
    { code: '+880', label: 'Bangladesh', iso2: 'bd' },
    { code: '+1246', label: 'Barbados', iso2: 'bb' },
    { code: '+375', label: 'Belarus', iso2: 'by' },
    { code: '+32', label: 'Belgium', iso2: 'be' },
    { code: '+501', label: 'Belize', iso2: 'bz' },
    { code: '+229', label: 'Benin', iso2: 'bj' },
    { code: '+975', label: 'Bhutan', iso2: 'bt' },
    { code: '+591', label: 'Bolivia', iso2: 'bo' },
    { code: '+387', label: 'Bosnia and Herzegovina', iso2: 'ba' },
    { code: '+267', label: 'Botswana', iso2: 'bw' },
    { code: '+55', label: 'Brazil', iso2: 'br' },
    { code: '+673', label: 'Brunei', iso2: 'bn' },
    { code: '+359', label: 'Bulgaria', iso2: 'bg' },
    { code: '+226', label: 'Burkina Faso', iso2: 'bf' },
    { code: '+257', label: 'Burundi', iso2: 'bi' },
    { code: '+855', label: 'Cambodia', iso2: 'kh' },
    { code: '+237', label: 'Cameroon', iso2: 'cm' },
    { code: '+1', label: 'Canada', iso2: 'ca' },
    { code: '+238', label: 'Cape Verde', iso2: 'cv' },
    { code: '+236', label: 'Central African Republic', iso2: 'cf' },
    { code: '+235', label: 'Chad', iso2: 'td' },
    { code: '+56', label: 'Chile', iso2: 'cl' },
    { code: '+86', label: 'China', iso2: 'cn' },
    { code: '+57', label: 'Colombia', iso2: 'co' },
    { code: '+269', label: 'Comoros', iso2: 'km' },
    { code: '+242', label: 'Congo', iso2: 'cg' },
    { code: '+243', label: 'DR Congo', iso2: 'cd' },
    { code: '+506', label: 'Costa Rica', iso2: 'cr' },
    { code: '+385', label: 'Croatia', iso2: 'hr' },
    { code: '+53', label: 'Cuba', iso2: 'cu' },
    { code: '+357', label: 'Cyprus', iso2: 'cy' },
    { code: '+420', label: 'Czech Republic', iso2: 'cz' },
    { code: '+45', label: 'Denmark', iso2: 'dk' },
    { code: '+253', label: 'Djibouti', iso2: 'dj' },
    { code: '+1767', label: 'Dominica', iso2: 'dm' },
    { code: '+1809', label: 'Dominican Republic', iso2: 'do' },
    { code: '+1829', label: 'Dominican Republic', iso2: 'do' },
    { code: '+1849', label: 'Dominican Republic', iso2: 'do' },
    { code: '+593', label: 'Ecuador', iso2: 'ec' },
    { code: '+20', label: 'Egypt', iso2: 'eg' },
    { code: '+503', label: 'El Salvador', iso2: 'sv' },
    { code: '+240', label: 'Equatorial Guinea', iso2: 'gq' },
    { code: '+291', label: 'Eritrea', iso2: 'er' },
    { code: '+372', label: 'Estonia', iso2: 'ee' },
    { code: '+268', label: 'Eswatini', iso2: 'sz' },
    { code: '+251', label: 'Ethiopia', iso2: 'et' },
    { code: '+679', label: 'Fiji', iso2: 'fj' },
    { code: '+358', label: 'Finland', iso2: 'fi' },
    { code: '+33', label: 'France', iso2: 'fr' },
    { code: '+241', label: 'Gabon', iso2: 'ga' },
    { code: '+220', label: 'Gambia', iso2: 'gm' },
    { code: '+995', label: 'Georgia', iso2: 'ge' },
    { code: '+49', label: 'Germany', iso2: 'de' },
    { code: '+233', label: 'Ghana', iso2: 'gh' },
    { code: '+30', label: 'Greece', iso2: 'gr' },
    { code: '+1473', label: 'Grenada', iso2: 'gd' },
    { code: '+502', label: 'Guatemala', iso2: 'gt' },
    { code: '+224', label: 'Guinea', iso2: 'gn' },
    { code: '+245', label: 'Guinea-Bissau', iso2: 'gw' },
    { code: '+592', label: 'Guyana', iso2: 'gy' },
    { code: '+509', label: 'Haiti', iso2: 'ht' },
    { code: '+504', label: 'Honduras', iso2: 'hn' },
    { code: '+852', label: 'Hong Kong', iso2: 'hk' },
    { code: '+36', label: 'Hungary', iso2: 'hu' },
    { code: '+354', label: 'Iceland', iso2: 'is' },
    { code: '+91', label: 'India', iso2: 'in' },
    { code: '+62', label: 'Indonesia', iso2: 'id' },
    { code: '+98', label: 'Iran', iso2: 'ir' },
    { code: '+964', label: 'Iraq', iso2: 'iq' },
    { code: '+353', label: 'Ireland', iso2: 'ie' },
    { code: '+972', label: 'Israel', iso2: 'il' },
    { code: '+39', label: 'Italy', iso2: 'it' },
    { code: '+225', label: 'Ivory Coast', iso2: 'ci' },
    { code: '+1876', label: 'Jamaica', iso2: 'jm' },
    { code: '+81', label: 'Japan', iso2: 'jp' },
    { code: '+962', label: 'Jordan', iso2: 'jo' },
    { code: '+7', label: 'Kazakhstan', iso2: 'kz' },
    { code: '+254', label: 'Kenya', iso2: 'ke' },
    { code: '+686', label: 'Kiribati', iso2: 'ki' },
    { code: '+383', label: 'Kosovo', iso2: 'xk' },
    { code: '+965', label: 'Kuwait', iso2: 'kw' },
    { code: '+996', label: 'Kyrgyzstan', iso2: 'kg' },
    { code: '+856', label: 'Laos', iso2: 'la' },
    { code: '+371', label: 'Latvia', iso2: 'lv' },
    { code: '+961', label: 'Lebanon', iso2: 'lb' },
    { code: '+266', label: 'Lesotho', iso2: 'ls' },
    { code: '+231', label: 'Liberia', iso2: 'lr' },
    { code: '+218', label: 'Libya', iso2: 'ly' },
    { code: '+423', label: 'Liechtenstein', iso2: 'li' },
    { code: '+370', label: 'Lithuania', iso2: 'lt' },
    { code: '+352', label: 'Luxembourg', iso2: 'lu' },
    { code: '+853', label: 'Macau', iso2: 'mo' },
    { code: '+261', label: 'Madagascar', iso2: 'mg' },
    { code: '+265', label: 'Malawi', iso2: 'mw' },
    { code: '+60', label: 'Malaysia', iso2: 'my' },
    { code: '+960', label: 'Maldives', iso2: 'mv' },
    { code: '+223', label: 'Mali', iso2: 'ml' },
    { code: '+356', label: 'Malta', iso2: 'mt' },
    { code: '+692', label: 'Marshall Islands', iso2: 'mh' },
    { code: '+222', label: 'Mauritania', iso2: 'mr' },
    { code: '+230', label: 'Mauritius', iso2: 'mu' },
    { code: '+52', label: 'Mexico', iso2: 'mx' },
    { code: '+691', label: 'Micronesia', iso2: 'fm' },
    { code: '+373', label: 'Moldova', iso2: 'md' },
    { code: '+377', label: 'Monaco', iso2: 'mc' },
    { code: '+976', label: 'Mongolia', iso2: 'mn' },
    { code: '+382', label: 'Montenegro', iso2: 'me' },
    { code: '+212', label: 'Morocco', iso2: 'ma' },
    { code: '+258', label: 'Mozambique', iso2: 'mz' },
    { code: '+95', label: 'Myanmar', iso2: 'mm' },
    { code: '+264', label: 'Namibia', iso2: 'na' },
    { code: '+674', label: 'Nauru', iso2: 'nr' },
    { code: '+977', label: 'Nepal', iso2: 'np' },
    { code: '+31', label: 'Netherlands', iso2: 'nl' },
    { code: '+687', label: 'New Caledonia', iso2: 'nc' },
    { code: '+64', label: 'New Zealand', iso2: 'nz' },
    { code: '+505', label: 'Nicaragua', iso2: 'ni' },
    { code: '+227', label: 'Niger', iso2: 'ne' },
    { code: '+234', label: 'Nigeria', iso2: 'ng' },
    { code: '+683', label: 'Niue', iso2: 'nu' },
    { code: '+672', label: 'Norfolk Island', iso2: 'nf' },
    { code: '+389', label: 'North Macedonia', iso2: 'mk' },
    { code: '+850', label: 'North Korea', iso2: 'kp' },
    { code: '+1670', label: 'Northern Mariana Islands', iso2: 'mp' },
    { code: '+47', label: 'Norway', iso2: 'no' },
    { code: '+968', label: 'Oman', iso2: 'om' },
    { code: '+92', label: 'Pakistan', iso2: 'pk' },
    { code: '+680', label: 'Palau', iso2: 'pw' },
    { code: '+970', label: 'Palestine', iso2: 'ps' },
    { code: '+507', label: 'Panama', iso2: 'pa' },
    { code: '+675', label: 'Papua New Guinea', iso2: 'pg' },
    { code: '+595', label: 'Paraguay', iso2: 'py' },
    { code: '+51', label: 'Peru', iso2: 'pe' },
    { code: '+63', label: 'Philippines', iso2: 'ph' },
    { code: '+48', label: 'Poland', iso2: 'pl' },
    { code: '+351', label: 'Portugal', iso2: 'pt' },
    { code: '+1787', label: 'Puerto Rico', iso2: 'pr' },
    { code: '+1939', label: 'Puerto Rico', iso2: 'pr' },
    { code: '+974', label: 'Qatar', iso2: 'qa' },
    { code: '+262', label: 'Réunion', iso2: 're' },
    { code: '+40', label: 'Romania', iso2: 'ro' },
    { code: '+7', label: 'Russia', iso2: 'ru' },
    { code: '+250', label: 'Rwanda', iso2: 'rw' },
    { code: '+590', label: 'Saint Barthélemy', iso2: 'bl' },
    { code: '+290', label: 'Saint Helena', iso2: 'sh' },
    { code: '+1869', label: 'Saint Kitts and Nevis', iso2: 'kn' },
    { code: '+1758', label: 'Saint Lucia', iso2: 'lc' },
    { code: '+590', label: 'Saint Martin', iso2: 'mf' },
    { code: '+508', label: 'Saint Pierre and Miquelon', iso2: 'pm' },
    { code: '+1784', label: 'Saint Vincent and the Grenadines', iso2: 'vc' },
    { code: '+685', label: 'Samoa', iso2: 'ws' },
    { code: '+378', label: 'San Marino', iso2: 'sm' },
    { code: '+239', label: 'São Tomé and Príncipe', iso2: 'st' },
    { code: '+966', label: 'Saudi Arabia', iso2: 'sa' },
    { code: '+221', label: 'Senegal', iso2: 'sn' },
    { code: '+381', label: 'Serbia', iso2: 'rs' },
    { code: '+248', label: 'Seychelles', iso2: 'sc' },
    { code: '+232', label: 'Sierra Leone', iso2: 'sl' },
    { code: '+65', label: 'Singapore', iso2: 'sg' },
    { code: '+1721', label: 'Sint Maarten', iso2: 'sx' },
    { code: '+421', label: 'Slovakia', iso2: 'sk' },
    { code: '+386', label: 'Slovenia', iso2: 'si' },
    { code: '+677', label: 'Solomon Islands', iso2: 'sb' },
    { code: '+252', label: 'Somalia', iso2: 'so' },
    { code: '+27', label: 'South Africa', iso2: 'za' },
    { code: '+82', label: 'South Korea', iso2: 'kr' },
    { code: '+211', label: 'South Sudan', iso2: 'ss' },
    { code: '+34', label: 'Spain', iso2: 'es' },
    { code: '+94', label: 'Sri Lanka', iso2: 'lk' },
    { code: '+249', label: 'Sudan', iso2: 'sd' },
    { code: '+597', label: 'Suriname', iso2: 'sr' },
    { code: '+46', label: 'Sweden', iso2: 'se' },
    { code: '+41', label: 'Switzerland', iso2: 'ch' },
    { code: '+963', label: 'Syria', iso2: 'sy' },
    { code: '+886', label: 'Taiwan', iso2: 'tw' },
    { code: '+992', label: 'Tajikistan', iso2: 'tj' },
    { code: '+255', label: 'Tanzania', iso2: 'tz' },
    { code: '+66', label: 'Thailand', iso2: 'th' },
    { code: '+670', label: 'Timor-Leste', iso2: 'tl' },
    { code: '+228', label: 'Togo', iso2: 'tg' },
    { code: '+690', label: 'Tokelau', iso2: 'tk' },
    { code: '+676', label: 'Tonga', iso2: 'to' },
    { code: '+1868', label: 'Trinidad and Tobago', iso2: 'tt' },
    { code: '+216', label: 'Tunisia', iso2: 'tn' },
    { code: '+90', label: 'Turkey', iso2: 'tr' },
    { code: '+993', label: 'Turkmenistan', iso2: 'tm' },
    { code: '+1649', label: 'Turks and Caicos Islands', iso2: 'tc' },
    { code: '+688', label: 'Tuvalu', iso2: 'tv' },
    { code: '+256', label: 'Uganda', iso2: 'ug' },
    { code: '+380', label: 'Ukraine', iso2: 'ua' },
    { code: '+971', label: 'United Arab Emirates', iso2: 'ae' },
    { code: '+44', label: 'United Kingdom', iso2: 'gb' },
    { code: '+1', label: 'United States', iso2: 'us' },
    { code: '+598', label: 'Uruguay', iso2: 'uy' },
    { code: '+998', label: 'Uzbekistan', iso2: 'uz' },
    { code: '+678', label: 'Vanuatu', iso2: 'vu' },
    { code: '+379', label: 'Vatican City', iso2: 'va' },
    { code: '+58', label: 'Venezuela', iso2: 've' },
    { code: '+84', label: 'Vietnam', iso2: 'vn' },
    { code: '+1284', label: 'British Virgin Islands', iso2: 'vg' },
    { code: '+1340', label: 'U.S. Virgin Islands', iso2: 'vi' },
    { code: '+681', label: 'Wallis and Futuna', iso2: 'wf' },
    { code: '+212', label: 'Western Sahara', iso2: 'eh' },
    { code: '+967', label: 'Yemen', iso2: 'ye' },
    { code: '+260', label: 'Zambia', iso2: 'zm' },
    { code: '+263', label: 'Zimbabwe', iso2: 'zw' },
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

    const removeFile = (indexToRemove) => {
        setAttachedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
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
                                <option value="tech">Tech Support</option>
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
                            {attachedFiles.map((file, index) => (
                                <li key={`${file.name}-${index}`} className={styles.fileListItem}>
                                    <span className={styles.fileListItemName}>{file.name}</span>
                                    <button
                                        type="button"
                                        className={styles.fileListRemoveBtn}
                                        onClick={() => removeFile(index)}
                                        aria-label="Удалить файл"
                                    >
                                        <FiX size={14} />
                                    </button>
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
