"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "The entire experience exceeded my expectations. From the consultation to recovery, the care was exceptional. My confidence has been completely transformed.",
      author: "Sarah L.",
      service: "Rhinoplasty Patient",
      rating: 5,
    },
    {
      id: 2,
      quote: "I was nervous about medical tourism, but Get Beauty and Health made everything seamless. The facilities were world-class and the results speak for themselves.",
      author: "Michael R.",
      service: "Hair Transplant Patient",
      rating: 5,
    },
    {
      id: 3,
      quote: "The all-inclusive package was incredible value. No hidden costs, luxury accommodation, and life-changing results. I couldn't be happier.",
      author: "Emma K.",
      service: "Cosmetic Dentistry Patient",
      rating: 5,
    },
    {
      id: 4,
      quote: "Professional, caring, and skilled - everything I hoped for. The team guided me through every step and the results have changed my life.",
      author: "James T.",
      service: "Obesity Surgery Patient",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora font-bold text-brand-dark mb-6">
            Success Stories from Our Patients
          </h2>
          <p className="text-lg font-inter text-brand-text max-w-3xl mx-auto leading-relaxed">
            Hear from real patients who trusted us with their medical journey and experienced 
            life-changing results with world-class care.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-between">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="flex-grow">
                    <p className="text-brand-text font-inter italic text-center leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                  
                  {/* Author */}
                  <div className="text-center">
                    <p className="font-lora font-semibold text-brand-dark text-lg">
                      {testimonial.author}
                    </p>
                    <p className="font-inter text-brand-dark text-sm mt-1">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #408E7B;
          opacity: 0.3;
          margin: 0 6px;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #E88C32;
        }
      `}</style>
    </section>
  );
}
