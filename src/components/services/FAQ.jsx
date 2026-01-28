import { useState } from 'react';
import styles from '@/styles/FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does a website/project cost?",
      answer: "The cost of a website or project depends on various factors including complexity, features, design requirements, and timeline. We provide customized quotes based on your specific needs. Contact us for a detailed estimate tailored to your project."
    },
    {
      question: "How long does it take to implement your solution?",
      answer: "Typically, implementation takes 2-4 weeks depending on the complexity of your business processes."
    },
    {
      question: "Do you offer customization services?",
      answer: "Yes, we provide custom solutions tailored to your specific business needs."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support and regular software updates."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Our solution supports integration with most popular CRM and ERP systems."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, bank transfers, and various online payment methods."
    }
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={styles.headerWrapper}>
            <div className={styles.number}>05</div>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>
                Frequently asked{' '}
                <span className={styles.highlightedWord}>questions</span>
              </h2>
              <p className={styles.description}>
                We've gathered answers to the questions our clients ask most often. 
                If you don't find what you're looking for, just write to us — we'll respond personally.
              </p>
            </div>
          </div>

          <div className={styles.blueCard}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Still have a question?</h2>
              <p className={styles.cardDescription}>
                If you still have any questions or need more information, feel free to reach out to us. 
                Our team is always ready to help and provide the support you need to make the best decision for your business.
              </p>
            </div>
            <button className={styles.requestButton}>
              Request a Callback
              <span className={styles.arrowCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ffffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.accordion}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.arrow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#0344DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${activeIndex === index ? styles.show : ''}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
