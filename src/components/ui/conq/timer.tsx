'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
  'timer-duration'?: number; // in seconds
  'timer-format'?: 'mm:ss' | 'hh:mm:ss';
  'timer-on-complete'?: () => void;
}

const Timer: React.FC<TimerProps> = ({
  'timer-duration': duration = 300, // 5 minutes default
  'timer-format': format = 'mm:ss',
  'timer-on-complete': onComplete
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false);
            if (onComplete) {
              onComplete();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (format === 'hh:mm:ss') {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  };

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsActive(true);
  };

  return (
    <div className="inline-flex items-center space-x-2 px-3 py-2 rounded border border-white/20 bg-transparent text-white">
      <span className="text-sm font-mono">
        {formatTime(timeLeft)}
      </span>
      {!isActive && timeLeft === 0 && (
        <button
          onClick={resetTimer}
          className="text-xs underline hover:no-underline text-white"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Timer;
