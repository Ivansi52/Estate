// Утилита для оптимизации изображений
export const getOptimizedImageProps = (src, alt, width, height, priority = false) => {
  const props = {
    src,
    alt,
    priority,
    quality: 85, // Качество WebP (85% - оптимальный баланс)
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  };

  // Добавляем width и height только если они больше 0
  if (width > 0) props.width = width;
  if (height > 0) props.height = height;

  return props;
};

// Функция для получения WebP URL
export const getWebPUrl = (originalSrc) => {
  // Next.js автоматически конвертирует в WebP при использовании Image компонента
  return originalSrc;
};

// Функция для предзагрузки критических изображений
export const preloadCriticalImages = (imageUrls) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// Функция для ленивой загрузки изображений
export const lazyLoadImage = (src, callback) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    });
    
    return observer;
  }
  return null;
};
