// In app/components/contact/SmartHealthForm.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { servicesData, Service } from '../../../../lib/servicesData';
import { allMedicalQuestions, MedicalQuestion } from '../../../../lib/medicalQuestions';

const SmartHealthForm = () => {
  const [selectedSlug, setSelectedSlug] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<MedicalQuestion[]>([]);

  useEffect(() => {
    const service = servicesData.find(s => s.slug === selectedSlug);
    setSelectedService(service || null);

    if (service && service.requiredMedicalQuestions) {
      const requiredQs = allMedicalQuestions.filter(q => service.requiredMedicalQuestions?.includes(q.id));
      setFilteredQuestions(requiredQs);
    } else {
      setFilteredQuestions([]);
    }
  }, [selectedSlug]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Smart Form Submitted:", data);
    alert("Thank you for providing your detailed information! We will review it and get back to you with a quote.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl mx-auto">
      {/* --- Procedure Information --- */}
      <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <legend className="font-lora text-2xl font-bold text-brand-dark mb-4">Procedure Information</legend>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">First, please select the procedure you are interested in*</label>
          <select id="service" name="service" required value={selectedSlug} onChange={(e) => setSelectedSlug(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark">
            <option value="">Select a procedure...</option>
            {servicesData.map((service) => (
              <option key={service.slug} value={service.slug}>{service.hero.title}</option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* --- Dynamic Procedure-Specific Sections --- */}
      {selectedService && (
        <div className="space-y-10">
          {selectedService.specificQuestions && selectedService.specificQuestions.length > 0 && (
             <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <legend className="font-lora text-xl font-bold text-brand-dark mb-4">Procedure-Specific Questions</legend>
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
            <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <legend className="font-lora text-xl font-bold text-brand-dark mb-4">Photo Upload</legend>
              <p className="text-sm text-gray-700 mb-2">For an accurate quote, please upload photos from the following angles:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                {selectedService.photoRequirements.map((req) => <li key={req}>{req}</li>)}
              </ul>
              <input type="file" name="photos" multiple className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-dark/10 file:text-brand-dark hover:file:bg-brand-dark/20" />
            </fieldset>
          )}
        </div>
      )}

      {/* --- DYNAMIC Medical History --- */}
      <fieldset className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <legend className="font-lora text-2xl font-bold text-brand-dark mb-6">Medical History</legend>
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

      <button type="submit" disabled={!selectedService} className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
        Submit Health Form
      </button>
    </form>
  );
};

export default SmartHealthForm;

