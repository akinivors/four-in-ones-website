// In app/components/services/ServiceFAQ.tsx
"use client";

import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqData: FAQ[];
}

const ServiceFAQ = ({ faqData }: ServiceFAQProps) => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-lora text-3xl font-bold text-brand-dark text-center mb-12">Frequently Asked Questions</h2>
        <div className="w-full space-y-4">
          {faqData.map((item) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-brand-dark/5 px-4 py-4 text-left text-sm font-medium text-brand-dark hover:bg-brand-dark/10 focus:outline-none focus-visible:ring focus-visible:ring-brand-teal focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-brand-teal transition-transform`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-brand-text">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
