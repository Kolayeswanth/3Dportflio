import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container " id="about">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className=" blue-gradient_text font-semibold drop-shadow ">
          Yeswanth
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          software engineer with a passion for developing innovative programs
          that expedite the efficiency and effectiveness of organizational
          success. Well-versed in technology and writing code to create systems
          that are reliable and user-friendly. I am also a team player who is
          highly adaptable in quickly changing technical
          environments.specializing in technical education through hands-on
          learning and building real-world applications.
        </p>
      </div>
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="block-container w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
            >
              <div className="btn-back rounded-xl bg-white-200 shadow-lg" />
              <div className="btn-front rounded-xl flex flex-col justify-center items-center bg-white shadow-lg">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="text-slate-500 mt-2 text-center">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 ">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I have actively contributed to various software development
            projects, both independently and as part of a team. I completed an
            internship where I applied my knowledge to real-world scenarios,
            gaining valuable industry experience. I am eager to leverage these
            skills in a professional setting to contribute to impactful
            projects. Here is the rundown:
          </p>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{ 
                    borderBottom: `7px solid ${experience.iconBg}`,
                    borderStyle: "solid",
                    borderBottomColor : experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-xl text-black font-semibold font-poppins  ">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base style={{margin:0}}">
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={"experience-point-${index}"}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className="border-slate-200"></hr> 
      <CTA />
        </section>
  );
};

export default About;
