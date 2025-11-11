// In src/app/components/common/LegalTextWrapper.tsx
import React from 'react';

/**
 * Provides the centered, max-width container for legal text pages.
 * Does NOT use the 'prose' plugin.
 */
const LegalTextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {children}
      </div>
    </section>
  );
};

export default LegalTextWrapper;

