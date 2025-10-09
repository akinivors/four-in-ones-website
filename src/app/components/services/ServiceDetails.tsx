// In app/components/services/ServiceDetails.tsx
"use client";

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { contentMap } from '../../../../lib/serviceContent';

// Same helper function as before
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface ServiceDetailsProps {
  tabs: Record<string, string>;
}

const ServiceDetails = ({ tabs }: ServiceDetailsProps) => {

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
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ServiceDetails;
