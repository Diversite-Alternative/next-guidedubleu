import Image from 'next/image'

 
export default function Page() {
  return (
    
      <Image
        src={team}
        alt="Picture of the author"
        width={600} 
        height={600} 
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

     
    )
}