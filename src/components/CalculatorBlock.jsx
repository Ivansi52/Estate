import React, { useState, useMemo, useEffect, useRef, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/CalculatorBlock.module.css';

const BrandBlue = '#0344DC';

// Column-aware default side for tooltips
const TooltipSideContext = React.createContext('left');

// -----------------------------
// Data
// -----------------------------
const tariffs = [
  {
    name: 'Business Card Site',
    days: '7–10 days',
    price: 400,
    pagesLabel: 'up to 7 sections',
    desc:
      'Great for startups, personal portfolios, promos and events when speed and lean budget matter.',
    costIncludes:
      'Includes template selection, copywriting, contact forms and QA testing.',
    includes: [
      'Modern template — Focused hero with a clear core offer',
      '100% responsive — Perfect on phone, tablet and desktop',
      'Logical structure — Persuasive copy with a concrete CTA',
      'Every lead under control — Submissions go to messenger, email or CRM immediately',
    ],
  },
  {
    name: 'Landing Page',
    days: '10–14 days',
    price: 700,
    pagesLabel: 'single page',
    desc:
      'Ideal for B2C companies, local businesses, info‑products, experts and service professionals. Perfect for ads.',
    costIncludes:
      'A one‑page conversion website: sharp offer, benefits, social proof and strong CTA. Perfect for ads.',
    includes: [
      'Custom design — Memorable look that stands out among competitors',
      'Technical SEO — Optimized for Google indexing',
      'Sales funnel — Page structure built to lift conversion and revenue',
      'WordPress — Admin panel easily manageable by a developer',
      'Content marketing — Each block tailored to audience needs and intent',
      'Analytics setup — Google Analytics 4 and Yandex Metrica integration',
      'Fast loading — Reduced page weight to minimize bounce rate',
    ],
  },
  {
    name: 'Corporate Website',
    days: '21–28 days',
    price: 1200,
    pagesLabel: 'up to 5 pages',
    desc:
      'Best for clinics, online schools, beauty salons, law firms and similar service businesses.',
    costIncludes:
      'Multi‑page site: analytics, expert copy, basic integrations, search optimization',
    includes: [
      'Corporate design — Signals status and trust from the first screen',
      'Advanced SEO — On‑page optimization with regional targeting',
      'Marketing structure — 5+ pages aligned to products and ICP segments',
      'Business analytics — Competitor and user‑journey analysis to grow conversion',
      'Expert copywriting — Value, USP and objection handling',
      'Web analytics integration — GA4 conversion tracking and reporting',
      'Core Web Vitals — Fast, stable, responsive UX',
      'Responsive layout — Cross‑device and cross‑browser support',
    ],
  },
  {
    name: 'Enterprise',
    days: '30–45 days',
    price: 3000,
    pagesLabel: 'up to 10 pages',
    desc:
      'Great for B2B, manufacturers, developers and large projects.',
    costIncludes:
      '10+ sections, Local SEO, CRM/ERP integrations, security and performance under load.',
    includes: [
      'Corporate design (PRO) — Trusted partner look on a market‑leader level',
      'Corporate SEO (PRO) — Regional subdomains, clustering, LSI, schema',
      'Custom code development (PRO) — 10+ pages: catalogs, cases, industry solutions, blog, knowledge base',
      'Business analytics (PRO) — Deep data & journey analysis to increase conversion',
      'Expert copywriting — Benefits, USP, objection handling',
      'End‑to‑end analytics — GA4, call tracking, UTM, multi‑channel lead accounting',
      'Full automation (PRO) — CRM / Kommo / ERP, IP‑telephony',
      'Responsive layout — Correct on every device and browser',
    ],
  },
  {
    name: 'Online Store',
    days: '45–60 days',
    price: 3000,
    pagesLabel: 'up to 20 categories',
    desc:
      'For e‑commerce where conversion, repeat sales and unit economics are key.',
    costIncludes:
      'Catalog, search & filters, quick checkout, notifications and e‑commerce analytics.',
    includes: [
      'E‑commerce design — Focus on purchase: clear CTAs, trust, no distractions',
      'Catalog & product cards — Variants (color/size), compare, wishlist',
      'Filters & fast search — Speed up product discovery and improve PDP views',
      'Simplified checkout — Fewer fields/steps → fewer abandoned carts',
      'Notifications — Email/WhatsApp about orders and statuses',
      'Sales analytics — GA4 + e‑commerce events for funnel control',
      'Integration‑ready — CRM, inventory, delivery, accounting',
      'Loyalty mechanics — Coupons, discounts, promos to boost repeat orders',
    ],
  },
];

// Languages
const LANGS = [
  { code: 'EN', title: 'English' },
  { code: 'ES', title: 'Spanish' },
  { code: 'DE', title: 'German' },
  { code: 'RU', title: 'Russian' },
];

// -----------------------------
// Inline SVG flags (local, circular, no white gaps)
// -----------------------------
function FlagSVG({ code }) {
  switch (code) {
    case 'RU':
      return (
        <svg viewBox="0 0 640 480" className={styles.flagSVG} role="img" aria-label="RU" preserveAspectRatio="xMidYMid slice">
          <rect width="640" height="480" fill="#ffffff" />
          <rect y="160" width="640" height="160" fill="#0039A6" />
          <rect y="320" width="640" height="160" fill="#D52B1E" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 640 480" className={styles.flagSVG} role="img" aria-label="DE" preserveAspectRatio="xMidYMid slice">
          <rect width="640" height="480" fill="#000000" />
          <rect y="160" width="640" height="160" fill="#DD0000" />
          <rect y="320" width="640" height="160" fill="#FFCE00" />
        </svg>
      );
    case 'ES':
      return (
        <svg viewBox="0 0 640 480" className={styles.flagSVG} role="img" aria-label="ES" preserveAspectRatio="xMidYMid slice">
          <rect width="640" height="480" fill="#AA151B" />
          <rect y="120" width="640" height="240" fill="#F1BF00" />
        </svg>
      );
    case 'EN':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSVG} role="img" aria-label="GB" preserveAspectRatio="xMidYMid slice">
          <rect width="60" height="30" fill="#012169" />
          {/* white diagonals */}
          <path d="M0 0 L6 0 L60 24 L60 30 L54 30 L0 6 Z" fill="#FFF" />
          <path d="M60 0 L54 0 0 24 0 30 6 30 60 6 Z" fill="#FFF" />
          {/* red diagonals (offset) */}
          <path d="M0 0 L2.5 0 60 22.5 60 30 57.5 30 0 7.5 Z" fill="#C8102E" />
          <path d="M60 0 L57.5 0 0 22.5 0 30 2.5 30 60 7.5 Z" fill="#C8102E" />
          {/* white cross */}
          <rect x="0" y="12" width="60" height="6" fill="#FFF" />
          <rect x="27" y="0" width="6" height="30" fill="#FFF" />
          {/* red cross */}
          <rect x="0" y="13.5" width="60" height="3" fill="#C8102E" />
          <rect x="28.5" y="0" width="3" height="30" fill="#C8102E" />
        </svg>
      );
    default:
      return <svg viewBox="0 0 1 1" className={styles.flagSVG} aria-hidden="true" />;
  }
}

