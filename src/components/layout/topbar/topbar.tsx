import React from 'react';
import Timer from '@/components/ui/conq/timer';

interface TopbarProps {
  'topbar-cta-text': string;
  'topbar-cta-link': string;
  'topbar-timer-duration'?: number;
  'topbar-timer-format'?: string;
}

const Topbar: React.FC<TopbarProps> = ({
  'topbar-cta-text': ctaText,
  'topbar-cta-link': ctaLink,
  'topbar-timer-duration': timerDuration = 300,
  'topbar-timer-format': timerFormat = 'mm:ss'
}) => {
  return (
    <div className="w-full py-3 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        {/* CTA Button */}
        <a 
          href={ctaLink}
          className="px-4 py-2 text-sm font-medium"
        >
          {ctaText}
        </a>
        
        {/* Timer */}
        <Timer
          timer-duration={timerDuration}
          timer-format={timerFormat as 'mm:ss' | 'hh:mm:ss'}
        />
      </div>
    </div>
  );
};

export default Topbar;