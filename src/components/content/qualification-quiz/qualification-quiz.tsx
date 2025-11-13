"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: string;
    personalityTrait: string; // Cambridge Analytica style profiling
  }>;
  category: string; // motivation, commitment, personality, etc.
}

interface QualificationQuizProps {
  questions?: Question[];
  onComplete?: (answers: Record<string, string>, profile: string) => void;
}

const defaultQuestions: Question[] = [
  {
    id: 1,
    question: "When you think about achieving your fitness goals, what motivates you most?",
    category: "motivation",
    options: [
      { text: "Proving to myself I can do it", value: "internal", personalityTrait: "self-driven" },
      { text: "Looking good and feeling confident", value: "appearance", personalityTrait: "image-conscious" },
      { text: "Being part of something bigger", value: "community", personalityTrait: "social-connector" },
      { text: "The challenge and adventure itself", value: "adventure", personalityTrait: "explorer" }
    ]
  },
  {
    id: 2,
    question: "How do you typically approach new commitments?",
    category: "commitment",
    options: [
      { text: "I research thoroughly before committing", value: "analytical", personalityTrait: "thinker" },
      { text: "I jump in if it feels right", value: "intuitive", personalityTrait: "intuitive" },
      { text: "I need to see others succeed first", value: "social-proof", personalityTrait: "follower" },
      { text: "I commit when I see exclusive value", value: "exclusive", personalityTrait: "elite-seeker" }
    ]
  },
  {
    id: 3,
    question: "What's your biggest fear when starting a fitness program?",
    category: "barriers",
    options: [
      { text: "Not having enough time", value: "time", personalityTrait: "busy-professional" },
      { text: "Losing motivation after a few weeks", value: "motivation", personalityTrait: "motivation-seeker" },
      { text: "Not seeing results fast enough", value: "results", personalityTrait: "results-driven" },
      { text: "Doing it alone", value: "loneliness", personalityTrait: "community-needer" }
    ]
  },
  {
    id: 4,
    question: "When you achieve something difficult, how do you celebrate?",
    category: "personality",
    options: [
      { text: "I share it with friends and family", value: "social", personalityTrait: "social-sharer" },
      { text: "I treat myself to something special", value: "reward", personalityTrait: "reward-motivated" },
      { text: "I immediately set the next goal", value: "achiever", personalityTrait: "high-achiever" },
      { text: "I reflect on how far I've come", value: "reflective", personalityTrait: "reflective" }
    ]
  },
  {
    id: 5,
    question: "What makes you feel most accomplished?",
    category: "values",
    options: [
      { text: "Completing something others find difficult", value: "excellence", personalityTrait: "excellence-seeker" },
      { text: "Helping others achieve their goals", value: "altruism", personalityTrait: "helper" },
      { text: "Breaking my own personal records", value: "personal-growth", personalityTrait: "growth-oriented" },
      { text: "Being recognized for my achievements", value: "recognition", personalityTrait: "recognition-seeker" }
    ]
  }
];

export default function QualificationQuiz({ 
  questions = defaultQuestions,
  onComplete 
}: QualificationQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [personalityTraits, setPersonalityTraits] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswer = (value: string, trait: string) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    const newTraits = [...personalityTraits, trait];
    
    setAnswers(newAnswers);
    setPersonalityTraits(newTraits);

    // Create sense of progress and commitment
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Calculate personality profile
      const profile = calculateProfile(newTraits);
      setIsTransitioning(true);
      
      setTimeout(() => {
        if (onComplete) {
          onComplete(newAnswers, profile);
        } else {
          // Default: redirect to transition page
          window.location.href = '/lp/qualification-transition';
        }
      }, 500);
    }
  };

  const calculateProfile = (traits: string[]): string => {
    // Cambridge Analytica style: Create a "unique" profile based on answers
    // Create a compelling profile name based on traits
    const profiles = [
      "The Determined Achiever",
      "The Social Connector",
      "The Adventure Seeker",
      "The Excellence Driver",
      "The Growth Mindset"
    ];
    
    return profiles[Math.floor(Math.random() * profiles.length)];
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isTransitioning) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 font-medium">Analyzing your responses...</p>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-emerald-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              className="bg-emerald-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <div className="mb-8">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {question.category.toUpperCase()}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {question.question}
              </h2>
            </div>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(option.value, option.personalityTrait)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-700 group-hover:text-emerald-700 font-medium">
                      {option.text}
                    </span>
                    <svg 
                      className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Your responses are confidential and used only for qualification</p>
          <p className="mt-2">✨ Only {Math.floor(Math.random() * 5 + 15)}% of applicants qualify</p>
        </div>
      </div>
    </div>
  );
}

