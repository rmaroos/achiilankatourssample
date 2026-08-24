import React, { useState } from 'react';

interface TourGalleryProps {
  title: string;
  images: string[];
}

export function TourGallery({ title, images }: TourGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white">
        <img
          src={images[activeIndex]}
          alt={`${title} — photo ${activeIndex + 1} of ${images.length}`}
          className="h-72 w-full object-cover sm:h-96" />
        
      </div>
      {images.length > 1 &&
      <ul className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) =>
        <li key={`${image}-${index}`}>
              <button
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-current={index === activeIndex}
            className={[
            'block overflow-hidden rounded-xl border-2 transition-colors duration-150 ease-smooth',
            index === activeIndex ? 'border-clay-500' : 'border-transparent hover:border-sand-400'].
            join(' ')}>
            
                <img
              src={image}
              alt=""
              className="h-16 w-24 object-cover"
              loading="lazy" />
            
                <span className="sr-only">{`Show photo ${index + 1}`}</span>
              </button>
            </li>
        )}
        </ul>
      }
    </div>);

}