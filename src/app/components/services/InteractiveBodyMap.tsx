import React, { useState } from 'react';
import Image from 'next/image';

interface InteractiveBodyMapProps {
  setHighlightedCategory: (category: string | null) => void;
}

// Pinpoint indicator component - visible marker showing hoverable areas
interface PinpointProps {
  cx: number;
  cy: number;
  size?: number;
  isActive?: boolean;
  areaId: string;
  onHover: (id: string | null, event?: React.MouseEvent | React.TouchEvent) => void;
}

const Pinpoint = ({ cx, cy, size = 5, isActive, areaId, onHover }: PinpointProps) => (
  <g 
    className="cursor-pointer"
    onMouseEnter={(e) => onHover(areaId, e)}
    onMouseLeave={() => onHover(null)}
    onTouchStart={(e) => onHover(areaId, e)}
    onTouchEnd={() => onHover(null)}
  >
    {/* Hover area (larger invisible circle for easier interaction) */}
    <circle 
      cx={cx} 
      cy={cy} 
      r={size + 8} 
      className="fill-transparent"
    />
    {/* Outer glow ring - subtle pulse */}
    <circle 
      cx={cx} 
      cy={cy} 
      r={size + 3} 
      className={`fill-brand-teal/20 ${isActive ? 'fill-brand-orange/30' : ''} transition-all duration-300`}
    />
    {/* Inner solid dot */}
    <circle 
      cx={cx} 
      cy={cy} 
      r={size} 
      className={`${isActive ? 'fill-brand-orange' : 'fill-brand-teal'} transition-colors duration-200`}
    />
    {/* Center highlight for 3D effect */}
    <circle 
      cx={cx - size * 0.2} 
      cy={cy - size * 0.2} 
      r={size * 0.35} 
      className="fill-white/50"
    />
  </g>
);

// Combined pinpoint data with positions and hotspot sizes
const serviceAreas = [
  { id: 'hair-transplant', x: 120, y: 18, size: 5 },
  { id: 'eye-surgery', x: 135, y: 48, size: 4 },
  { id: 'rhinoplasty', x: 120, y: 58, size: 4 },
  { id: 'otoplasty', x: 103, y: 55, size: 4 },
  { id: 'cosmetic-dentistry', x: 120, y: 72, size: 4 },
  { id: 'breast-augmentation', x: 135, y: 138, size: 6 },
  { id: 'brachioplasty', x: 75, y: 175, size: 5 },
  { id: 'obesity-surgery', x: 120, y: 210, size: 7 },
  { id: 'thigh-lift', x: 105, y: 310, size: 6 },
  { id: 'orthopedic-surgery', x: 138, y: 370, size: 5 },
];

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
  'breast-augmentation': {
    title: 'Breast Surgery',
    description: 'Enhance, lift, or reduce breast size and shape'
  },
  'brachioplasty': {
    title: 'Arm Lift (Brachioplasty)',
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
};

// Map procedures to categories for card highlighting
const procedureToCategory: { [key: string]: string } = {
  'rhinoplasty': 'plastic-surgery',
  'otoplasty': 'plastic-surgery',
  'breast-augmentation': 'plastic-surgery',
  'brachioplasty': 'plastic-surgery',
  'thigh-lift': 'plastic-surgery',
  'hair-transplant': 'hair-transplant',
  'cosmetic-dentistry': 'cosmetic-dentistry',
  'obesity-surgery': 'obesity-surgery',
  'eye-surgery': 'eye-surgery',
  'orthopedic-surgery': 'orthopedic-surgery',
};

const InteractiveBodyMap = ({ setHighlightedCategory }: InteractiveBodyMapProps) => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipSide, setTooltipSide] = useState<'left' | 'right'>('right');

  const handleHover = (areaId: string | null, event?: React.MouseEvent | React.TouchEvent) => {
    setHoveredArea(areaId);
    
    const categoryId = areaId ? (procedureToCategory[areaId] || null) : null;
    setHighlightedCategory(categoryId);
    
    if (event && areaId) {
      const svgElement = event.currentTarget.closest('svg');
      if (svgElement) {
        const parentRect = svgElement.parentElement?.getBoundingClientRect();
        
        if (parentRect) {
          let relativeX: number;
          let relativeY: number;

          if ('touches' in event) {
            const touch = event.touches[0];
            relativeX = touch.clientX - parentRect.left;
            relativeY = touch.clientY - parentRect.top;
          } else {
            relativeX = event.clientX - parentRect.left;
            relativeY = event.clientY - parentRect.top;
          }
          
          setTooltipPosition({ x: relativeX, y: relativeY });
          setTooltipSide(relativeX < parentRect.width / 2 ? 'right' : 'left');
        }
      }
    }
  };

  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-lora text-3xl font-bold text-brand-dark">Explore Our Services Visually</h2>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text">
          Hover over the <span className="inline-flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mx-1"></span></span> pinpoints on the body to discover our treatments.
        </p>
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
                  x2={tooltipSide === 'left' ? tooltipPosition.x - 40 : tooltipPosition.x + 40} 
                  y2={tooltipPosition.y - 20}
                  stroke="#407e8e"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>
              
              {/* Tooltip Box */}
              <div 
                className="absolute z-20 bg-brand-dark text-white px-4 py-3 rounded-lg shadow-2xl max-w-xs pointer-events-none border-2 border-brand-teal"
                style={{
                  left: tooltipSide === 'left' ? `${tooltipPosition.x - 200}px` : `${tooltipPosition.x + 50}px`,
                  top: `${tooltipPosition.y - 40}px`,
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
          
          {/* Interactive Pinpoints */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 241 500">
            {serviceAreas.map((area) => (
              <Pinpoint 
                key={area.id}
                areaId={area.id}
                cx={area.x} 
                cy={area.y}
                size={area.size}
                isActive={hoveredArea === area.id}
                onHover={handleHover}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBodyMap;
