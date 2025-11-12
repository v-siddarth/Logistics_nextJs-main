 
'use client';

import { useEffect, useRef } from 'react';

const ScrollToTop = () => {
  const progressRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progressPath = progressRef.current;
    const container = containerRef.current;

    if (!progressPath || !container) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scrollTop * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        container.classList.add('active-progress');
      } else {
        container.classList.remove('active-progress');
      }
    };

    const handleScroll = () => {
      updateProgress();
      toggleVisibility();
    };

    updateProgress();
    toggleVisibility();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="prgoress_scrollup"
      onClick={scrollToTop}
      ref={containerRef}
      style={{ cursor: 'pointer' }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <path
          ref={progressRef}
          d="M50,1 a49,49 0 1,1 0,98 a49,49 0 1,1 0,-98"
          stroke="#000"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
