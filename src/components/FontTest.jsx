import React, { useEffect, useState } from 'react';

const FontTest = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Check if Game of Thrones font is loaded
    const checkFont = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Test with Game of Thrones font
      context.font = '16px Got';
      const gotWidth = context.measureText('Test').width;
      
      // Test with fallback font
      context.font = '16px serif';
      const serifWidth = context.measureText('Test').width;
      
      // If widths are different, font is loaded
      setFontLoaded(gotWidth !== serifWidth);
    };

    // Check after fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(checkFont);
    } else {
      // Fallback for older browsers
      setTimeout(checkFont, 1000);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
      Font Status: {fontLoaded ? '✅ Loaded' : '❌ Fallback'}
    </div>
  );
};

export default FontTest;
