// In app/components/contact/ContactForm.tsx
"use client";

import React, { useState } from 'react';
// --- FIX 1 & 2: Updated path to use '@/' alias and imported 'Service' type ---
import { servicesData, Service } from '@/lib/servicesData';

const ContactForm = () => {
  // --- NEW: Add state for loading and form status ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // --- NEW: Updated handleSubmit function ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        // You can also reset the form fields visually
        (e.target as HTMLFormElement).reset();
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

  // --- UPDATED: Form with loading and status messages ---
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-text">Full Name</label>
        <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email Address</label>
        <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-text">Phone Number (Optional)</label>
        <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-text">Service of Interest</label>
        <select id="service" name="service" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" onChange={handleChange}>
          <option value="">Please select a service</option>
          {/* --- FIX 3: Added 'Service' type to the map parameter --- */}
          {servicesData.map((service: Service) => (
            <option key={service.slug} value={service.slug}>{service.hero.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text">Your Message</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark" onChange={handleChange}></textarea>
      </div>
      <div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-wait"
        >
          {isLoading ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>
      {/* --- NEW: Success and Error Messages --- */}
      {formStatus === 'success' && (
        <div className="text-green-600 bg-green-50 p-4 rounded-md">
          Thank you for your inquiry! We will be in touch shortly.
        </div>
      )}
      {formStatus === 'error' && (
        <div className="text-red-600 bg-red-50 p-4 rounded-md">
          There was an error sending your message. Please try again or email us directly at info@getbeautyandhealth.com.
        </div>
      )}
    </form>
  );
};

export default ContactForm;