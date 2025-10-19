import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  // Array of images for the gallery
  const galleryImages = [
    { id: 1, src: '/advogue.jpeg', alt: 'Advouge' },
    { id: 2, src: '/entrophosis.jpeg', alt: 'Entrorphosis' },
    { id: 3, src: '/uiux.jpeg', alt: 'UI/UX Hackaton' },
    { id: 4, src: '/design.jpeg', alt: 'Designing 101' },
    { id: 5, src: 'https://placehold.co/400x600/0d1a2e/7DF9FF?text=Pragyatha+5', alt: 'Event Image 5' },
    { id: 6, src: 'https://placehold.co/400x600/0d1a2e/7DF9FF?text=Pragyatha+6', alt: 'Event Image 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    }, 3000); // Change image every 4 seconds
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [galleryImages.length]);

  const customStyles = `
    .coverflow-container {
      perspective: 1200px;
      position: relative;
      width: 100%;
      height: 450px; /* Set a fixed height for the container */
    }

    .coverflow-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 400px; /* Base height for images */
      width: auto;
      border-radius: 0.75rem;
      border: 2px solid rgba(0, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0004);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .coverflow-container {
            height: 350px;
        }
        .coverflow-image {
            height: 300px;
        }
    }
  `;

  return (
    <div className="bg-black text-white py-20 font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-5xl tracking-wider mb-4 uppercase font-mon">
            Glimpse of Pragyatha
          </h1>

        </div>
      </div>
      
      <div className="coverflow-container">
        {galleryImages.map((image, index) => {
          const offset = index - currentIndex;
          const isVisible = Math.abs(offset) <= 2; // Only show center, and 2 images on each side

          const style = {
            transform: `
              rotateY(${offset * -35}deg)
              translateX(${offset * 30}%)
              scale(${1 - Math.abs(offset) * 0.2})
            `,
            opacity: isVisible ? '1' : '0',
            zIndex: galleryImages.length - Math.abs(offset),
          };

          return (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="coverflow-image"
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;

