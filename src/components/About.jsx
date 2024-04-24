/* eslint-disable  */
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a Full Stack Developer, I bring a unique blend of experiences from my previous roles in the maritime industry and as a Mandarin teacher & translator. I was previously an Educational Mentor at Microverse, a remote software development organization, where I've completed over 40 real-life projects, mastering both front-end and back-end technologies.<br /><br />

During the course of this journey, I had the privilege to meet 300+ Full Stack Developers, investing over 1300 hours on mastering data structures and algorithms. What's more, I built a community of 150+ fellow Full Stack Developers which I am currently administering. I also mentored a small team of 5 junior developers. 🚀💡👥<br /><br />

In my latest capstone project, I spearheaded the development of a comprehensive web interface for a logistics firm. Both front-end and back-end, showcasing my proficiency in HTML/CSS, JavaScript, React, Redux, Ruby, Rails, and PostgreSQL. Combining my passion for languages with my love for coding, I crafted a seamless user experience that I'm truly proud of.
<br /><br />
🔧 Front-End: JavaScript, React, Redux, jQuery, HTML5, CSS3, SCSS, MaterialUI, Tailwind<br />
⚙️ Back-End: Ruby, Ruby on Rails, Capybara, Devise, PostgreSQL<br />
🛠️ Tools & Methods: Git, Github, TDD, Chrome Dev Tools<br />
💼 Professional Skills: Remote Pair-Programming, System Designing, Architecture, Mentoring, Planning<br /><br />
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");