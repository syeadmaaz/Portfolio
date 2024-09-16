import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { internships } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const InternshipCard = ({ internship }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={internship.date}
      iconStyle={{ background: internship.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={internship.icon}
            alt={internship.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{internship.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {internship.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {internship.points.map((point, index) => (
          <li
            key={`internship-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Internship = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }}
      >
        <p className={styles.sectionSubText}>
          What Trainings I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>Internship Experiences.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {internships.map((internship, index) => (
            <InternshipCard
              key={`internship-${index}`}
              internship={internship}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Internship, "internship");
