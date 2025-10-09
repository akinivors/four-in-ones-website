// In app/components/contact/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { servicesData } from '../../../../lib/servicesData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just log the data. We will add the sending logic later.
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry! We will be in touch shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-text">Full Name</label>
        <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email Address</label>
        <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-text">Phone Number (Optional)</label>
        <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-text">Service of Interest</label>
        <select id="service" name="service" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal" onChange={handleChange}>
          <option value="">Please select a service</option>
          {servicesData.map((service) => (
            <option key={service.slug} value={service.slug}>{service.hero.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text">Your Message</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal" onChange={handleChange}></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
          Send Inquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
