"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChartSpline } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

interface MultiStickyCtaProps {
  buttonText: string
  lowStockText: string
}

export default function MultiStickyCta({ buttonText, lowStockText }: MultiStickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the multi-reasons section
      const reasonsSection = document.querySelector('[data-reasons-section]')
      if (!reasonsSection) return

      // Get all reason items
      const reasonItems = reasonsSection.querySelectorAll('[data-reason-item]')
      if (reasonItems.length < 3) return

      // Get the 3rd reason item
      const thirdReason = reasonItems[2]
      const thirdReasonRect = thirdReason.getBoundingClientRect()
      
      // Show sticky CTA when 3rd reason is scrolled past (top is above viewport)
      setIsVisible(thirdReasonRect.top < 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('conversion-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If form not found, redirect to qualified page
      window.location.href = '/lp/bf-press-qualified'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              <Button
                onClick={scrollToForm}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {buttonText}
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-destructive animate-pulse">
                <ChartSpline size="1.2em" />
                {lowStockText}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


