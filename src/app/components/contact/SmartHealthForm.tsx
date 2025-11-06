// In app/components/contact/SmartHealthForm.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { servicesData, Service } from '@/lib/servicesData';
import { allMedicalQuestions, MedicalQuestion } from '@/lib/medicalQuestions';
import { ShieldCheck, User, Mail, Phone } from 'lucide-react'; // Import new icons

const SmartHealthForm = () => {
  const [selectedSlug, setSelectedSlug] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<MedicalQuestion[]>([]);

  // --- NEW: Add state for loading and form status ---
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const service = servicesData.find((s: Service) => s.slug === selectedSlug);
    setSelectedService(service || null);

    if (service && service.requiredMedicalQuestions) {
      const requiredQs = allMedicalQuestions.filter(q => service.requiredMedicalQuestions?.includes(q.id));
      setFilteredQuestions(requiredQs);
    } else {
      setFilteredQuestions([]);
    }
  }, [selectedSlug]);

  // --- NEW: Updated handleSubmit function ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/health-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset(); // Reset form on success
        setSelectedSlug(''); // Reset service selection
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl mx-auto">
      
      {/* --- NEW: Personal Information Section --- */}
      <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <legend className="font-lora text-2xl font-bold text-brand-dark mb-6">1. Personal Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-2 text-brand-dark" /> Full Name*
            </label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
          </div>
          <div>
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 mr-2 text-brand-dark" /> Email Address*
            </label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 mr-2 text-brand-dark" /> Phone Number (Optional, with country code)
            </label>
            <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
          </div>
        </div>
      </fieldset>

      {/* --- Procedure Information --- */}
      <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <legend className="font-lora text-2xl font-bold text-brand-dark mb-4">2. Procedure Information</legend>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Please select the procedure you are interested in*</label>
          <select id="service" name="service" required value={selectedSlug} onChange={(e) => setSelectedSlug(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark">
            <option value="">Select a procedure...</option>
            {servicesData.map((service: Service) => (
              <option key={service.slug} value={service.slug}>{service.hero.title}</option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* --- Dynamic Procedure-Specific Sections --- */}
      {selectedService && (
        <div className="space-y-10">
          <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <legend className="font-lora text-2xl font-bold text-brand-dark mb-4">3. Medical History</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Universal Fields */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth*</label>
                <input type="date" name="dob" id="dob" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sex*</label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center"><input type="radio" name="sex" value="male" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">Male</span></label>
                  <label className="flex items-center"><input type="radio" name="sex" value="female" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">Female</span></label>
                </div>
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)*</label>
                <input type="number" name="height" id="height" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
              </div>
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)*</label>
                <input type="number" name="weight" id="weight" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Do you smoke daily?*</label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center"><input type="radio" name="smoke" value="yes" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">Yes</span></label>
                  <label className="flex items-center"><input type="radio" name="smoke" value="no" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">No</span></label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Do you drink alcohol?*</label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center"><input type="radio" name="alcohol" value="yes" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">Yes</span></label>
                  <label className="flex items-center"><input type="radio" name="alcohol" value="no" required className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">No</span></label>
                </div>
              </div>

              {/* Dynamically Rendered Questions */}
              {filteredQuestions.map((q) => (
                <div key={q.id} className={q.type === 'textarea' || q.type === 'text' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-medium text-gray-700">{q.label}</label>
                  {q.type === 'radio' && q.options?.map((opt) => (
                    <div key={opt} className="flex items-center mt-2">
                      <label className="flex items-center"><input type="radio" name={q.id} value={opt} className="h-4 w-4 text-brand-dark focus:ring-brand-dark" /> <span className="ml-2">{opt}</span></label>
                    </div>
                  ))}
                  {q.type === 'textarea' && <textarea name={q.id} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark"></textarea>}
                  {q.type === 'text' && <input type="text" name={q.id} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />}
                </div>
              ))}
            </div>
          </fieldset>
          
          {selectedService.specificQuestions && selectedService.specificQuestions.length > 0 && (
             <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <legend className="font-lora text-xl font-bold text-brand-dark mb-4">4. Procedure-Specific Questions</legend>
              {selectedService.specificQuestions.map((q) => (
                <div key={q.id} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{q.label}</label>
                  {q.type === 'radio' && q.options?.map((opt) => (
                    <div key={opt} className="flex items-center mt-1">
                      <input type="radio" name={q.id} value={opt} className="h-4 w-4 text-brand-dark focus:ring-brand-dark border-gray-300" />
                      <label className="ml-3 block text-sm text-gray-700">{opt}</label>
                    </div>
                  ))}
                  {q.type === 'textarea' && <textarea name={q.id} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark"></textarea>}
                  {q.type === 'text' && <input type="text" name={q.id} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" />}
                </div>
              ))}
            </fieldset>
          )}

          {selectedService.photoRequirements && selectedService.photoRequirements.length > 0 && (
            <fieldset className="bg-brand-background p-8 rounded-lg border border-brand-teal/50">
              <legend className="font-lora text-xl font-bold text-brand-dark mb-4">5. Next Step: Photos</legend>
              <p className="text-sm text-brand-text mb-2">
                This procedure requires photos from the following angles:
              </p>
              <ul className="list-disc list-inside text-sm text-brand-text mb-6">
                {selectedService.photoRequirements.map((req) => <li key={req}>{req}</li>)}
              </ul>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">
                      To Protect Your Privacy
                    </h4>
                    <p className="text-sm text-brand-text mt-1">
                      A patient coordinator will contact you via your provided email with 
                      secure instructions on how to send your photos.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          )}
        </div>
      )}

      {/* --- Submit Button & Status Messages --- */}
      <button 
        type="submit" 
        disabled={!selectedService || isLoading} 
        className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Submitting...' : 'Submit Health Form'}
      </button>

      {formStatus === 'success' && (
        <div className="text-green-600 bg-green-50 p-4 rounded-md">
          Thank you! Your health information has been submitted. A patient coordinator 
          will email you shortly with the next steps and instructions for photos.
        </div>
      )}
      {formStatus === 'error' && (
        <div className="text-red-600 bg-red-50 p-4 rounded-md">
          There was an error sending your information. Please try again or contact us 
          directly at info@getbeautyandhealth.com.
        </div>
      )}
    </form>
  );
};

export default SmartHealthForm;