import React from 'react';
import {useForm, useController} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {contactFormSchema} from '@/utils/validationSchemas'
import Image from 'next/image';
import styles from '@/styles/FeedBack.module.css';
import feedbackImg from '@/images/feedback.png';
import { getOptimizedImageProps } from '@/utils/imageOptimization';

import facebookIcon from '@/images/facebook.png';
import instagramIcon from '@/images/instagram.png';
import linkedinIcon from '@/images/linkdin.png';
import redditIcon from '@/images/reddit.png';

import person1 from '@/images/person_1.png';
import person2 from '@/images/person_2.png';
import person3 from '@/images/person_3.png';

import {FiArrowRight} from 'react-icons/fi';

const FeedBack = () => {

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

    const {register, handleSubmit, formState, watch, reset} = form;

    const {errors, isSubmitting, isValidating} = formState;

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
                        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                        <input
                            type="tel" {...register('phone')}
                            placeholder="Phone" className={styles.inputField}/>
                        {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
                    </div>

                    <div className={styles.inputRow}>
                        <input type="email" {...register('email')} placeholder="Email"
                               className={styles.inputField}/>
                        {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                        <select {...register('service')} className={styles.selectField}>
                            <option value="" disabled>Choose service</option>
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        {errors.service && <span className={styles.errorText}>{errors.service.message}</span>}
                    </div>

                    <textarea
                        {...register('description')}
                        placeholder="Task description"
                        className={styles.textArea}
                        rows={5}
                    />
                    {errors.description && <span className={styles.errorText}>{errors.description.message}</span>}

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox" {...register('privacyPolicy')}
                            className={styles.checkbox}/>
                        {errors.privacyPolicy && <span className={styles.errorText}>{errors.privacyPolicy.message}</span>}
                        <span>I agree to the Privacy Policy</span>
                    </label>

                    <button type="submit" disabled={isSubmitting} className={styles.sendButton}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                        <span className={styles.arrowCircle}>
              <FiArrowRight size={20} color="white"/>
            </span>
                    </button>
                </form>

                {/* Прямоугольник с соц. сетями в правом нижнем углу */}
                <div className={styles.socialBox}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(facebookIcon, "Facebook", 24, 24)}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image {...getOptimizedImageProps(instagramIcon, "Instagram", 24, 24)}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
