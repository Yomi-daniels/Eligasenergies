import { useEffect, useRef, useState } from "react";
import useCountUp from "../hooks/useCountUp";

const CounterStat = ({ value, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extract numeric part and suffix
  const numericPart = parseFloat(value);
  const suffix = value.replace(/^[\d.]+/, "");

  const count = useCountUp(numericPart, 2000, isVisible);

  return (
    <div
      ref={elementRef}
      className="text-center animate-scale-in"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-1 sm:mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-secondary-foreground/80 text-sm sm:text-base lg:text-lg">{label}</div>
    </div>
  );
};

export default CounterStat;
