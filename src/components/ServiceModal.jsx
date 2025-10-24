import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/utils/validationSchemas';
import { FiX, FiArrowRight } from 'react-icons/fi';
import styles from '@/styles/ServiceModal.module.css';

const ServiceModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: serviceTitle || '',
      description: '',
      privacyPolicy: false
    },
    mode: 'onChange'
  });

  const { register, handleSubmit, formState: { errors }, reset } = form;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Request submitted successfully! We will contact you soon.');
        reset();
        onClose();
      } else {
        alert('Error submitting request. Please try again.');
      }
    } catch (error) {
      console.error('Error', error);
      alert('Error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX size={24} />
        </button>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Request {serviceTitle}</h2>
          <p className={styles.subtitle}>
            Fill out the form and we'll get back to you within 24 hours
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputRow}>
            <input 
              type="text" 
              {...register('name')} 
              placeholder="Your Name"
              className={styles.input}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            
            <input
              type="tel" 
              {...register('phone')}
              placeholder="Phone Number"
              className={styles.input}
            />
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </div>

          <div className={styles.inputRow}>
            <input 
              type="email" 
              {...register('email')} 
              placeholder="Email Address"
              className={styles.input}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            
            <input
              type="text"
              {...register('service')}
              value={serviceTitle}
              readOnly
              className={`${styles.input} ${styles.readonly}`}
            />
          </div>

          <textarea
            {...register('description')}
            placeholder="Tell us about your project requirements..."
            className={styles.textarea}
            rows={4}
          />
          {errors.description && <span className={styles.error}>{errors.description.message}</span>}

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox" 
              {...register('privacyPolicy')}
              className={styles.checkbox}
            />
            <span>I agree to the Privacy Policy</span>
            {errors.privacyPolicy && <span className={styles.error}>{errors.privacyPolicy.message}</span>}
          </label>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className={styles.submitButton}
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
            <FiArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