function FlagCircle({ code }) {
  return (
    <div className={styles.flagCircle} aria-label={code}>
      <FlagSVG code={code} />
    </div>
  );
}

// -----------------------------
// Animated number without layout jumps
// -----------------------------
function useAnimatedNumber(value, duration = 400) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const fromRef = useRef(value);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    fromRef.current = display;

    const step = (now) => {
      const t = Math.min(1, (now - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(fromRef.current + (value - fromRef.current) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return display;
}

// -----------------------------
// Tooltip (portal + fixed positioning + scroll-close)
// -----------------------------
function TooltipIcon({ text, side }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [effectiveSide, setEffectiveSide] = useState(side ?? 'left');
  const columnSide = useContext(TooltipSideContext);

  const measureAndPlace = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();

    const margin = 12;
    const preferredSide = side ?? columnSide;
    setEffectiveSide(preferredSide);

    // position: fixed — centered relative to trigger
    const top = r.top + r.height / 2;
    const left = preferredSide === 'right' ? r.right + margin : r.left - margin;
    setPos({ top, left });
  }, [side, columnSide]);

  useEffect(() => {
    if (!open) return;
    measureAndPlace();
    const onScroll = () => setOpen(false); // close on scroll
    const onResize = () => measureAndPlace();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [open, measureAndPlace]);

  if (!text) return null;

  return (
    <span
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className={styles.tooltipIcon}
      aria-label="Show tooltip"
      aria-expanded={open}
    >
      ?
      {open &&
        createPortal(
          <div
            className={styles.tooltipPortal}
            style={{
              top: pos.top,
              left: pos.left,
              transform: effectiveSide === 'right' ? 'translateY(-50%)' : 'translate(-100%, -50%)',
            }}
          >
            <div className={styles.tooltipContent}>
              <div
                className={styles.tooltipText}
                style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {text}
              </div>
            </div>
          </div>,
          document.body
        )}
    </span>
  );
}

// -----------------------------
// Small UI blocks
// -----------------------------
function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Switch({ checked, onChange }) {
  return (
    <div
      onClick={onChange}
      className={`${styles.switch} ${checked ? styles.switchChecked : styles.switchUnchecked}`}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onChange?.();
      }}
    >
      <div
        className={`${styles.switchThumb} ${checked ? styles.switchThumbChecked : styles.switchThumbUnchecked}`}
      >
        {checked ? '✓' : '✕'}
      </div>
    </div>
  );
}

