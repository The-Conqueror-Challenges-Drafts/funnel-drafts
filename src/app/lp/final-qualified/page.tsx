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
      if (profile) {
        setContent((prevContent) => {
          if (prevContent['final-qualified']) {
            return {
              ...prevContent,
              'final-qualified': {
                ...prevContent['final-qualified'],
                header: {
                  ...prevContent['final-qualified'].header,
                  profile: profile
                }
              }
            };
          }
          return prevContent;
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

