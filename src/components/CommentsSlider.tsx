"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Quote, ChevronRight, ChevronLeft, X } from 'lucide-react';

const IMAGES = [
  "1.PNG", "12147475252.PNG", "15151.PNG", "1878455.PNG", 
  "25417521.PNG", "32474151.PNG", "4184845415.PNG", "484582622.PNG", 
  "512512512521.PNG", "51251521.PNG", "5151151.PNG", "515151256.PNG", 
  "515158151.PNG", "5253533.PNG", "Capture.PNG"
];

export default function CommentsSlider() {
  // Main Slider
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fullscreen Lightbox
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [emblaRefFs, emblaApiFs] = useEmblaCarousel({ loop: true, align: 'center' });

  // Main Slider Navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Fullscreen Navigation
  const scrollPrevFs = useCallback(() => emblaApiFs && emblaApiFs.scrollPrev(), [emblaApiFs]);
  const scrollNextFs = useCallback(() => emblaApiFs && emblaApiFs.scrollNext(), [emblaApiFs]);

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

  // Sync fullscreen slider to the clicked image
  useEffect(() => {
    if (isFullscreen && emblaApiFs) {
      emblaApiFs.scrollTo(fullscreenIndex, true); // true = jump instantly without animation
    }
  }, [isFullscreen, emblaApiFs, fullscreenIndex]);

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="relative max-w-5xl mx-auto px-12 sm:px-16">
        <div className="overflow-hidden" ref={emblaRef}>
          {/* We use dir="ltr" internally for Embla to swipe naturally, but keep content natural */}
          <div className="flex touch-pan-y items-center h-80 py-8" dir="ltr">
            {IMAGES.map((img, index) => {
              const isActive = index === selectedIndex;
              return (
                <div 
                  key={index} 
                  className={`flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_50%] min-w-0 px-2 sm:px-4 transition-all duration-500 ease-in-out ${isActive ? 'scale-110 z-10 opacity-100 cursor-pointer' : 'scale-90 opacity-40 cursor-pointer'}`}
                  onClick={() => openFullscreen(index)}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-2 w-full aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center">
                    
                    {/* Decorative Quote Icon */}
                    <div className="absolute top-2 right-2 text-algeria-green/10 z-10 pointer-events-none">
                      <Quote size={32} className="transform rotate-180" />
                    </div>
                    
                    <div className="relative w-full h-full pointer-events-none">
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
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
          
          <button 
            onClick={closeFullscreen}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/5 hover:bg-black/10 text-gray-900 p-3 rounded-full transition-colors z-[110]"
            aria-label="إغلاق"
          >
            <X size={32} />
          </button>

          <div className="w-full h-full max-w-7xl mx-auto flex items-center relative px-4 sm:px-16" dir="ltr">
            
            <div className="overflow-hidden w-full h-[80vh]" ref={emblaRefFs}>
              <div className="flex touch-pan-y items-center h-full">
                {IMAGES.map((img, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative px-2">
                    <Image 
                      src={`/coments/${img}`} 
                      alt={`رسالة دعم ${index + 1}`}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="100vw"
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={scrollNextFs} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/5 hover:bg-black/10 text-gray-900 shadow-sm rounded-full p-3 transition-colors z-[110] hidden sm:block"
            >
              <ChevronLeft size={36} />
            </button>
            
            <button 
              onClick={scrollPrevFs} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/5 hover:bg-black/10 text-gray-900 shadow-sm rounded-full p-3 transition-colors z-[110] hidden sm:block"
            >
              <ChevronRight size={36} />
            </button>

          </div>
          
          <div className="absolute bottom-8 text-gray-500 font-medium text-sm">
             اسحب للتنقل
          </div>
        </div>
      )}
    </>
  );
}