function Toggle({ label, tooltip, checked, onChange }) {
  return (
    <div className={styles.toggleContainer}>
      <span className={styles.toggleLabel}>
        {label}
        <TooltipIcon text={tooltip} />
      </span>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}

// -----------------------------
// Main Component
// -----------------------------
export default function CalculatorBlock() {
  const [selectedTariff, setSelectedTariff] = useState(tariffs[0]);
  const [designCustom, setDesignCustom] = useState(false);
  const [designPremium, setDesignPremium] = useState(false);
  const [extraLangs, setExtraLangs] = useState([]);
  const [primaryLang, setPrimaryLang] = useState(null);
  const [integrations, setIntegrations] = useState({ hubspot: false, whatsapp: false, stripe: false });
  const [chatbot, setChatbot] = useState(false);
  const [googleProfile, setGoogleProfile] = useState(false);
  const [logo, setLogo] = useState(false);
  const [ads, setAds] = useState(false);
  const [seoPlan, setSeoPlan] = useState('none');

  // Support days per tariff
  const supportDays = useMemo(() => {
    switch (selectedTariff.name) {
      case 'Business Card Site':
        return 30;
      case 'Landing Page':
        return 45;
      case 'Corporate Website':
        return 60;
      case 'Enterprise':
        return 120;
      case 'Online Store':
        return 180;
      default:
        return 30;
    }
  }, [selectedTariff.name]);

  useEffect(() => {
    const isVisit = selectedTariff.name === 'Business Card Site';
    setDesignPremium(false);
    setDesignCustom(!isVisit);
  }, [selectedTariff]);

  // If primary language is chosen — exclude it from extra languages
  useEffect(() => {
    setExtraLangs((prev) => prev.filter((l) => l !== primaryLang));
  }, [primaryLang]);

  const toggleLang = (lang) => {
    if (!primaryLang) return; // pick primary first
    if (lang === primaryLang) return; // primary is free and not added to extras
    setExtraLangs((prev) => (prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]));
  };

  const togglePremium = () => {
    setDesignPremium((prev) => {
      const next = !prev;
      setDesignCustom(!next);
      return next;
    });
  };

  const total = useMemo(() => {
    let sum = selectedTariff.price;
    if (designPremium) sum += 1000;
    const paidLangs = extraLangs.filter((l) => l !== primaryLang);
    sum += paidLangs.length * 300;
    if (integrations.hubspot) sum += 500;
    if (integrations.whatsapp) sum += 300;
    if (integrations.stripe) sum += 250;
    if (chatbot) sum += 300;
    if (logo) sum += 100;
    if (ads) sum += 300;
    if (googleProfile) sum += 300;
    return sum;
  }, [selectedTariff, designPremium, extraLangs, primaryLang, integrations, logo, ads, chatbot, googleProfile]);

  const displayTotal = useAnimatedNumber(total, 400);

  const seoMonthlyPrice = useMemo(() => {
    switch (seoPlan) {
      case 'basic':
        return 300; // Local SEO
      case 'top10':
        return 700;
      case 'leader':
        return 1200;
      default:
        return 0;
    }
  }, [seoPlan]);

  // includes → [{label, tip}]
  const parsedIncludes = useMemo(() => {
    const SEP = /\s*[—–-]\s+/; // em dash, en dash, hyphen
    return (selectedTariff.includes || []).map((s) => {
      const idx = s.search(SEP);
      if (idx > -1) {
        const label = s.slice(0, idx).trim();
        const tip = s.slice(idx).replace(SEP, '').trim();
        return { label, tip };
      }
      return { label: s, tip: '' };
    });
  }, [selectedTariff.includes]);

  // -----------------------------
  // Estimate entries (Added to estimate)
  // -----------------------------
  const estimateEntries = useMemo(() => {
    const items = [];

    if (designPremium) {
      items.push({
        label: 'Premium design (3D + motion)',
        price: 1000,
        tip: 'Creates a wow‑effect: 3D and micro‑animations increase engagement and trust.',
      });
    }

    const paidLangs2 = extraLangs.filter((l) => l !== primaryLang);
    if (paidLangs2.length) {
      items.push({
        label: `Extra languages: ${paidLangs2.join(', ')}`,
        price: paidLangs2.length * 300,
        tip: 'Primary language is free. Extra languages expand reach and improve local SEO.',
      });
    }

    if (integrations.hubspot) {
      items.push({
        label: 'CRM integration (HubSpot/Kommo)',
        price: 500,
        tip: 'No lost leads: auto‑deals, SLA control and one‑click reports.',
      });
    }

    if (integrations.whatsapp) {
      items.push({
        label: 'WhatsApp API (AI assistants)',
        price: 300,
        tip: '24/7 responses, contact capture and first‑line qualification. Reduces team load.',
      });
    }

    if (integrations.stripe) {
      items.push({
        label: 'Online payments (Stripe/PayPal/Square)',
        price: 250,
        tip: 'Payment without cart: form/link + auto‑confirmation in CRM.',
      });
    }

    if (chatbot) {
      items.push({
        label: 'AI chatbot',
        price: 300,
        tip: 'Handles FAQs, captures contacts and qualifies leads 24/7.',
      });
    }

    if (ads) {
      items.push({
        label: 'Google Ads setup',
        price: 300,
        tip: 'Campaign setup, keyword selection and ongoing optimization for higher conversion.',
      });
    }

    if (logo) {
      items.push({
        label: 'Logo design',
        price: 100,
        tip: "Your brand's face: improves recall and differentiation.",
      });
    }

    if (googleProfile) {
      items.push({
        label: 'Google Business/Maps profile',
        price: 300,
        tip: 'Boosts credibility and builds a positive company image.',
      });
    }

    return items;
  }, [designPremium, extraLangs, primaryLang, integrations, logo, ads, chatbot, googleProfile]);

  const showDesignSection = selectedTariff.name !== 'Business Card Site';

  return (
      <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Website Cost Calculator</h1>
        <p className={styles.headerSubtitle}>Pick your project options and get a personalized estimate</p>
      </div>

      <div className={styles.mainGrid}>
        {/* LEFT: Controls */}
        <TooltipSideContext.Provider value="right">
          <div className={styles.leftColumn}>
            <Section title="Website type">
              <p className={styles.sectionDescription}>{selectedTariff.desc}</p>
              <div className={styles.tariffGrid}>
                {tariffs.map((tariff) => (
                  <button
                    key={tariff.name}
                    onClick={() => setSelectedTariff(tariff)}
                    className={`${styles.tariffButton} ${
                      selectedTariff.name === tariff.name
                        ? styles.tariffButtonActive
                        : ''
                    }`}
                  >
                    <div className={styles.tariffButtonContent}>
                      <div className={styles.tariffName}>
                        {tariff.name}
                        <TooltipIcon side="right" text={tariff.costIncludes || tariff.desc} />
                      </div>
                      <div className={styles.tariffDays}>{tariff.days}</div>
                    </div>
                    <Switch checked={selectedTariff.name === tariff.name} onChange={() => setSelectedTariff(tariff)} />
                  </button>
                ))}
              </div>
            </Section>

            {showDesignSection && (
              <Section title="Design">
                <Toggle
                  label={<span className={styles.toggleLabelInline}>Custom design <span className={styles.toggleLabelOpacity}>(included)</span> <span className={styles.toggleLabelIcon}>🔒</span></span>}
                  tooltip="Custom visual style is included in the price"
                  checked={true}
                  onChange={() => {}}
                />
                <Toggle
                  label="Premium design (3D + motion)"
                  tooltip="3D elements, animations and micro‑interactions for a wow‑effect and memorability."
                  checked={designPremium}
                  onChange={togglePremium}
                />
              </Section>
            )}

            {/* Integrations */}
            <Section title="Integrations">
              <Toggle
                label="HubSpot / Kommo CRM"
                tooltip="No lost leads: deals are created automatically, SLA under control, one‑click reporting."
                checked={integrations.hubspot}
                onChange={() => setIntegrations({ ...integrations, hubspot: !integrations.hubspot })}
              />
              <Toggle
                label="WhatsApp API (AI assistants)"
                tooltip="24/7 answers, contact capture and qualification. Cuts time‑to‑first‑response and team load."
                checked={integrations.whatsapp}
                onChange={() => setIntegrations({ ...integrations, whatsapp: !integrations.whatsapp })}
              />
              <Toggle
                label="Online payments"
                tooltip="Payment without a cart: form/link + auto‑confirmation in CRM."
                checked={integrations.stripe}
                onChange={() => setIntegrations({ ...integrations, stripe: !integrations.stripe })}
              />
            </Section>

            {/* Add‑ons */}
            <Section title="Add‑ons">
              <Toggle
                label="Logo design"
                tooltip="Your company's face: helps people remember you and recognize your brand."
                checked={logo}
                onChange={() => setLogo(!logo)}
              />
              <Toggle
                label="Google Ads setup"
                tooltip="Campaign setup, keyword research and ongoing optimization to improve conversion."
                checked={ads}
                onChange={() => setAds(!ads)}
              />
              <Toggle
                label="Google Business & Maps profile"
                tooltip="A verified Google profile increases trust and builds a positive brand image."
                checked={googleProfile}
                onChange={() => setGoogleProfile(!googleProfile)}
              />
              <Toggle
                label="AI chatbot"
                tooltip="Shorter response time, handles FAQs and captures contacts 24/7."
                checked={chatbot}
                onChange={() => setChatbot(!chatbot)}
              />
            </Section>

            {/* SEO (above languages) */}
            <Section title="SEO">
              <div className={styles.seoSection}>
                <Toggle
                  label="Local SEO"
                  tooltip="Optimize for your city/region: location pages, NAP signals, Google Business, local links."
                  checked={seoPlan === 'basic'}
                  onChange={() => setSeoPlan(seoPlan === 'basic' ? 'none' : 'basic')}
                />
                <Toggle
                  label="Top‑10 Google (min. 6 months)"
                  tooltip="Priority clusters with content hubs and link building. 6+ month horizon."
                  checked={seoPlan === 'top10'}
                  onChange={() => setSeoPlan(seoPlan === 'top10' ? 'none' : 'top10')}
                />
                <Toggle
                  label="Market leader (min. 12 months)"
                  tooltip="Category dominance: scaled content, authority links, reputation management. 12+ month horizon."
                  checked={seoPlan === 'leader'}
                  onChange={() => setSeoPlan(seoPlan === 'leader' ? 'none' : 'leader')}
                />
              </div>
            </Section>

            {/* Languages — primary first, then extras. Primary does not affect price */}
            <Section title="Languages">
              <p className={styles.sectionDescription}>Choose your website language. The primary language does not affect the price.</p>
              <div className={styles.languagesSection}>
                <div className={styles.languageGroup}>
                  <div className={styles.languageLabel}>Primary language</div>
                  <div className={styles.languageButtons}>
                    {LANGS.map((lang) => (
                      <motion.button
                        key={`primary-${lang.code}`}
                        onClick={() => setPrimaryLang(lang.code)}
                        className={`${styles.flagButton} ${
                          primaryLang === lang.code ? styles.flagButtonActive : ''
                        }`}
                      >
                        <FlagCircle code={lang.code} />
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div className={styles.languageGroup}>
                  <div className={styles.languageLabel}>Extra languages</div>
                  <div className={styles.languageButtons}>
                    {LANGS.filter((l) => l.code !== primaryLang).map((lang) => (
                      <motion.button
                        key={`extra-${lang.code}`}
                        disabled={!primaryLang}
                        onClick={() => toggleLang(lang.code)}
                        className={`${styles.flagButton} ${
                          extraLangs.includes(lang.code) ? styles.flagButtonActive : ''
                        } ${!primaryLang ? styles.flagButtonDisabled : ''}`}
                      >
                        <FlagCircle code={lang.code} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </TooltipSideContext.Provider>

        {/* RIGHT: Estimate */}
        <TooltipSideContext.Provider value="left">
          <div className={styles.rightColumn}>
            <motion.div layout className={styles.estimateCard}>
              <div className={styles.estimateHeader}>
                <h3 className={styles.estimateTitle}>Your estimate</h3>
                {selectedTariff.pagesLabel && (
                  <div className={styles.pagesLabel}>
                    <span className={styles.pagesLabelText}>{selectedTariff.pagesLabel}</span>
                  </div>
                )}
              </div>

              <motion.div
                layout
                className={styles.priceDisplay}
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {'$'}{displayTotal}
              </motion.div>
              <p className={styles.timeline}>Timeline: {selectedTariff.days}</p>

              {/* CTA before details */}
              <button className={styles.ctaButton}>Request a quote</button>

              <div className={styles.estimateDetails}>
                {/* Included */}
                <div className={styles.detailsSection}>
                  <h4 className={styles.detailsTitle}>Included in the plan</h4>
                  <div className={styles.detailsSection}>
                    {parsedIncludes.map(({ label, tip }, i) => {
                      const isPro = /(PRO)/.test(label);
                      const cleanLabel = label.replace(' (PRO)', '');
                      return (
                        <div key={i} className={styles.includedItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <div className={styles.includedLabel}>
                            <span className={styles.includedText}>{cleanLabel}</span>
                            {tip && <TooltipIcon text={tip} />}
                          </div>
                          {isPro && (
                            <span className={styles.proBadge}><span aria-hidden="true">👑</span><span aria-hidden="true">PRO</span></span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Added to estimate */}
                {estimateEntries.length > 0 && (
                  <div className={styles.detailsSection}>
                    <h4 className={styles.detailsTitle}>Added to estimate</h4>
                    <div className={styles.detailsSection}>
                      {estimateEntries.map((entry, i) => (
                        <div key={i} className={styles.addedItem}>
                          <div className={styles.addedLabel}>
                            <span className={styles.addedText}>{entry.label}</span>
                            <TooltipIcon text={entry.tip} />
                          </div>
                          <span className={styles.addedPrice}>{'$'}{entry.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Monthly services */}
                {seoPlan !== 'none' && (
                  <div className={styles.detailsSection}>
                    <h4 className={styles.detailsTitle}>Monthly services</h4>
                    <div className={styles.addedItem}>
                      <div className={styles.addedLabel}>
                        <span className={styles.addedText}>
                          {seoPlan === 'basic' ? 'Local SEO' : seoPlan === 'top10' ? 'Top‑10 Google' : 'Market leader'}
            </span>
                        <TooltipIcon
                          text={
                            seoPlan === 'basic'
                              ? 'Optimize for your city/region: location pages, NAP, Google Business, local links.'
                              : seoPlan === 'top10'
                              ? 'Goal — Top‑10 for priority clusters. Minimum 6 months.'
                              : 'Niche dominance. Minimum 12 months.'
                          }
                        />
                      </div>
                      <span className={styles.addedPrice}>{'$'}{seoMonthlyPrice}/mo</span>
                    </div>
                  </div>
                )}

                {/* Pricing note */}
                <div className={styles.infoBox}>
                  Pricing may vary depending on project complexity, required integrations and tools.
                </div>
              </div>

              <div className={styles.supportBox}>
                <span>Support: {supportDays} days included.</span>
                <span className={styles.supportText}>Can be extended on request.</span>
        </div>
            </motion.div>
        </div>
        </TooltipSideContext.Provider>
      </div>

      {/* FOOTER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTariff.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35 }}
          className={styles.footer}
        >
          {/* empty by spec */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
