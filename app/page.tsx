import Image from 'next/image';
// import Logo from '../assets/logo.svg';
import GBDLogo from '../assets/gdb-logo.svg';
// import FavIcon from '../assets/favicon-v2.ico';
// import LandingImg from '../assets/main.svg';
import EffeilTower from '../assets/undraw_eiffel_tower.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import HomepageFeatures from '../components/HomepageFeatures';



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
            Le guide du bleu est une réponse concrète et efficace apportée aux étudiant(e)s étranger(e)
            souhaitant poursuivre et/ou poursuivant leurs études en France. 
          </p>
          {/* <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Chat with GDB-GPT</Link>
          </Button> */}
          <div className="mt-4 space-y-4">
              <Button asChild className='bg-orange-500 text-white'>
                <Link href='/docs/intro'>Commencer Ici </Link>
              </Button>

              {/* Ajouter de la marge entre les boutons */}
              {/* <div className="mt-8">
                <Button asChild className='bg-orange-500 text-white'>
                  <Link href='/add-job'>Chat with GDB-GPT</Link>
                </Button>
              </div> */}
          </div>
        </div>

        {/* <Image src={LandingImg} alt='landing' className='hidden lg:block ' /> */}
            <Image src={EffeilTower} alt='landing' className='hidden lg:block ' />
            {/* <div className="lg:w-100">
              <Image src={EffeilTower} alt='landing' className='lg:block ' />
            </div> */}
      </section>

      {/* <HomepageFeatures /> */}
      {/* Section pour les images horizontales */}
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-8 mt-5">
        <h2 className="text-2xl font-bold mb-4">Découvrez nos articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="bg-gray-100 rounded-lg p-4">
            <Image src={EffeilTower} alt="Article 1" width={400} height={200} />
            <h3 className="text-lg font-semibold mt-2">Titre de l'article 1</h3>
            <p className="text-gray-600 mt-2">Description de l'article 1</p>
          </article>
          <article className="bg-gray-100 rounded-lg p-4">
            <Image src={EffeilTower} alt="Article 2" width={400} height={200} />
            <h3 className="text-lg font-semibold mt-2">Titre de l'article 2</h3>
            <p className="text-gray-600 mt-2">Description de l'article 2</p>
          </article>
          <article className="bg-gray-100 rounded-lg p-4">
            <Image src={EffeilTower} alt="Article 3" width={400} height={200} />
            <h3 className="text-lg font-semibold mt-2">Titre de l'article 3</h3>
            <p className="text-gray-600 mt-2">Description de l'article 3</p>
          </article>
        </div>
      </section> */}
    </main>
  );
}