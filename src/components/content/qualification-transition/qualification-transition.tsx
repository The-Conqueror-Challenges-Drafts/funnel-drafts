"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useRouter } from "next/navigation"

interface QualificationTransitionProps {
  profile?: string;
  delay?: number;
  redirectUrl?: string;
}

export default function QualificationTransition({
  profile = "The Determined Achiever",
  delay = 5000,
  redirectUrl = "/lp/final-qualified"
}: QualificationTransitionProps) {
  const router = useRouter();
  const [stage, setStage] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState(3);
  const [fundRemaining, setFundRemaining] = useState(3);

  const stages = [
    { text: "Analyzing your responses...", icon: "🔍", urgency: false },
    { text: "Calculating your personality profile...", icon: "🧠", urgency: false },
    { text: "Matching you with the perfect program...", icon: "⚡", urgency: false },
    { text: "Checking available spots...", icon: "📍", urgency: true },
    { text: "Verifying subsidize fund availability...", icon: "💰", urgency: true },
    { text: "Confirming your qualification status...", icon: "✅", urgency: false }
  ];

  useEffect(() => {
    const totalStages = stages.length;
    
    // Stage progression
    const stageInterval = setInterval(() => {
      setStage(prev => {
        if (prev < totalStages - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, delay / totalStages);

    // Show result after all stages
    const resultTimeout = setTimeout(() => {
      setShowResult(true);
    }, delay - 500);

    // Redirect after showing result
    const redirectTimeout = setTimeout(() => {
      router.push(redirectUrl);
    }, delay + 2000);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(resultTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [delay, router, redirectUrl]);

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      stages[stage]?.urgency 
        ? 'bg-gradient-to-br from-red-50 via-orange-50 to-red-50' 
        : 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50'
    }`}>
      <div className="max-w-2xl w-full text-center">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Urgency Banner for Spot/Fund Check Stages */}
              {stages[stage]?.urgency && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-red-600 text-white rounded-lg p-4 mb-4 shadow-lg"
                >
                  <p className="text-lg font-bold animate-pulse">⚠️ URGENT CHECK IN PROGRESS</p>
                  {stage === 3 && (
                    <p className="text-sm mt-2">Verifying only {spotsRemaining}% spots remaining...</p>
                  )}
                  {stage === 4 && (
                    <p className="text-sm mt-2">Confirming {fundRemaining}% subsidize fund available...</p>
                  )}
                </motion.div>
              )}

              {/* Animated Logo/Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity }
                }}
                className="text-6xl mb-8"
              >
                {stages[stage]?.urgency ? '⏱️' : '⚡'}
              </motion.div>

              {/* Current Stage */}
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="text-4xl mb-4">{stages[stage].icon}</div>
                <h2 className={`text-3xl md:text-4xl font-bold ${
                  stages[stage]?.urgency ? 'text-red-700' : 'text-gray-900'
                }`}>
                  {stages[stage].text}
                </h2>
                {stages[stage]?.urgency && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 font-semibold text-lg mt-2"
                  >
                    This may take a moment...
                  </motion.p>
                )}
              </motion.div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2">
                {stages.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= stage 
                        ? (stages[index]?.urgency ? 'bg-red-600' : 'bg-emerald-600')
                        : 'bg-gray-300'
                    }`}
                    animate={{
                      scale: index === stage ? [1, 1.3, 1] : 1
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: index === stage ? Infinity : 0
                    }}
                  />
                ))}
              </div>

              {/* Loading Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                <motion.div
                  className={`h-2 rounded-full ${
                    stages[stage]?.urgency ? 'bg-red-600' : 'bg-emerald-600'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: delay / 1000, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="text-7xl mb-4"
              >
                ✅
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Congratulations!
              </h1>
              
              <p className="text-2xl text-emerald-600 font-semibold mb-2">
                You&apos;ve Been Qualified
              </p>
              
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Based on your unique profile: <strong>{profile}</strong>
              </p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-500 mt-8"
              >
                Redirecting to your personalized program...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

