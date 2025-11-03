"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Lock, CheckCircle2, Shield } from "lucide-react"
import { SiAppstore, SiGoogleplay, SiTrustpilot, SiTrustpilotHex } from '@icons-pack/react-simple-icons'
import { useState } from "react"
import { motion } from "motion/react"

interface BenefitItem {
  title: string;
  description: string;
}

interface TrustBadge {
  icon: string;
  text: string;
}


interface HowItWorksStep {
  step: number;
  description: string;
}

interface MultiConversionProps {
  sectionTitle: string;
  subtitle: string;
  benefits: BenefitItem[];
  trustBadges: TrustBadge[];
  howItWorks: HowItWorksStep[];
  buttonText: string;
  buttonUrl: string;
}

export default function MultiConversion({
  sectionTitle,
  subtitle,
  benefits,
  trustBadges,
  howItWorks,
  buttonText,
  buttonUrl
}: MultiConversionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <section className="w-full bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            {sectionTitle}
          </h2>
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
            <p className="text-md md:text-lg font-semibold text-foreground mb-4 text-center">
              {subtitle}
            </p>
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
                Next Step →
              </Button>
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
            size="lg"
            className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all mb-6"
          >
            {buttonText}
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

