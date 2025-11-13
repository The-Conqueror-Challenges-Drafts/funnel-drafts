"use client"

import React from 'react';
import QualificationQuiz from '@/components/content/qualification-quiz/qualification-quiz';

export default function Page() {
  const handleQuizComplete = (answers: Record<string, string>, profile: string) => {
    // Store profile in sessionStorage for transition page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('qualificationProfile', profile);
      sessionStorage.setItem('qualificationAnswers', JSON.stringify(answers));
    }
    // Redirect to transition page
    window.location.href = '/lp/qualification-transition';
  };

  return (
    <div className="min-h-screen bg-background">
      <QualificationQuiz onComplete={handleQuizComplete} />
    </div>
  );
}

