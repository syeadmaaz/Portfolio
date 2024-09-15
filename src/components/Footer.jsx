import React from "react";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-6 py-6 bg-tertiary rounded-2xl text-white">
      <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 mx-auto max-w-7xl">
        {/* About column - 70% width */}
        <div className="w-full sm:w-[70%] sm:text-left text-center">
          <h3 className="text-lg tracking-wider font-bold text-[18px] mb-4">
            Message From Maaz:
          </h3>
          <p className="text-white tracking-wider font-medium text-[16px] mb-4">
            Thank you for taking the time to explore my portfolio! I hope you
            enjoyed the journey through my work as much as I enjoyed crafting
            it. If something here resonated with you, sparked an idea, or opened
            up a potential opportunity, I'd love to hear from you. Please don't
            hesitate to reach out, I'd be excited to connect and explore
            possibilities together.
          </p>
        </div>

        {/* Social links column - 30% width */}
        <div className="w-full sm:w-[30%] sm:text-right text-center">
          <h3 className="text-lg tracking-wider font-bold text-[18px] mb-4">
            Links
          </h3>
          <div className="flex justify-center sm:justify-end space-x-4">
            <a
              href="https://github.com/syeadmaaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/syeadmaazahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </a>
            <a href="mailto:syeadmaazahmed@gmail.com">
              <FaGoogle className="text-2xl hover:text-red-500" />
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom section */}
      <div className="mt-4 border-t border-gray-700 pt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="text-white tracking-wider font-medium text-[16px] mb-2">
            @{new Date().getFullYear()} Maaz | Portfolio
          </p>
          <p className="text-white tracking-wider font-medium text-[16px]">
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
