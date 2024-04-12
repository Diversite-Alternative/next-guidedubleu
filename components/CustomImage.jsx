import React from 'react'
import Image from 'next/image'

function CustomImage({ src, alt }) {
  return (
    <div className="flex justify-center items-center">
      {/* <div className="max-w-3xl mx-auto px-4"> */}
        
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="mx-auto"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        {/* </div> */}
    </div>
  );
}

export default CustomImage


