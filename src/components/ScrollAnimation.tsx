import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in-up' | 'fade-in' | 'scale-in';
  delay?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animationType = 'fade-in-up',
  delay = 0 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`animate-${animationType} ${className}`}
    >
      {children}
    </div>
  );
};