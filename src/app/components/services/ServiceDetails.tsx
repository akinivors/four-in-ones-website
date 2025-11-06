// In app/components/services/ServiceDetails.tsx
"use client";

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

// --- FIX: Updated import path ---
import { contentMap } from '@/lib/serviceContent';
import { AlertTriangle } from 'lucide-react'; 

// Same helper function as before
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface ServiceDetailsProps {
  tabs: Record<string, string>;
  risks?: string[]; 
}

const ServiceDetails = ({ tabs, risks }: ServiceDetailsProps) => {

  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-lora text-3xl font-bold text-brand-dark text-center mb-12">In-Depth Information</h2>
        <Tab.Group as="div" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Vertical Tab List */}
          <Tab.List className="flex flex-col space-y-2 md:col-span-1">
            {Object.keys(tabs).map((tabName) => (
              <Tab as={Fragment} key={tabName}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'w-full text-left rounded-lg px-4 py-3 text-md font-medium leading-5 transition-colors',
                      'focus:outline-none focus:ring-2 ring-brand-teal',
                      selected
                        ? 'bg-brand-teal text-white shadow'
                        : 'text-brand-text bg-white hover:bg-gray-200'
                    )}
                  >
                    {tabName}
                  </button>
                )}
              </Tab>
            ))}

            {risks && risks.length > 0 && (
              <Tab as={Fragment} key="risks">
                {({ selected }) => (
                  <button
                    className={classNames(
                      'w-full text-left rounded-lg px-4 py-3 text-md font-medium leading-5 transition-colors',
                      'focus:outline-none focus:ring-2 ring-red-500',
                      selected
                        ? 'bg-red-600 text-white shadow'
                        : 'text-red-700 bg-red-100 hover:bg-red-200'
                    )}
                  >
                    Risks & Safety
                  </button>
                )}
              </Tab>
            )}

          </Tab.List>

          {/* Tab Content Panels */}
          <Tab.Panels className="md:col-span-2 lg:col-span-3">
            {Object.entries(tabs).map(([, contentKey], idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl bg-white p-6 lg:p-8 prose max-w-none"
              >
                {contentMap[contentKey] || (
                  <div className="space-y-4">
                    <p>Content for {contentKey} will be available soon.</p>
                  </div>
                )}
              </Tab.Panel>
            ))}

            {risks && risks.length > 0 && (
              <Tab.Panel
                key="risks"
                className="rounded-xl bg-white p-6 lg:p-8"
              >
                <div className="prose max-w-none">
                  <h3 className="font-lora text-2xl font-bold text-brand-dark mb-4">Informed Consent: Risks & Safety</h3>
                  <p className="text-brand-text">
                    Transparency is a core part of our commitment to patient care. It is important to understand the potential risks associated with any surgical procedure. Please discuss these thoroughly with your surgeon.
                  </p>
                  <div className="columns-1 md:columns-2 gap-x-8 mt-6">
                    {risks.map((risk, index) => (
                      <div key={index} className="flex items-start mb-4 break-inside-avoid not-prose">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-brand-text">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            )}

          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ServiceDetails;