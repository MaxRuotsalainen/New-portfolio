import React from 'react';
import SectionHeading from '../SectionHeading';

const Tech = () => {
  const tech = [
    'angular',
    'react',
    'js',
    'ts',
    'sass',
    'node',
    'postgres',
    'git',
    'figma',
    'vscode',
    'next',
  ];
  return (
    <section className="container site-section">
      <SectionHeading heading="Tech" subheading="stack" />
      <div className="grid grid-cols-3 gap-6 mt-8 md:grid-cols-6 lg:grid-cols-9 lg:gap-12">
        {tech.map((item) => {
          return (
            <article
              className="flex items-center justify-center glass-card"
              key={item}
            >
              <img
                src={`/images/tech-stack/${item}.svg`}
                alt={item}
                width="90px"
                height="90px"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
