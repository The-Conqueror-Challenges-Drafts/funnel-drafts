"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MedalImage {
  image: string;
  alt: string;
  title?: string;
}

interface FinalQualifiedProps {
  header?: {
    title?: string;
    subheadline?: string;
    profile?: string;
  };
  intro?: {
    paragraphs?: string[];
  };
  logic?: {
    title?: string;
    paragraphs?: string[];
    highlightBox?: {
      text?: string;
      highlightText?: string;
    };
    closingParagraph?: string;
  };
  mission?: {
    title?: string;
    intro?: string;
    steps?: Array<{
      number: number;
      text: string;
    }>;
  };
  challenge?: {
    title?: string;
    paragraphs?: string[];
    medals?: MedalImage[];
  };
  cta?: {
    buttonText?: string;
    buttonUrl?: string;
  };
  qualification?: {
    badge?: string;
    percentage?: string;
    message?: string;
  };
}

export default function FinalQualified({
  header = {},
  intro = {},
  logic = {},
  mission = {},
  challenge = {},
  cta = {},
  qualification = {}
}: FinalQualifiedProps) {
  const [userName, setUserName] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(334) // 5 minutes 34 seconds in seconds

  useEffect(() => {
    // Get name from sessionStorage
    if (typeof window !== 'undefined') {
      const name = sessionStorage.getItem('userName')
      if (name) {
        setUserName(name)
      }
    }
  }, [])

  useEffect(() => {
    // Countdown timer
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')} min`
  }

  const handleCtaClick = () => {
    if (cta.buttonUrl) {
      window.location.href = cta.buttonUrl
    }
  }

  // Personalize the title with user's name
  const getPersonalizedTitle = () => {
    const baseTitle = header.title || "Congratulations. You've Been Qualified."
    if (userName) {
      // Extract first name if full name provided
      const firstName = userName.split(' ')[0]
      return baseTitle.replace("Congratulations", `${firstName}, Congratulations`)
    }
    return baseTitle
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Enhanced with Qualification Badge */}
      <header className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-b border-emerald-200 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20 relative z-10">
          {/* Countdown Timer */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg animate-pulse">
              <span>⏰</span>
              <span>Subsidize ending in: {formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {getPersonalizedTitle()}
            </h1>
            
            {qualification.percentage && (
              <p className="text-lg text-emerald-700 font-semibold mb-4">
                You&apos;re among the top {qualification.percentage}% selected
              </p>
            )}
            
            {header.subheadline && (
              <p className="text-xl md:text-2xl text-gray-700 font-medium mt-6 leading-relaxed">
                {header.subheadline}
              </p>
            )}

            {header.profile && (
              <div className="mt-6 inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-emerald-200">
                <p className="text-sm text-gray-600">Your Profile:</p>
                <p className="text-lg font-semibold text-emerald-700">{header.profile}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Qualification Message */}
      {qualification.message && (
        <div className="bg-emerald-600 text-white py-6">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-lg font-medium">{qualification.message}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Intro Paragraphs */}
          {intro.paragraphs && intro.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-lg text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {/* The Logic Is Simple Section */}
          {logic.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{logic.title}</h2>

              {logic.paragraphs && logic.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              {logic.highlightBox && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg my-8">
                  <p className="text-lg text-gray-800 font-medium">
                    {logic.highlightBox.highlightText ? (
                      logic.highlightBox.text?.split(logic.highlightBox.highlightText).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <strong className="text-emerald-700">{logic.highlightBox?.highlightText}</strong>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      logic.highlightBox.text
                    )}
                  </p>
                </div>
              )}

              {logic.closingParagraph && (
                <p className="text-lg text-gray-700 leading-relaxed mt-6 font-medium">
                  {logic.closingParagraph}
                </p>
              )}
            </div>
          )}

          {/* Your Mission Section */}
          {mission.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{mission.title}</h2>

              {mission.intro && (
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {mission.intro}
                </p>
              )}

              {mission.steps && mission.steps.length > 0 && (
                <div className="space-y-6 my-8">
                  {mission.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed pt-2">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Where Will Your First Challenge Take You Section */}
          {challenge.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{challenge.title}</h2>

              {challenge.paragraphs && challenge.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              {/* Medal Images Grid */}
              {challenge.medals && challenge.medals.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                  {challenge.medals.map((medal, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 border-2 border-gray-200 hover:border-emerald-500 transition-all relative">
                        <Image 
                          src={medal.image} 
                          alt={medal.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {medal.title && (
                        <p className="text-center text-gray-700 font-medium mt-3">
                          {medal.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-lg text-gray-700 leading-relaxed mt-8 font-medium text-center">
                The choice is yours.
              </p>
            </div>
          )}
        </div>

        {/* CTA Button */}
        {cta.buttonText && (
          <div className="my-16 text-center">
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl py-7 px-12 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              {cta.buttonText}
            </Button>
          </div>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-gray-600">
          <p className="text-sm">© 2025 The Conqueror. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

