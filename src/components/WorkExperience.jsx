import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import dayjs from "dayjs"; // For date manipulation

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Function to calculate the total date range for a company
const calculateDateRange = (roles) => {
  if (roles.length === 0) return "";

  // Extract all dates from roles
  const dates = roles.map((role) => {
    const [startDateStr, endDateStr] = role.date.split(" - ");
    return {
      startDate: dayjs(startDateStr, "MMM YYYY"),
      endDate:
        endDateStr === "Present" ? dayjs() : dayjs(endDateStr, "MMM YYYY"),
    };
  });

  // Find the earliest start date and latest end date
  let minDate = dates[0].startDate;
  let maxDate = dates[0].endDate;

  dates.forEach((date) => {
    if (date.startDate.isBefore(minDate)) minDate = date.startDate;
    if (date.endDate.isAfter(maxDate)) maxDate = date.endDate;
  });

  // Format the date range with "Present" if needed
  const endDateFormat = maxDate.isSame(dayjs(), "day")
    ? "Present"
    : maxDate.format("MMM YYYY");
  return `${minDate.format("MMM YYYY")} - ${endDateFormat}`;
};

// Card component for a company with all its roles
const WorkExperienceCard = ({ company }) => {
  // Calculate the total date range for the company
  const dateRange = calculateDateRange(company.roles);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={dateRange} // Pass the computed date range here
      iconStyle={{ background: company.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={company.icon}
            alt={company.company_name}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
      }
    >
      <div>
        {/* Highlight company name */}
        <h3 className="text-yellow-400 text-[24px] font-bold mb-5">
          {company.company_name}
        </h3>
      </div>

      {/* Display each role separately within the company card */}
      {company.roles.map((role, roleIndex) => (
        <div key={`role-${roleIndex}`} className="mt-3">
          <h4 className="text-white text-[20px] font-semibold">
            {role.title} - {role.team}
          </h4>
          <p
            className="text-gray-400 text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {role.date}
          </p>
          <ul className="mt-3 list-disc ml-5 space-y-2">
            {role.points.map((point, index) => (
              <li
                key={`experience-point-${roleIndex}-${index}`}
                className="text-white text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </VerticalTimelineElement>
  );
};

// Main component to display work experience timeline
const WorkExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What experiences I have so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((company, companyIndex) => (
            <WorkExperienceCard
              key={`company-${companyIndex}`}
              company={company}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
