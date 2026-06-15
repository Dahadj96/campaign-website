"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const IMAGES = [
  "1.PNG", "12147475252.PNG", "15151.PNG", "1878455.PNG", 
  "25417521.PNG", "32474151.PNG", "4184845415.PNG", "484582622.PNG", 
  "512512512521.PNG", "51251521.PNG", "5151151.PNG", "515151256.PNG", 
  "515158151.PNG", "5253533.PNG", "Capture.PNG"
];

export default function CommentsSlider() {
  // Setup embla with loop and center alignment
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-5xl mx-auto px-12 sm:px-16">
      <div className="overflow-hidden" ref={emblaRef}>
        {/* We use dir="ltr" internally for Embla to swipe naturally, but keep content natural */}
        <div className="flex touch-pan-y items-center h-80 py-8" dir="ltr">
          {IMAGES.map((img, index) => {
            const isActive = index === selectedIndex;
            return (
              <div 
                key={index} 
                className={`flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_40%] min-w-0 px-2 sm:px-4 transition-all duration-500 ease-in-out ${isActive ? 'scale-110 z-10 opacity-100' : 'scale-90 opacity-40'}`}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-2 h-48 sm:h-56 w-full flex items-center justify-center">
                  
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-2 right-2 text-algeria-green/20 z-10">
                    <Quote size={40} className="transform rotate-180" />
                  </div>
                  
                  <div className="relative w-full h-full">
                    <Image 
                      src={`/coments/${img}`} 
                      alt={`رسالة دعم ${index + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 320px, 384px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Buttons (Swapped for RTL context) */}
      <button 
        onClick={scrollNext} 
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-algeria-green shadow-lg rounded-full p-3 hover:bg-algeria-green hover:text-white transition-colors z-20 border border-gray-100"
        aria-label="السابق"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        onClick={scrollPrev} 
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-algeria-green shadow-lg rounded-full p-3 hover:bg-algeria-green hover:text-white transition-colors z-20 border border-gray-100"
        aria-label="التالي"
      >
        <ChevronRight size={28} />
      </button>

      <div className="flex justify-center gap-2 mt-4 text-sm text-gray-400 font-medium font-sans">
        {selectedIndex + 1} / {IMAGES.length}
      </div>
    </div>
  );
}
