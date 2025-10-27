'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import { Star, Lock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initiateCheckout } from '@/hooks/useCheckout';
import { Spinner } from '@/components/ui/spinner';

interface Testimonial {
  quote: string;
  author: string;
  image: string;
  rating: number;
}

interface TrustIndicator {
  icon: string;
  text: string;
}

interface FormCdcoProps {
  ctaTitle: string;
  buttonText: string;
  buttonUrl: string;
  trustIndicators: TrustIndicator[];
  testimonials: Testimonial[];
}

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = memo(({
  id,
  label,
  type,
  value,
  onChange,
  required = false,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value !== '';

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const labelClasses = useMemo(() => {
    return `absolute left-4 transition-transform duration-100 ease-out pointer-events-none ${
      isFloating
        ? 'top-2 text-xs text-muted-foreground/50 font-medium'
        : 'top-4 text-base text-muted-foreground/50'
    }`;
  }, [isFloating]);

  const inputClasses = useMemo(() => {
    const baseClasses = "w-full px-4 pt-6 pb-2 text-base text-foreground bg-transparent border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-100";
    
    if (error) {
      return `${baseClasses} border-red-500 focus:ring-red-500/20 focus:border-red-500`;
    }
    
    return `${baseClasses} border-border focus:ring-primary/20 focus:border-primary/30`;
  }, [error]);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        className={inputClasses}
      />
      <label
        htmlFor={id}
        className={labelClasses}
      >
        {label}
        {required && <span className="text-muted-foreground/50 ml-1">*</span>}
      </label>
      {error && (
        <p className="absolute -bottom-5 left-4 text-sm text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
});

FloatingLabelInput.displayName = 'FloatingLabelInput';

const FormCdco: React.FC<FormCdcoProps> = memo(({
  ctaTitle,
  buttonText,
  buttonUrl,
  trustIndicators,
  testimonials
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const [loading, setLoading] = useState(false);
  const handleSubmit = () => { 
    setLoading(true);
    const result = initiateCheckout(formData.firstName, formData.lastName, formData.email);
    if (!result?.success && result?.fields) {
        const newErrors: Record<string, string> = {};
        if (result.fields.firstName.error) newErrors.firstName = result.fields.firstName.error;
        if (result.fields.lastName.error) newErrors.lastName = result.fields.lastName.error;
        if (result.fields.email.error) newErrors.email = result.fields.email.error;
        setErrors(newErrors);
        setLoading(false);
    } else {
      setTimeout(() => {
        window.location.href = 'https://store.theconqueror.events/store/single/single?item=1611';
        // setLoading(false);
      }, 2000);
    }
  }
  
  return (
    <>
      {/* Reason 2 Section - Testimonials & Form */}
      <section className="bg-muted" id="get-started">
        <div className="max-w-7xl px-4 pb-5 sm:px-6 py-4 md:py-8 md:pb-10 mx-auto">
          <div className="max-w-screen-sm mb-4 lg:mb-8">
            <h2 className="mb-4 text-lg sm:text-2xl tracking-tight font-semibold text-black text-left">
              {ctaTitle}
            </h2>
          </div>
          {/* Two Column Layout */}
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-start min-w-0">
            {/* Left Column: Testimonials */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 min-w-0">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <figure key={index} className="p-5 sm:p-6 bg-background shadow-lg rounded-lg">
                    <blockquote className="text-sm text-muted-foreground">
                      <p className="mb-4 text-foreground leading-relaxed text-md md:text-lg break-words">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={128}
                        height={128}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold ml-1 text-foreground">{testimonial.author}</div>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </figcaption>    
                  </figure>
                ))}
              </div>
            </div>
            
            {/* Right Column: Form Container */}
            <div className="w-full order-1 lg:order-2 min-w-0">
              <div className="w-full lg:sticky lg:top-8">
                <div className="bg-background p-4 py-4 sm:p-5 sm:py-5 md:p-6 md:py-6 lg:p-8 border border-border shadow-lg rounded-lg overflow-visible">
                  <div>
                    {/* Form Fields */}
                    <div className="space-y-6 mb-6">
                      <FloatingLabelInput
                        id="firstName"
                        label="First Name"
                        type="text"
                        value={formData.firstName}
                        onChange={(value) => handleInputChange('firstName', value)}
                        required
                        error={errors.firstName}
                      />
                      <FloatingLabelInput
                        id="lastName"
                        label="Last Name"
                        type="text"
                        value={formData.lastName}
                        onChange={(value) => handleInputChange('lastName', value)}
                        required
                        error={errors.lastName}
                      />
                      <FloatingLabelInput
                        id="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        required
                        error={errors.email}
                      />
                    </div>
                    
                    {/* CTA Section */}
                    <div className="text-center space-y-6 md:mb-4">
                      <Button
                        onClick={() => {
                          handleSubmit();
                        }}
                        asChild
                        size="lg"
                        className="w-full cursor-pointer font-bold px-8 py-6 text-xl mb-4 md:mb-0 rounded-lg transition-all duration-300"
                      >
                          {loading ? 
                            <div className="w-full flex justify-center items-center gap-2">
                              <p>Reserving your spot...</p>
                              <Spinner className='w-5 h-5'/>
                            </div> 
                          : 
                          <p>{buttonText}</p>}
                      </Button>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div>
                      <div className="flex justify-center mt-2 items-center opacity-60 gap-8 sm:gap-10 lg:gap-14 text-sm text-muted-foreground">
                        {trustIndicators.map((indicator, index) => {
                          const icons = { Lock, Shield, Users };
                          const IconComponent = icons[indicator.icon as keyof typeof icons] || Lock;
                          return (
                            <div key={index} className="flex flex-col items-center space-y-2 min-w-0 flex-1 max-w-[120px] group cursor-default transition-all duration-300 hover:opacity-100">
                              <IconComponent className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                              <span className="text-center text-xs leading-tight transition-colors duration-300 group-hover:text-foreground sm:whitespace-nowrap">{indicator.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

FormCdco.displayName = 'FormCdco';

export default FormCdco;
