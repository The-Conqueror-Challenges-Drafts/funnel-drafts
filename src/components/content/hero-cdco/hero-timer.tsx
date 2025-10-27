import React, { useState, useEffect } from 'react';

const TimerCountUp: React.FC = () => {
  const initialSeconds = 40; // Start from 40 seconds
  const [elapsed, setElapsed] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prevElapsed) => prevElapsed + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
       {formatTime(elapsed)}
    </>
  );
};

export default TimerCountUp;
