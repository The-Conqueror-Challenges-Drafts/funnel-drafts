"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"

interface Question {
  id: number;
  question: string;
  type?: 'multiple-choice' | 'text';
  options?: Array<{
    text: string;
    value: string;
    personalityTrait: string; // Cambridge Analytica style profiling
  }>;
  category: string; // motivation, commitment, personality, etc.
  placeholder?: string;
}

interface QualificationQuizProps {
  questions?: Question[];
  onComplete?: (answers: Record<string, string>, profile: string) => void;
}

const defaultQuestions: Question[] = [
  {
    id: 1,
    question: "When you think about achieving your fitness goals, what motivates you most?",
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    question: "What has been holding you back from achieving your fitness goals?",
    type: "multiple-choice",
    category: "barriers",
    options: [
      { text: "Lack of time due to work/family commitments", value: "time-constraints", personalityTrait: "time-pressed" },
      { text: "Lack of motivation or willpower", value: "motivation-lack", personalityTrait: "motivation-seeker" },
      { text: "Not knowing where to start", value: "direction", personalityTrait: "guidance-needer" },
      { text: "Previous failures making me doubt myself", value: "self-doubt", personalityTrait: "confidence-builder" },
      { text: "Lack of accountability or support", value: "accountability", personalityTrait: "support-seeker" }
    ]
  },
  {
    id: 5,
    question: "What is your primary fitness objective for 2026?",
    type: "multiple-choice",
    category: "objectives",
    options: [
      { text: "Lose weight and improve body composition", value: "weight-loss", personalityTrait: "transformation-seeker" },
      { text: "Build strength and muscle", value: "strength", personalityTrait: "power-builder" },
      { text: "Improve cardiovascular health and endurance", value: "cardio", personalityTrait: "endurance-focused" },
      { text: "Establish a consistent exercise habit", value: "habit-formation", personalityTrait: "routine-builder" },
      { text: "Complete a specific challenge or event", value: "event-goal", personalityTrait: "goal-oriented" }
    ]
  },
  {
    id: 6,
    question: "When you achieve something difficult, how do you celebrate?",
    type: "multiple-choice",
    category: "personality",
    options: [
      { text: "I share it with friends and family", value: "social", personalityTrait: "social-sharer" },
      { text: "I treat myself to something special", value: "reward", personalityTrait: "reward-motivated" },
      { text: "I immediately set the next goal", value: "achiever", personalityTrait: "high-achiever" },
      { text: "I reflect on how far I've come", value: "reflective", personalityTrait: "reflective" }
    ]
  },
  {
    id: 7,
    question: "What makes you feel most accomplished?",
    type: "multiple-choice",
    category: "values",
    options: [
      { text: "Completing something others find difficult", value: "excellence", personalityTrait: "excellence-seeker" },
      { text: "Helping others achieve their goals", value: "altruism", personalityTrait: "helper" },
      { text: "Breaking my own personal records", value: "personal-growth", personalityTrait: "growth-oriented" },
      { text: "Being recognized for my achievements", value: "recognition", personalityTrait: "recognition-seeker" }
    ]
  },
  {
    id: 8,
    question: "Is there anything else you'd like to share about your fitness journey or goals?",
    type: "text",
    category: "additional",
    placeholder: "Tell us anything we didn't cover that you think is important..."
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
  const [textAnswer, setTextAnswer] = useState("");

  const handleAnswer = (value: string, trait?: string) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    const newTraits = trait ? [...personalityTraits, trait] : personalityTraits;
    
    setAnswers(newAnswers);
    setPersonalityTraits(newTraits);
    setTextAnswer(""); // Reset text input

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

  const handleTextSubmit = () => {
    if (textAnswer.trim()) {
      handleAnswer(textAnswer.trim());
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
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          {/* Urgency Banner */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-red-600 text-white rounded-lg p-4 mb-6 shadow-lg"
          >
            <p className="text-lg font-bold animate-pulse">⚠️ URGENT: Spots Filling Fast</p>
            <p className="text-sm mt-2">Only 3% of subsidized spots remaining</p>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-6"
          />

          {/* Urgency Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Analyzing Your Application...
            </h2>
            <p className="text-red-600 font-semibold text-lg">
              ⏱️ Processing your qualification now
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Hurry!</strong> Subsidized fund is almost depleted. Your spot will be reserved once qualified.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Application Banner */}
        <div className="bg-emerald-600 text-white rounded-lg p-4 mb-6 text-center">
          <p className="text-lg font-semibold">
            Complete the application form to reserve your spot
          </p>
        </div>

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

            {question.type === 'text' ? (
              <div className="space-y-4">
                <textarea
                  value={textAnswer}
                  onChange={(e) => setTextAnswer(e.target.value)}
                  placeholder={question.placeholder || "Type your answer here..."}
                  className="w-full min-h-[150px] p-4 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none text-lg text-gray-700 resize-y"
                  rows={5}
                />
                <Button
                  onClick={handleTextSubmit}
                  disabled={!textAnswer.trim()}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6 font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {question.options?.map((option, index) => (
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
            )}
          </motion.div>
        </AnimatePresence>

        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Your responses are confidential and used only for qualification</p>
          <p className="mt-2">✨ 49739 registered in the last 7 days</p>
        </div>
      </div>
    </div>
  );
}

