"use client"

import React from 'react';
import QualificationTransition from '@/components/content/qualification-transition/qualification-transition';

export default function Page() {
  // Get profile from sessionStorage
  const getProfile = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('qualificationProfile') || 'The Determined Achiever';
    }
    return 'The Determined Achiever';
  };

  return (
    <div className="min-h-screen bg-background">
      <QualificationTransition 
        profile={getProfile()}
        delay={3500}
        redirectUrl="/lp/final-qualified"
      />
    </div>
  );
}

