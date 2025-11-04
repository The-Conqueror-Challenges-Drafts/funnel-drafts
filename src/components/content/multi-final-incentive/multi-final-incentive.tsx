"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"

interface MultiFinalIncentiveProps {
  headline: string
  counterText: string
}

export default function MultiFinalIncentive({ 
  headline, 
  counterText
}: MultiFinalIncentiveProps) {
  const [finishedCount, setFinishedCount] = useState(10)
  const [timer, setTimer] = useState(47)
  const [secondsOnPage, setSecondsOnPage] = useState(0)

  useEffect(() => {
    // Track seconds on page and update counters
    const interval = setInterval(() => {
      setSecondsOnPage(prev => {
        const newSeconds = prev + 1
        // Calculate finished count: seconds / 7 + 10
        const newCount = Math.floor(newSeconds / 7) + 10
        setFinishedCount(newCount)
        return newSeconds
      })
      
      // Count down from 47 to 0, then reset to 47
      setTimer(prev => {
        if (prev <= 0) return 47
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format timer to show minutes and seconds
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`
    }
    return `${seconds}s`
  }

  return (
    <section className="bg-muted/30 py-3 md:py-4">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-sm"
        >
          {/* Counter with Timer */}
          <div className="flex items-center justify-center gap-2">
            <motion.div
              key={finishedCount}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-orange-600"
            >
              {finishedCount}
            </motion.div>
            <p className="text-xs md:text-sm text-muted-foreground">
              {counterText.replace('X', '').trim()}
            </p>
            <motion.div
              key={timer}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-orange-600"
            >
              {formatTime(timer)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

