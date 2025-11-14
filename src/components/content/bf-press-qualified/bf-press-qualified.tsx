"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface MedalImage {
  image: string;
  alt: string;
  title?: string;
}

interface BfPressQualifiedProps {
  header?: {
    title?: string;
    subheadline?: string;
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
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
    declineText?: string;
    declineUrl?: string;
  };
}

export default function BfPressQualified({
  header = {},
  intro = {},
  logic = {},
  mission = {},
  challenge = {},
  cta = {}
}: BfPressQualifiedProps) {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    // Get name from sessionStorage
    if (typeof window !== 'undefined') {
      const name = sessionStorage.getItem('userName')
      if (name) {
        setUserName(name)
      }
    }
  }, [])

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
      {/* Header - Congratulations */}
      <header className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-b border-emerald-200">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {getPersonalizedTitle()}
            </h1>
            {header.subheadline && (
              <p className="text-xl md:text-2xl text-gray-700 font-medium mt-6 leading-relaxed">
                {header.subheadline}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article className="mx-auto max-w-3xl px-4 py-8 md:py-12 pb-24 md:pb-12">
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
            <div className="my-8 md:my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{logic.title}</h2>

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
            <div className="my-8 md:my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{mission.title}</h2>

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
            <div className="my-8 md:my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{challenge.title}</h2>

              {challenge.paragraphs && challenge.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

            </div>
          )}
        </div>
      </article>

      {/* Sticky CTA Buttons - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 md:relative md:border-t-0 md:shadow-none md:bg-transparent">
        <div className="mx-auto max-w-3xl px-4 py-4 md:py-8 text-center space-y-3 md:space-y-4">
          {cta.buttonText && (
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-xl py-4 md:py-7 px-4 md:px-12 font-bold shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
            >
              {cta.buttonText}
            </Button>
          )}
          
          {cta.secondaryButtonText && (
            <div>
              <Button
                onClick={() => {
                  if (cta.secondaryButtonUrl) {
                    window.location.href = cta.secondaryButtonUrl
                  }
                }}
                size="lg"
                variant="outline"
                className="text-base md:text-xl py-4 md:py-7 px-4 md:px-12 font-bold border-2 border-gray-300 hover:border-gray-400 transition-all w-full md:w-auto"
              >
                {cta.secondaryButtonText}
              </Button>
            </div>
          )}

          {cta.declineText && (
            <div className="pt-2">
              <button
                onClick={() => {
                  if (cta.declineUrl) {
                    window.location.href = cta.declineUrl
                  }
                }}
                className="text-gray-600 underline hover:text-gray-800 transition-colors text-sm md:text-base"
              >
                {cta.declineText}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-gray-600">
          <p className="text-sm">© 2025 The Conqueror. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

