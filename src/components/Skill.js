import React from "react";
import { SectionWrapper } from "../hoc";
import { Skills,skillBars} from "../constant";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {arrowright} from "../assets"
import {textVariant,slideIn,fadeIn} from "../utils/motion";
import { useSpring, animated } from "react-spring";
import {Tilt} from 'react-tilt';

const Progress = ({ percent }) => {
  const progressStyles = useSpring({
    from: { width: "0%" },
    to: { width: `${percent}%` },
    config: { duration: 1500 },
  });
  return (
    <div className="w-[60%] relative h-4 px-4">
    <div className="absolute top-0 h-full w-full bg-[#74b48a] rounded-full">
      <animated.span
        className="absolute top-0 left-0 h-full bg-[#A3F7BF] rounded-full"
        style={progressStyles}
      />
    </div>
  </div>
  );
}

const DetailedSkillCard = ({ selectedSkill }) => {
  const skill = skillBars.find((s) => s.id === selectedSkill.id);
  return (
    <>
      <div className="container flex  justify-center">
        {skill && (
          <div className=" rounded-md px-3 text-base font-medium w-[100%] lg:w-[70%] sm:w-100% md:w-100% mx-auto h-200 flex flex-col items-center gap-10">
            <Tilt className="tilt" options={{ max: 25 }}>
              <div className="bg-[#A3F7BF] h-10 w-72 items-center content-center justify-center flex rounded-[20px]">
                <h2 className="text-[#1B2430] text-[20px] font-bold">
                  {skill.title}
                </h2>
              </div>
            </Tilt>
            
            <div className="w-full ">
              <div>
                 {skill.name.map((name, index,logos) => (
                <div className="flex items-center my-4" key={`skill-${index}`}>
                  <Tilt className="tilt" options={{ max: 50 }}>
                  <div className="w-[30px] sm:w-[30px] md:w-[50px] lg:w-[50px] mr-[20px] bg-white rounded-full">
                  <img className="p-1" src={skill.logos[index]}alt=""/>
                  </div>
                  </Tilt>
                  <h1 className="w-[40%] text-white font-bold text-[14px] sm:text-[10px] md:text-[20px] lg:text-[20px] text-center">{name}</h1>
                  <Progress percent={skill.percent[index]} />
                  <div className="">
                    <p className="text-[#A3F7BF] ml-6 ">{skill.percent[index]}%</p>
                  </div>
                </div>
                
              ))}
              </div>
             
            </div>
          </div>
        )}
      </div>
    </>
  );
};
  




