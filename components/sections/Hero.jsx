import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import React, { useState, useEffect } from "react";



const Hero = () => {
    const [age, setAge] = useState(0);

   useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge("2003-02-17"));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  let ageInMilliseconds = currentDate - birthDate;
  let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears.toFixed(8);
}




  return (
    
    <section className="relative py-10 xl:py-40 2xl:py-60" id="home">
   
   <Parallax   translateX={['-3000px', '0px']}
  scale={[0.75, 1]}

  easing="easeInQuad">
    


      <div className="absolute top-0 w-full xl:top-10 2xl:top-16">
        <img
          src="/images/developer.svg"
          width="100%"
          height="100%"
          alt="developer"
        />
      </div>




    </Parallax>
    
      <div className="container flex flex-wrap items-center lg:flex-nowrap">
        <div className="order-2 lg:order-1">
          <h1 className="mb-4">Max Ruotsalainen</h1>
          <p className="w-full text-white lg:w-4/5 max-w-96 md:text-lg xl:text-lg 2xl:text-xl !xl:leading-9">
                <p>Hello, I am Max Ruotsalainen and I am <b>{age} </b>years old. </p>
            I am a full stack developer working with Web technologies. <br />
            Loves to build highly scalable and maintainable web applications and
            back-ends. Loves everything <strong>JavaScript</strong>
          </p>
          <div className="mt-10 xl:mt-16">
          
          </div>
        </div>
        <div className="relative order-1 mb-5 lg:mb-0 lg:order-2 w-60 h-60 lg:  lg:-mt-10 rocketDiv">
          <Image
          className='rocket'
            src="/images/r.png"
            layout="fill"
            objectFit="cover"
            alt="Max Ruotsalainen"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
