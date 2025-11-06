// In app/components/journey/JourneyTestimonials.tsx
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "The entire process was unbelievably smooth. My personal host, Ayse, was a lifesaver. She handled everything, and I never felt lost or alone. The 5-star hotel was the perfect place to recover.",
    name: "Jessica L.",
    procedure: "Mummy Makeover Patient"
  },
  {
    quote: "I was nervous about traveling for surgery, but the Get Beauty and Health team made it feel like a luxury vacation. From the VIP airport transfer to the constant support, every detail was taken care of. 10/10 experience.",
    name: "David R.",
    procedure: "Hair Transplant Patient"
  },
  {
    quote: "I can't praise the coordination enough. They organized my appointments, my stay in a beautiful hotel in İzmir, and even helped with sightseeing tips. It was a completely stress-free medical journey.",
    name: "Emily P.",
    procedure: "Cosmetic Dentistry Patient"
  },
];

const JourneyTestimonials = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Voices of Our Patients</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">Hear from real patients about their seamless and supportive journey with us.</p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-brand-background p-8 rounded-lg h-full">
                <div className="flex text-yellow-500 mb-4">
                  <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
                </div>
                <p className="italic text-brand-text mb-6">&quot;{item.quote}&quot;</p>
                <div>
                  <p className="font-bold text-brand-dark">{item.name}</p>
                  <p className="text-sm text-brand-text">{item.procedure}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default JourneyTestimonials;
