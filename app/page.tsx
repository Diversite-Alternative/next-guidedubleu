import Image from 'next/image';
// import Logo from '../assets/logo.svg';
import GBDLogo from '../assets/gdb-logo.svg';
// import FavIcon from '../assets/favicon-v2.ico';
// import LandingImg from '../assets/main.svg';
import EffeilTower from '../assets/undraw_eiffel_tower.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      {/* <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={FavIcon} 
        width={50}
        height={50}
        
        alt='logo' />
        Guide du Bleu
      </header> */}
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between'>
          <div className="flex items-center">
              <Image src={GBDLogo} 
              // width={90}
              // height={90}
              
              alt='logo guide du bleu' />
              {/* <span className="ml-2 text-primary">Guide du Bleu</span> */}
          </div>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            bienvenue <span className='text-primary'>en</span> france
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          {/* <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Chat with GDB-GPT</Link>
          </Button> */}
          <div className="mt-4 space-y-4">
              <Button asChild className='bg-orange-500 text-white'>
                <Link href='/docs/getting-started'>Commencer Ici </Link>
              </Button>

              {/* Ajouter de la marge entre les boutons */}
              <div className="mt-8">
                <Button asChild className='bg-orange-500 text-white'>
                  <Link href='/add-job'>Chat with GDB-GPT</Link>
                </Button>
              </div>
          </div>
        </div>

        {/* <Image src={LandingImg} alt='landing' className='hidden lg:block ' /> */}
            <Image src={EffeilTower} alt='landing' className='hidden lg:block ' />
 
      </section>
    </main>
  );
}