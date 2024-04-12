import React from 'react';
import Image from 'next/image';

function CustomImage2({ src, alt, width, height, center = false }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: center ? 'center' : 'initial',
    alignItems: center ? 'center' : 'initial',
  };

  return (
    <>
        <br />
        <div style={containerStyle}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
        />
        </div>
    </>
  );
}

export default CustomImage2;
