import React from 'react';
import SectionHeading from '../SectionHeading';
import { Parallax } from 'react-scroll-parallax';
const Career = ({ jobs }) => {
  return (
    <section className="container site-section" id="career">
  <h1> What I do</h1>
      <div className="relative mt-10">
        {jobs.map((item) => {
          return (
            <article key={item.Category} className="relative job-card">
                 <Parallax
    translateX={['-100px', '0px', '0px']}
    scale={[0.15, 1]}
    easing={[.03,.52,.05,.95]}
    opacity={[0, 1, 'easeInCubic'] }
   
   

  >
              <header className="flex flex-wrap mb-2">
                <img
                  src={`/images/job/${item.logo}`}
                  alt={item.Category}
                  height="50"
                  width="50"
                />
                <div className="block ml-4 md:hidden">
                  <div className="flex items-center">
                    <a
                      href={item.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={item.Category}
                      className="text-white hover:text-primary"
                    >
                      <p className="mr-3 font-semibold text-md">
                        {item.Category}
                      </p>
                    </a>
                  </div>
                  <p className="text-sm font-semibold">{item.subCategory}</p>
                  <div className="flex items-center">
                    <p className="mt-1 mr-4 text-xs">
                      {item.from} - {item.to}
                    </p>
                    <p className="text-xs">{item.location}</p>
                  </div>
                </div>
                <div className="hidden ml-4 md:block">
                  <div className="flex items-center">
                    <a
                      href={item.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={item.Category}
                      className="text-primary"
                    >
                      <p className="mr-3 text-lg font-semibold">
                        {item.Category}
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <p className="text-sm font-semibold">{item.subCategory}</p>
                    &nbsp;/&nbsp;
                    <p className="text-xs">
                      {item.from} - {item.to}
                    </p>
                    &nbsp;/&nbsp;
                    <p className="text-xs">{item.location}</p>
                  </div>
                </div>
              </header>

              <div>
                <p className="text-sm">{item.role}</p>
              </div>
              </Parallax>
            </article>
            
          );
        })}
      </div>
    </section>
  );
};

export default Career;
