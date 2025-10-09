// In app/contact/page.tsx
import React from 'react';
import Link from 'next/link';
import ContactForm from '@/app/components/contact/ContactForm';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-lora text-4xl md:text-5xl font-bold text-brand-dark">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">We&apos;re here to answer your questions and help you begin your journey. Reach out to us through the form below or via our direct contact channels.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Form */}
          <div>
            <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          {/* Right Column: Direct Info */}
          <div className="bg-brand-background p-8 rounded-lg">
            <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">Direct Contact</h2>
            <div className="space-y-6">
              <a href="mailto:info@fourinones.com" className="flex items-center group">
                <Mail className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-brand-text group-hover:text-brand-dark">info@fourinones.com</span>
              </a>
              <a href="tel:+905551234567" className="flex items-center group">
                <Phone className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-brand-text group-hover:text-brand-dark">+90 555 123 4567</span>
              </a>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <MessageSquare className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-brand-text group-hover:text-brand-dark">Chat with us on WhatsApp</span>
              </a>
              <div className="border-t pt-6">
                 <h3 className="font-lora text-xl font-bold text-brand-dark">Our Office</h3>
                 <p className="text-brand-text mt-2">123 Health St, Izmir, Turkey, 35000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Health Form Section */}
      <section className="bg-brand-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Ready for a Detailed Quote?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">For a faster and more accurate quote, you can fill out our comprehensive health form and upload your photos now.</p>
          <div className="mt-8">
            <Link href="/health-form" className="inline-block bg-brand-dark text-white font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105">
              Go to Secure Health Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
