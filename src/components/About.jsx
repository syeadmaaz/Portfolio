import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { logo } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[24px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        className="relative flex flex-col-reverse md:flex-row items-center justify-between md:items-start mt-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          className="text-secondary text-[17px] text-justify max-w-3xl leading-[30px] md:mr-10 md:w-[70%] md:pr-8"
          variants={fadeIn("right", "", 0.1, 1)}
        >
          I am a versatile Software Developer at Boston Scientific, where my
          primary focus over the last few months has been SQL database
          management and .NET framework. I have hands-on experience from
          multiple internships at companies like Lenskart, ECPL, few other
          startups and govt. institutions such as IIT Patna, Gurugram Police
          Cyber Cell. <br />
          <br />
          My expertise includes frameworks like React, Node.js, and React
          Native, with a strong background in REST APIs, database management
          (SQL, PostgreSQL, MongoDB), and data visualization tools such as
          Jasper Reports and Tableau. Beyond my software development career, I
          am passionate about learning new tech stacks—recently diving into
          Django and Three.js. And apart from work I love playing Cricket and
          Badminton.
        </motion.p>
        <motion.img
          src={logo}
          alt="logo"
          className="w-64 h-54 object-contain rounded-[10%]"
          variants={fadeIn("left", "", 0.1, 1)}
        />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 cursor-pointer justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
