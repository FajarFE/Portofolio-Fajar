import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { sertif } from "../constant";
import { timelines } from "../constant";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tailwind } from "../assets";
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'transparent', color: '#fff', }}
      iconStyle={{ background: '#A3F7BF', border: 'none' ,outline:'none'}}
      date={experience.date}
      icon={<FontAwesomeIcon icon={experience.icon} style={{ color: '#1B2430' }} />}
      contentArrowStyle={{ borderRight: '7px solid  transparent' }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const TimelinesCard = ({ timeline }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'transparent', color: '#fff', }}
      iconStyle={{ background: '#A3F7BF', border: 'none' ,outline:'none'}}
      date={timeline.date}
      icon={<FontAwesomeIcon icon={timeline.icon} style={{ color: '#1B2430' }} />}
      contentArrowStyle={{ borderRight: '7px solid  transparent' }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{timeline.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {timeline.points.map((point, index) => (
          <li
            key={`timeline-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [showTimeline1,setShowTimeline1]=React.useState(true);
  const [showTimeline2,setShowTimeline2]=React.useState(false);
  const [activeButton,setActiveButton]=React.useState(true)


  const handleClick1=() => {
    setShowTimeline1(true);
    setShowTimeline2(false);
    setActiveButton(true);
  }
  const handleClick2=() => {
    setShowTimeline2(true);
    setShowTimeline1(false);
    setActiveButton(false);
  }
  return (
    <>
    <div className="overflow-hidden justify-center flex flex-col pt-[69px]">
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText2} text-center text-[#A3F7BF]`}>
          What I have done so far
        </p>
        <div className="">
        {showTimeline1 &&(
          <h2 className={`${styles.sectionHeadText2} text-center`}>
          My Journey To This Career
        </h2>
        )}
        {showTimeline2 &&(
          <h2 className={`${styles.sectionHeadText2} text-center`}>
          Certificate
        </h2>
        )}
         <div className="flex justify-center pt-8">
      <button className={`mx-4 p-1 rounded-md  ${activeButton ? "deactivate-button" : "active-button text-[#1B2430] font-bold scale-105"}`} onClick={handleClick2} onChange={activeButton}>
      Certificate
      </button>
      <button className={`mx-4 p-1 rounded-md ${activeButton ? "active-button text-[#1B2430] font-bold scale-105" : "deactivate-button"}`} onClick={handleClick1}>
      My Journey
      </button>
      <div>
        </div>
     
      
      </div>    
      </div>
      </motion.div>

      
      
        {showTimeline1 &&(
        <div className='mt-5 flex flex-col'>
        <VerticalTimeline lineColor={'transparent'}>
          {timelines.map((timeline, index) => (
            <TimelinesCard
              key={`timeline-${index}`}
              timeline={timeline}
            />
          ))}
        </VerticalTimeline>
      </div>
      )}
    {showTimeline2 && (
  <div className='mt-5 flex grid grid-cols-12'>
    {sertif.map((item, index) => (
      <div key={index} className="p-2.5 rounded-[20px] col-span-3">
        <Tilt
          className="tilt"
          options={{
            max: 10,
            perspective: 1000,
            scale: 1.02,
            speed: 400,
          }}
        >
          <a href={`https://drive.google.com/u/0/uc?id=${item.url}&export=download`} target="_blank" rel="noopener noreferrer">
            <motion.img
              src={`https://drive.google.com/uc?export=view&id=${item.url}`}
              alt={item.title}
              className="mb-2 cursor-pointer w-[400px] h-[200px] rounded-[20px]"
              variants={textVariant}
              whileHover="hover"
            />
          </a>
        </Tilt>
        <div className="text-[#D8E9A8] flex justify-center items-center text-[22px]">
          <h1>{item.title}</h1>
        </div>
      </div>
    ))}
  </div>
)}


      
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "timeline");
