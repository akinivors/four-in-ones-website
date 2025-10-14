import React, { useState } from 'react';
import Image from 'next/image';

interface HotspotProps {
  areaId: string;
  path: string;
  onHover: (id: string | null, event?: React.MouseEvent | React.TouchEvent) => void;
}

const Hotspot = ({ areaId, path, onHover }: HotspotProps) => (
  <path
    d={path}
    onMouseEnter={(e) => onHover(areaId, e)}
    onMouseLeave={() => onHover(null)}
    onTouchStart={(e) => onHover(areaId, e)}
    onTouchEnd={() => onHover(null)}
    className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
    role="button"
    aria-label={`Show ${areaId.replace(/-/g, ' ')} information`}
    tabIndex={0}
  />
);

interface InteractiveBodyMapProps {
  setHighlightedCategory: (category: string | null) => void;
}

// Tooltip content for each service
const tooltipContent: { [key: string]: { title: string; description: string } } = {
  'hair-transplant': {
    title: 'Hair Transplantation',
    description: 'Advanced FUE & DHI for natural-looking results'
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    description: 'Complete smile makeovers with cutting-edge techniques'
  },
  'rhinoplasty': {
    title: 'Rhinoplasty (Nose Job)',
    description: 'Reshape and refine your nose for facial harmony'
  },
  'otoplasty': {
    title: 'Otoplasty (Ear Surgery)',
    description: 'Correct protruding or misshapen ears'
  },
  'buccal-fat': {
    title: 'Buccal Fat Removal',
    description: 'Slim and contour your cheeks for a defined look'
  },
  'breast-augmentation': {
    title: 'Breast Augmentation',
    description: 'Enhance breast size and shape with implants'
  },
  'brachioplasty': {
    title: 'Brachioplasty (Arm Lift)',
    description: 'Remove excess skin for toned, sculpted arms'
  },
  'thigh-lift': {
    title: 'Thigh Lift',
    description: 'Tighten and contour inner and outer thighs'
  },
  'obesity-surgery': {
    title: 'Obesity Surgery',
    description: 'Life-changing bariatric solutions for lasting weight loss'
  },
  'eye-surgery': {
    title: 'Eye Surgery',
    description: 'Advanced procedures for vision correction and eye health'
  },
  'orthopedic-surgery': {
    title: 'Orthopedic Surgery',
    description: 'Expert treatment for bones, joints, and musculoskeletal issues'
  },
  'smp': {
    title: 'Scalp Micropigmentation',
    description: 'Non-invasive solution for hair loss and thinning'
  }
};

