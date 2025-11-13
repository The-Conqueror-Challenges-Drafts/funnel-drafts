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
  delay = 3000,
  redirectUrl = "/lp/final-qualified"
}: QualificationTransitionProps) {
  const router = useRouter();
  const [stage, setStage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const stages = [
    { text: "Analyzing your responses...", icon: "🔍" },
    { text: "Calculating your personality profile...", icon: "🧠" },
    { text: "Matching you with the perfect program...", icon: "⚡" },
    { text: "Verifying qualification status...", icon: "✅" }
  ];

  useEffect(() => {
    // Stage progression
    const stageInterval = setInterval(() => {
      setStage(prev => {
        if (prev < stages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, delay / stages.length);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center px-4">
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
                ⚡
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stages[stage].text}
                </h2>
              </motion.div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2">
                {stages.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= stage ? 'bg-emerald-600' : 'bg-gray-300'
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
                  className="bg-emerald-600 h-2 rounded-full"
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

