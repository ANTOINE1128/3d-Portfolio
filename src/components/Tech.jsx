import React from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from 'react-responsive';

const Tech = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Display only the first 8 technologies on mobile
  const displayedTechnologies = isMobile ? technologies.slice(0, 7) : technologies;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 sm:gap-10'>
      {displayedTechnologies.map((technology) => (
        <div className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} isStatic={!isDesktop} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
