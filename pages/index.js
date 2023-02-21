import { useState, useEffect } from 'react';
import Image from 'next/image';

import About from '../components/sections/About';
import Career from '../components/sections/Career';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Tech from '../components/sections/Tech';
import DevSetup from '../components/sections/DevSetup';
import { DEV_SETUP } from '@/data/dev-setup';
import { JOBS } from '../data/job';
import { PROJECTS } from '../data/project';
import Cv from '../components/sections/Cv';

export default function Home({ jobs, projects }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="pt-5 xl:pt-10">
      {loading && <div>Loading...</div>}
      <div className="fixed -right-20 -top-20" style={{ zIndex: -1 }}>
        <Image src="/images/flare.svg" height={800} width={800} alt="flare" />
      </div>
      <div className="fixed -left-20 -bottom-40" style={{ zIndex: -1 }}>
        <Image
          src="/images/flare-bottom.svg"
          height={800}
          width={800}
          alt="flare"
        />
      </div>
      <Header />
      <main>
        {!loading && (
          <>
            <Hero />
            <Projects projects={projects} />
            <Career jobs={jobs} />
            <About />
            <Tech />
            <DevSetup extensions={DEV_SETUP} />
            <Cv />
            <Contact />
            
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      jobs: JOBS,
      projects: PROJECTS,
    },
  };
}
