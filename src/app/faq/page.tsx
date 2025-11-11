// In app/faq/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp, Search } from 'lucide-react';
import FAQ_CTA from '@/app/components/faq/FAQ_CTA';
import { faqData, FAQItem } from '@/lib/faqData';
import { FaqPageSchema } from '@/app/components/common/StructuredData';

const categories = ["All", "General", "Process", "Payments", "Aftercare", "Procedures"];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    // --- FIX: Cast faqData to FAQItem[] to prevent 'any' type error ---
    return (faqData as FAQItem[]).filter((faq: FAQItem) => {
      const inCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const inSearch = searchTerm === "" || 
                       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return inCategory && inSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <FaqPageSchema faqs={filteredFaqs} />
      
      <section className="bg-brand-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-lora text-4xl md:text-5xl font-bold text-brand-dark">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">Find answers to common questions about our services, the process, and travel to Turkey.</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 sm:flex sm:space-x-2 bg-gray-100 p-1 rounded-md">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors w-full sm:w-auto ${
                    selectedCategory === cat ? 'bg-white text-brand-dark shadow' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full space-y-4">
            {filteredFaqs.length > 0 ? filteredFaqs.map((item: FAQItem) => (
              <Disclosure key={item.question} as="div" className="border-b">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center py-4 text-left text-lg font-medium text-brand-dark">
                      <span>{item.question}</span>
                      <ChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-brand-teal transition-transform`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-4 pr-8 text-brand-text">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )) : (
              <p className="text-center text-gray-500 py-8">No questions found matching your search.</p>
            )}
          </div>
        </div>
      </section>

      <FAQ_CTA />
    </>
  );
}