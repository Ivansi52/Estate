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

import {FiArrowRight} from 'react-icons/fi';

const FeedBack = () => {

    const [attachedFiles, setAttachedFiles] = useState([]);
    const [bottomErrors, setBottomErrors] = useState([]);
    const fileInputRef = useRef(null);

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
                        <input
                            type="tel" {...register('phone')}
                            placeholder="Phone" className={styles.inputField}/>
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
