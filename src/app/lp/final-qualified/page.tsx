"use client"

import React, { useEffect, useState } from 'react';
import FinalQualified from '@/components/content/final-qualified/final-qualified';
import defaultContent from './content/c1.json';

export default function Page() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    // Get profile from sessionStorage and update content
    if (typeof window !== 'undefined') {
      const profile = sessionStorage.getItem('qualificationProfile');
      if (profile && content['final-qualified']) {
        setContent({
          ...content,
          'final-qualified': {
            ...content['final-qualified'],
            header: {
              ...content['final-qualified'].header,
              profile: profile
            }
          }
        });
      }
    }
  }, []);

  const props = content['final-qualified'] || {};

  return (
    <div className="min-h-screen bg-background">
      <FinalQualified {...props} />
    </div>
  );
}

