"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { Lock, CheckCircle2, Shield, Star } from "lucide-react"
import { SiAppstore, SiGoogleplay, SiTrustpilot, SiTrustpilotHex } from '@icons-pack/react-simple-icons'
import { useState, useMemo, useEffect } from "react"
import { motion } from "motion/react"
import Image from "next/image"

interface BenefitItem {
  title: string;
  description: string;
}

interface TrustBadge {
  icon: string;
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  image: string;
  rating: number;
}

interface HowItWorksStep {
  step: number;
  description: string;
}

interface MultiConversionProps {
  sectionTitle?: string;
  subtitle?: string;
  showCountdown?: boolean;
  countdownText?: string;
  benefits: BenefitItem[];
  trustBadges: TrustBadge[];
  testimonials: Testimonial[];
  howItWorks: HowItWorksStep[];
  buttonText: string;
  buttonUrl: string;
}

export default function MultiConversion({
  sectionTitle,
  subtitle,
  showCountdown,
  countdownText,
  benefits,
  trustBadges,
  testimonials,
  howItWorks,
  buttonText,
  buttonUrl
}: MultiConversionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [isLoadingUserCount, setIsLoadingUserCount] = useState(false)
  const [finishedCount, setFinishedCount] = useState(10)
  const [timer, setTimer] = useState(0)
  const [secondsOnPage, setSecondsOnPage] = useState(0)

  const generateFakeUserCount = (): number => {
    setIsLoadingUserCount(true);
    const baseCount = 15;
    const maxVariation = 2;
    const variation = Math.floor(Math.random() * (maxVariation * 2 + 1)) - maxVariation;
    const count = baseCount + variation;
    setTimeout(() => {
      setIsLoadingUserCount(false);
    }, 1000);
    return count;
  };

  const currentViewers = useMemo(() => generateFakeUserCount(), []);

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
      
      // Count up from 0 and keep going
      setTimer(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format timer to always show minutes and seconds
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}m ${seconds}s`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log("Submitting:", { name, email })
    // Redirect to buttonUrl
    window.location.href = buttonUrl
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-5 h-5 text-muted-foreground mb-1" />
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-muted-foreground mb-1" />
      case "Shield":
        return <Shield className="w-5 h-5 text-muted-foreground mb-1" />
      default:
        return <CheckCircle2 className="w-5 h-5 text-muted-foreground mb-1" />
    }
  }

  return (
    <section id="conversion-form" className="w-full bg-background py-4 md:py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {sectionTitle ? (
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
              {sectionTitle}
            </h2>
          ) : showCountdown && countdownText && (
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
              <p className="text-base md:text-lg text-muted-foreground">
                {countdownText.replace('X', '').trim()}
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
          )}
        </motion.div>

        <motion.div 
          className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Form Section */}
          <div className="mb-8">
            {subtitle && (
              <p className="text-md md:text-lg font-semibold text-foreground mb-4 text-center">
                {subtitle}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Check Availability →
              </Button>
              <div className='text-primary text-md text-center mb-4'>
            <span className='font-semibold animate-pulse inline-flex items-center gap-1'>
              {isLoadingUserCount ? <Spinner className="w-4 h-4"/> : currentViewers} People
            </span> are Viewing this Challenge
          </div>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-border">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {getIcon(badge.icon)}
                  <p className="text-xs text-muted-foreground font-medium leading-tight">{badge.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-md md:text-lg font-bold text-foreground mb-4">With Each Virtual Challenge you get:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-tight font-medium text-sm md:text-md text-foreground">
                      <b>{benefit.title}</b>. {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            size="lg"
            className="w-full cursor-pointer font-bold px-8 py-6 text-xl rounded-lg transition-all duration-300 mb-2"
          >
            {loading ? (
              <div className="w-full flex justify-center items-center gap-2">
                <p>Reserving your spot...</p>
                <Spinner className='w-5 h-5'/>
              </div>
            ) : (
              buttonText
            )}
          </Button>

          <div className="flex gap-2 flex-wrap items-center justify-center pt-4 border-t border-border">
            <Badge variant="ghost" className='text-lg'>
              <SiAppstore className={`text-[#0D96F6]! size-6!`}/>
              4.8
            </Badge>
            <Badge variant="ghost" className='text-lg'>
              <SiGoogleplay className={`text-[#FBBC04]! size-6!`}/>
              4.7
            </Badge>
            <Badge variant="ghost" className='text-lg'>
              <SiTrustpilot className={`text-[${SiTrustpilotHex}] size-6!`}/>
              4.9
            </Badge>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {howItWorks.map((step, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-xl p-4 shadow-md border border-border text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <p className="font-semibold text-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

