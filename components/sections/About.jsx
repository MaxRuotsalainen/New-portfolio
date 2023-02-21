import React from 'react';
import SectionHeading from '../SectionHeading';

const About = () => {
  return (
    <section className="container site-section" id="about">
      <SectionHeading heading="Know Me" subheading="about" />
      <div className="mt-10 xl:text-lg">
        <p className="mb-4">
      
          "I am a  <strong>full-stack web developer</strong>, based in Stockholm, Sweden, with a passion for creative problem solving and out-of-the-box thinking
          </p>
          <p className="mb-4">
          With extensive experience in React.js, Next.js, Prisma.js, and Bootstrap, I have a strong understanding of modern web development technologies. I excel in both individual and team environments, making me a versatile player in any project.
          </p>
   
        <p className="mb-4">
        My experience with Adobe products, including Photoshop and After Effects, only adds to my ability to bring my creative ideas to life. Whether working alone or collaborating with a team, I am dedicated to delivering high-quality results and pushing the limits of what is possible. My attention to detail and drive for excellence make me a valuable asset to any development team."
        </p>
        <p>
         
        </p>
      </div>
    </section>
  );
};

export default About;