const InteractiveBodyMap = ({ setHighlightedCategory }: InteractiveBodyMapProps) => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipSide, setTooltipSide] = useState<'left' | 'right'>('right');

  const handleHover = (areaId: string | null, event?: React.MouseEvent | React.TouchEvent) => {
    setHoveredArea(areaId);
    
    // Map specific procedures to their category for card highlighting
    const procedureToCategory: { [key: string]: string } = {
      'rhinoplasty': 'plastic-surgery',
      'otoplasty': 'plastic-surgery',
      'buccal-fat': 'plastic-surgery',
      'breast-augmentation': 'plastic-surgery',
      'brachioplasty': 'plastic-surgery',
      'thigh-lift': 'plastic-surgery',
      'hair-transplant': 'hair-transplant',
      'cosmetic-dentistry': 'cosmetic-dentistry',
      'obesity-surgery': 'obesity-surgery',
      'eye-surgery': 'eye-surgery',
      'orthopedic-surgery': 'orthopedic-surgery',
      'smp': 'smp'
    };
    
    const categoryId = areaId ? (procedureToCategory[areaId] || null) : null;
    setHighlightedCategory(categoryId);
    
    if (event && areaId) {
      // Get the SVG container's bounding rectangle
      const svgElement = event.currentTarget.closest('svg');
      if (svgElement) {
        const parentRect = svgElement.parentElement?.getBoundingClientRect();
        
        if (parentRect) {
          // Calculate position relative to the image container
          let relativeX: number;
          let relativeY: number;

          // Handle both mouse and touch events
          if ('touches' in event) {
            const touch = event.touches[0];
            relativeX = touch.clientX - parentRect.left;
            relativeY = touch.clientY - parentRect.top;
          } else {
            relativeX = event.clientX - parentRect.left;
            relativeY = event.clientY - parentRect.top;
          }
          
          setTooltipPosition({
            x: relativeX,
            y: relativeY
          });
          
          // Determine which side to show tooltip based on x position
          if (relativeX < 90) {
            setTooltipSide('left');
          } else {
            setTooltipSide('right');
          }
        }
      }
    }
  };

  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-lora text-3xl font-bold text-brand-dark">Explore Our Services Visually</h2>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text">Hover over an area on the map to highlight relevant treatments below.</p>
        <div className="relative mt-8 max-w-xs mx-auto">
          <Image 
            src="/images/body-map.png" 
            alt="Interactive body map" 
            width={241} 
            height={500} 
            className="w-full h-auto" 
          />
          
          {/* Tooltip */}
          {hoveredArea && tooltipContent[hoveredArea] && (
            <>
              {/* Connecting Line */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <line 
                  x1={tooltipPosition.x} 
                  y1={tooltipPosition.y} 
                  x2={tooltipSide === 'left' ? tooltipPosition.x - 60 : tooltipPosition.x + 60} 
                  y2={tooltipPosition.y - 30}
                  stroke="#407e8e"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  className="animate-pulse"
                />
                {/* Small dot at hotspot */}
                <circle 
                  cx={tooltipPosition.x} 
                  cy={tooltipPosition.y} 
                  r="4" 
                  fill="#407e8e"
                  className="animate-pulse"
                />
              </svg>
              
              {/* Tooltip Box */}
              <div 
                className="absolute z-20 bg-brand-dark text-white px-4 py-3 rounded-lg shadow-2xl max-w-xs pointer-events-none border-2 border-brand-teal"
                style={{
                  left: tooltipSide === 'left' ? `${tooltipPosition.x - 220}px` : `${tooltipPosition.x + 70}px`,
                  top: `${tooltipPosition.y - 50}px`,
                }}
              >
                <div className="font-lora font-bold text-sm mb-1">
                  {tooltipContent[hoveredArea].title}
                </div>
                <div className="text-xs text-white/80">
                  {tooltipContent[hoveredArea].description}
                </div>
              </div>
            </>
          )}
          
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 241 500">
            {/* Head/Hair Area - Hair Transplant */}
            {/* You can adjust these coordinates: M = move to, C = curve, L = line to, Z = close path */}
            <Hotspot areaId="hair-transplant" path="M100 10 L150 10 L150 40 L100 40 Z" onHover={handleHover} />
            
            {/* Face/Mouth Area - Cosmetic Dentistry */}
            {/* Adjust the mouth/teeth area coordinates here */}
            <Hotspot areaId="cosmetic-dentistry" path="M110 75 L140 75 L140 85 L110 85 Z" onHover={handleHover} />

            {/* Eye Area - Eye Surgery */}
            <circle cx="113" cy="52" r="4" 
              onMouseEnter={(e) => handleHover('eye-surgery', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('eye-surgery', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show eye surgery information"
              tabIndex={0}
            />
            <circle cx="137" cy="52" r="4" 
              onMouseEnter={(e) => handleHover('eye-surgery', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('eye-surgery', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show eye surgery information"
              tabIndex={0}
            />

            {/* Scalp Area - SMP (Micro Scalp Pigmentation) */}
            <circle cx="125" cy="20" r="8" 
              onMouseEnter={(e) => handleHover('smp', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('smp', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show scalp micropigmentation information"
              tabIndex={0}
            />

            {/* Plastic Surgery - Multiple Circular Hotspots for Specific Procedures */}
            {/* Nose Area - Rhinoplasty */}
            <circle cx="125" cy="60" r="8" 
              onMouseEnter={(e) => handleHover('rhinoplasty', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('rhinoplasty', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show rhinoplasty information"
              tabIndex={0}
            />
            {/* Ear Area (Right) - Otoplasty */}
            <circle cx="100" cy="60" r="6" 
              onMouseEnter={(e) => handleHover('otoplasty', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('otoplasty', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show otoplasty information"
              tabIndex={0}
            />
            {/* Ear Area (Left) - Otoplasty */}
            <circle cx="150" cy="60" r="6" 
              onMouseEnter={(e) => handleHover('otoplasty', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('otoplasty', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show otoplasty information"
              tabIndex={0}
            />
            {/* Cheek Area (Right) - Buccal Fat Removal */}
            <circle cx="112" cy="63" r="5" 
              onMouseEnter={(e) => handleHover('buccal-fat', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('buccal-fat', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show buccal fat removal information"
              tabIndex={0}
            />
            {/* Cheek Area (Left) - Buccal Fat Removal */}
            <circle cx="138" cy="63" r="5" 
              onMouseEnter={(e) => handleHover('buccal-fat', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('buccal-fat', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show buccal fat removal information"
              tabIndex={0}
            />
            {/* Breast Area (Right) - Breast Augmentation */}
            <circle cx="108" cy="148" r="20" 
              onMouseEnter={(e) => handleHover('breast-augmentation', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('breast-augmentation', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show breast augmentation information"
              tabIndex={0}
            />
            {/* Breast Area (Left) - Breast Augmentation */}
            <circle cx="145" cy="148" r="20" 
              onMouseEnter={(e) => handleHover('breast-augmentation', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('breast-augmentation', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show breast augmentation information"
              tabIndex={0}
            />
            {/* Arm Area (Right) - Brachioplasty */}
            <circle cx="60" cy="200" r="15" 
              onMouseEnter={(e) => handleHover('brachioplasty', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('brachioplasty', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show brachioplasty information"
              tabIndex={0}
            />
            {/* Arm Area (Left) - Brachioplasty */}
            <circle cx="180" cy="200" r="15" 
              onMouseEnter={(e) => handleHover('brachioplasty', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('brachioplasty', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show brachioplasty information"
              tabIndex={0}
            />
            {/* Thigh Area (Right) - Thigh Lift */}
            <circle cx="95" cy="320" r="18" 
              onMouseEnter={(e) => handleHover('thigh-lift', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('thigh-lift', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show thigh lift information"
              tabIndex={0}
            />
            {/* Thigh Area (Left) - Thigh Lift */}
            <circle cx="145" cy="320" r="18" 
              onMouseEnter={(e) => handleHover('thigh-lift', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('thigh-lift', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show thigh lift information"
              tabIndex={0}
            />
            
            {/* Knee Area - Orthopedic Surgery */}
            <circle cx="100" cy="385" r="12" 
              onMouseEnter={(e) => handleHover('orthopedic-surgery', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('orthopedic-surgery', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show orthopedic surgery information"
              tabIndex={0}
            />
            <circle cx="140" cy="385" r="12" 
              onMouseEnter={(e) => handleHover('orthopedic-surgery', e)}
              onMouseLeave={() => handleHover(null)}
              onTouchStart={(e) => handleHover('orthopedic-surgery', e)}
              onTouchEnd={() => handleHover(null)}
              className="fill-brand-teal/20 stroke-brand-teal stroke-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              role="button"
              aria-label="Show orthopedic surgery information"
              tabIndex={0}
            />
            
            {/* Abdomen Area - Obesity Surgery */}
            {/* Adjust the stomach/abdomen area coordinates here */}
            <Hotspot areaId="obesity-surgery" path="M80 220 L170 220 L170 290 L80 290 Z" onHover={handleHover} />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBodyMap;