const SkillCard = ({ skill, index, onSelectSkill, isSelected }) => {
    return (
      <>
        <div className="flex items-center justify-center p-4 backdrop-blur-sm pb-20 ">
          <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <div>
              <h2 className="text-[#A3F7BF] text-[20px] font-bold">
                {skill.id} <span className="text-white text-[20px]">{skill.title}</span>
              </h2>
              <div className="relative flex justify-between items-center content-center w-full">
                <div
                  className="flex logos-skill p-20 absolute "
                  style={{ marginLeft: "-35px" }}
                >
                  {skill.logos.map((logo, logoIndex) => (
                    <span href="" className="transition duration-150 ease-in-out">
                      <img
                        className="z-1 mr-2 border-4 border-[#1B2430]  bg-white rounded-full absolute"
                        style={{
                          zIndex: index + logoIndex + 1,
                          height: "auto",
                          maxWidth: "35%",
                          maxHeight: "35%",
                          left: `${logoIndex * 35 - 20}px`,
                        }}
                        key={logoIndex}
                        src={logo}
                        alt=""
                        onMouseOver={(e) => {
                          e.currentTarget.style.zIndex = "90";
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.zIndex = index + logoIndex + 1;
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </span>
                  ))}
                </div>
                <div className="">
                {isSelected ? (
                  <button
                  className={`absolute flex items-center rounded-full justify-center ml-4 ${
                    isSelected ? "icon3 bg-[#A3F7BF]" : ""
                  }`}
                  style={{
                    height: "40px",
                    width: "40px",
                    left: "100%",
                    top: "30px",
                    
                  }}
                  onClick={() => onSelectSkill(skill)}>
                    <svg 
                      version="1.1" 
                      viewBox="0 -6.5 36 36" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon3"
                    >
                      <title>right-arrow</title>
                      <desc>Created with Sketch.</desc>
                      <g>
                        <g transform="translate(-212 -159)">
                          <g transform="translate(50 120)"
                          >
                            <path 
                              d="m187.11 39.29 10.542 10.451 0.05919 0.054213c0.18015 0.17864 0.27715 0.4085 0.29101 0.64231v0.12355c-0.013857 0.2338-0.11086 0.46367-0.29101 0.64231l-0.051894 0.043897-10.549 10.462c-0.39032 0.38705-1.0231 0.38705-1.4135 0-0.39032-0.38705-0.39032-1.0146 0-1.4016l9.0081-8.9342-31.703 7.795e-4c-0.55199 0-0.99947-0.44373-0.99947-0.9911s0.44748-0.9911 0.99947-0.9911l31.468-7.794e-4 -8.7732-8.6997c-0.39032-0.38705-0.39032-1.0146 0-1.4016 0.39032-0.38705 1.0231-0.38705 1.4135 0zm10.007 11.092-10.714 10.626 10.601-10.509 1.01e-4 -0.0038327-0.05911-0.053787-0.060405-0.059892h0.23262z"
                            ></path>
                          </g>
                        </g>
                      </g>
</svg>

                </button>
                ) : (
                  <button
                    className={`absolute flex items-center rounded-full justify-center  ml-4 ${
                      isSelected ? "" : "icon2"
                    }`}
                    style={{
                      height: "40px",
                      width: "40px",
                      left: "100%",
                      top: "30px",
                    }}
                    onClick={() => onSelectSkill(skill)}>
                    <svg 
                    version="1.1" 
                    viewBox="0 -6.5 36 36" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <title>right-arrow</title>
                    <desc>Created with Sketch.</desc>
                    <g>
                      <g transform="translate(-212 -159)">
                        <g transform="translate(50 120)"
                        >
                          <path 
                            d="m187.11 39.29 10.542 10.451 0.05919 0.054213c0.18015 0.17864 0.27715 0.4085 0.29101 0.64231v0.12355c-0.013857 0.2338-0.11086 0.46367-0.29101 0.64231l-0.051894 0.043897-10.549 10.462c-0.39032 0.38705-1.0231 0.38705-1.4135 0-0.39032-0.38705-0.39032-1.0146 0-1.4016l9.0081-8.9342-31.703 7.795e-4c-0.55199 0-0.99947-0.44373-0.99947-0.9911s0.44748-0.9911 0.99947-0.9911l31.468-7.794e-4 -8.7732-8.6997c-0.39032-0.38705-0.39032-1.0146 0-1.4016 0.39032-0.38705 1.0231-0.38705 1.4135 0zm10.007 11.092-10.714 10.626 10.601-10.509 1.01e-4 -0.0038327-0.05911-0.053787-0.060405-0.059892h0.23262z"


                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>

                  </button>
                )}
                </div>
               
              </div>
            </div>
          </motion.div>
        </div>
      </>
    );
  };
  
  
  

  

  const Skill = () => {
    const [selectedSkill, setSelectedSkill] = React.useState("");
  
    const handleSkillSelect = (skill) => {
      setSelectedSkill(skill);
    };
  
    return (
      <>
        <div >
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.sectionHeadText1} text-center pb-5`}>
              Some of my skills <br /> and expertise
            </h1>
          </motion.div>
          <div className="container w-auto lg:grid lg:grid-cols-3 sm:flex sm:flex-col ">
            {Skills.map((skill, index) => (
              <SkillCard
                key={`skill-${index}`}
                skill={skill}
                index={index}
                onSelectSkill={handleSkillSelect}
                isSelected={selectedSkill && selectedSkill.id === skill.id}
              />
            ))}
          </div>
          <div>{selectedSkill && <DetailedSkillCard selectedSkill={selectedSkill} />}</div>
          
        </div>
        
      </>
    );
  };
  

export default SectionWrapper(Skill,"skill")