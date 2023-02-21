import Head from 'next/head';
import '../styles/globals.scss';
import { ParallaxProvider } from 'react-scroll-parallax';


function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
  
      <Head>
        <title>Max Ruotsalainen - All things Web | Developer + Designer</title>
      </Head>
      <Component {...pageProps} />
  

  </ParallaxProvider>
 
  );
}

export default MyApp;
