import { useEffect, useRef, useState } from "react";

const useCountUp = (endValue, duration = 2000, shouldStart = true) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStarted.current) return;

    hasStarted.current = true;
    let startTime = null;
    let animationFrameId = null;

    // Parse the numeric value from the end value
    const numericValue = parseFloat(endValue);
    if (isNaN(numericValue)) return;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentCount = Math.floor(progress * numericValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, duration, shouldStart]);

  return count;
};

export default useCountUp;
