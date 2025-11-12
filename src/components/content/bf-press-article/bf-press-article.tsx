"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle2, AlertCircle, TrendingUp, Users } from "lucide-react"
import { useState } from "react"

interface StatItem {
  icon: string;
  value: string;
  label: string;
  color?: string;
}

interface BulletPoint {
  icon: string;
  text: string;
}

interface BfPressArticleProps {
  header?: {
    releaseText?: string;
    dateFormat?: string;
  };
  hero?: {
    headline?: string;
    subheadline?: string;
  };
  opening?: {
    paragraphs?: string[];
  };
  discovery?: {
    title?: string;
    intro?: string;
    highlightBox?: {
      text?: string;
      highlightText?: string;
    };
    introAfterHighlight?: string;
    bulletPoints?: BulletPoint[];
    theoryBox?: {
      title?: string;
      text?: string;
    };
  };
  experiment?: {
    title?: string;
    paragraphs?: string[];
    highlightBox?: string;
  };
  urgency?: {
    title?: string;
    intro?: string;
    alertBox?: {
      text?: string;
      highlightText?: string;
      subtext?: string;
    };
    closingParagraphs?: string[];
  };
  form?: {
    title?: string;
    subtitle?: string;
    subtext?: string;
    stats?: StatItem[];
    buttonText?: string;
    disclaimer?: string;
    buttonUrl?: string;
  };
}

export default function BfPressArticle({
  header = {},
  hero = {},
  opening = {},
  discovery = {},
  experiment = {},
  urgency = {},
  form = {}
}: BfPressArticleProps) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (form.buttonUrl) {
      window.location.href = form.buttonUrl
    } else {
      console.log("[bf-press] Form submitted:", { firstName, email })
    }
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return CheckCircle2
      case 'AlertCircle':
        return AlertCircle
      case 'TrendingUp':
        return TrendingUp
      case 'Users':
        return Users
      default:
        return CheckCircle2
    }
  }

  const formatDate = (format?: string) => {
    if (format === 'en-NZ') {
      return new Date().toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" })
    }
    return new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - News Style */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-gray-500 tracking-wider">
              {header.releaseText || "FOR IMMEDIATE RELEASE"}
            </div>
            <div className="text-xs text-gray-500">
              {formatDate(header.dateFormat)}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Headline */}
      {hero.headline && (
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              {hero.headline}
            </h1>
            {hero.subheadline && (
              <p className="text-xl md:text-2xl text-gray-700 font-medium text-balance leading-relaxed">
                {hero.subheadline}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main Content */}
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Opening */}
          {opening.paragraphs && opening.paragraphs.map((paragraph, index) => {
            const isLastTwo = index >= opening.paragraphs!.length - 2;
            return (
              <p 
                key={index}
                className={`text-lg text-gray-700 leading-relaxed ${isLastTwo ? 'mb-8' : 'mb-6'}`}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            );
          })}

          {/* The Discovery Section */}
          {discovery.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{discovery.title}</h2>

              {discovery.intro && (
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {discovery.intro}
                </p>
              )}

              {discovery.highlightBox && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg my-8">
                  <p className="text-lg text-gray-800 font-medium mb-4">
                    {discovery.highlightBox.highlightText ? (
                      discovery.highlightBox.text?.split(discovery.highlightBox.highlightText).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <strong className="text-emerald-700">{discovery.highlightBox?.highlightText}</strong>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      discovery.highlightBox.text
                    )}
                  </p>
                </div>
              )}

              {discovery.introAfterHighlight && (
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{discovery.introAfterHighlight}</p>
              )}

              {discovery.bulletPoints && discovery.bulletPoints.length > 0 && (
                <div className="space-y-4 my-8 ml-6">
                  {discovery.bulletPoints.map((point, index) => {
                    const IconComponent = getIcon(point.icon)
                    return (
                      <div key={index} className="flex gap-3 items-start">
                        <IconComponent className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <p 
                          className="text-lg text-gray-700"
                          dangerouslySetInnerHTML={{ __html: point.text }}
                        />
                      </div>
                    )
                  })}
                </div>
              )}

              {discovery.theoryBox && (
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {discovery.theoryBox.title && (
                      <strong>{discovery.theoryBox.title}</strong>
                    )}{' '}
                    <span dangerouslySetInnerHTML={{ __html: discovery.theoryBox.text || '' }} />
                  </p>
                </div>
              )}
            </div>
          )}

          {/* The Experiment Section */}
          {experiment.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{experiment.title}</h2>

              {experiment.paragraphs && experiment.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              {experiment.highlightBox && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
                  <p className="text-lg text-gray-800">
                    {experiment.highlightBox}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Urgency Section */}
          {urgency.title && (
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{urgency.title}</h2>

              {urgency.intro && (
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {urgency.intro}
                </p>
              )}

              {urgency.alertBox && (
                <div className="flex gap-4 items-start bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    {urgency.alertBox.text && (
                      <p className="text-lg text-gray-800 font-semibold mb-2">
                        {urgency.alertBox.highlightText ? (
                          urgency.alertBox.text.split(urgency.alertBox.highlightText).map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <strong className="text-red-700">{urgency.alertBox?.highlightText}</strong>
                              )}
                            </React.Fragment>
                          ))
                        ) : (
                          urgency.alertBox.text
                        )}
                      </p>
                    )}
                    {urgency.alertBox.subtext && (
                      <p className="text-base text-gray-700">{urgency.alertBox.subtext}</p>
                    )}
                  </div>
                </div>
              )}

              {urgency.closingParagraphs && urgency.closingParagraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-lg text-gray-700 leading-relaxed mb-6 ${index === urgency.closingParagraphs!.length - 1 ? 'font-medium' : ''}`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Registration Form */}
        {form.title && (
          <div className="my-16">
            <Card className="p-8 md:p-12 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{form.title}</h2>
                {form.subtitle && (
                  <p className="text-red-600 font-semibold text-lg mb-2">{form.subtitle}</p>
                )}
                {form.subtext && (
                  <p className="text-gray-600">{form.subtext}</p>
                )}
              </div>

              {/* Stats Bar */}
              {form.stats && form.stats.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
                  {form.stats.map((stat, index) => {
                    const IconComponent = getIcon(stat.icon)
                    const textColor = stat.color === 'red' ? 'text-red-600' : 'text-gray-900'
                    return (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <IconComponent className={`h-5 w-5 ${stat.color === 'red' ? 'text-red-600' : 'text-emerald-600'}`} />
                          <div className={`text-3xl font-bold ${textColor}`}>{stat.value}</div>
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name:
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    required
                    className="w-full text-lg py-6 border-2 border-gray-300 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address:
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full text-lg py-6 border-2 border-gray-300 focus:border-emerald-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xl py-7 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  {form.buttonText || "CHECK AVAILABILITY NOW"}
                </Button>

                {form.disclaimer && (
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    <em dangerouslySetInnerHTML={{ __html: form.disclaimer }} />
                  </p>
                )}
              </form>
            </Card>
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

