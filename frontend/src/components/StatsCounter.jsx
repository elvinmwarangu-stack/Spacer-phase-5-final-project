
import { useState, useEffect } from 'react';

const StatsCounter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}+</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCounter;