import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section className='relative w-full h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-3 h-3 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:w-[120px] h-40 violet-gradient' />
        </div>

        <div className='text-center md:text-left'>
          <h1 className={`${styles.heroHeadText} text-white text-3xl md:text-5xl`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Antoine</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 text-sm md:text-lg`}>
            a Full-Stack Web Developer. <br className='sm:block hidden' />
            My ultimate goal is to use my passion for technology and past experiences to create innovative solutions that have a positive impact.
          </p>
        </div>
      </div>

      {isDesktop && <ComputersCanvas />}
      
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className='mt-2 w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
