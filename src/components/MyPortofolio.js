import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tailwind } from "../assets";
import {Tilt} from 'react-tilt';
import { Portfolio,faGithub,faCodepen } from '../constant';
import { styles } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import modals from @tailwindcss/ui
import { Dialog, Transition } from "@headlessui/react";

const MyPortfolio = (index) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // State untuk menyimpan proyek yang dipilih

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredPortfolio = Portfolio.filter((project) => {
    if (selectedTags.length === 0) {
      return true;
    } else {
      return project.tags.some((tag) => selectedTags.includes(tag));
    }
  });

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto pt-14">
      <h1 className={` tracking-wider ${styles.sectionHeadText} text-center`}>My Portfolio</h1>
      <div className="flex space-x-4 my-5 justify-center ">
        <button
          className={`border border-[#A3F7BF] rounded text-[10px] xs:text-[5px] sm:text-[5px]  md:text-sm lg:text-[20px] py-2 px-4 ${
            selectedTags.includes("Front End")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          } `}
          onClick={() => handleTagClick("Front End")}
        >
          Front End
        </button>
        <button
          className={`border border-[#A3F7BF] rounded text-[10px] xs:text-[5px] sm:text-[5px] lg:text-[20px] py-2 px-4 md:text-sm ${
            selectedTags.includes("Back End")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          }`}
          onClick={() => handleTagClick("Back End")}
        >
          Back End
        </button>
        <button
          className={`border border-[#A3F7BF] rounded text-[10px] xs:text-[5px] sm:text-[5px] lg:text-[20px] py-2 px-4 md:text-sm ${
            selectedTags.includes("Graphic Design")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          }`}
          onClick={() => handleTagClick("Graphic Design")}
        >
          Graphic Design
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filteredPortfolio.map((project) => (
          <div key={project.id} className="p-2.5 rounded-[20px]">
            <Tilt
              className="tilt"
              options={{
                max: 10,
                perspective: 1000,
                scale: 1.02,
                speed: 400,
              }}
            >
              <motion.img
                src={`${project.image}`}
                alt={project.title}
                className="mb-2 cursor-pointer"
                onClick={() => openModal(project)}
                variants={textVariant}
                whileHover="hover"
              />
            </Tilt>
            <div className="flex space-x-2">
              {project.tech.map((t) => (
                <h5 key={t} className="text-white text-sm">
                {t}
                </h5>

))}
</div>
            <div className=" text-[#D8E9A8] text-[22px]">
                
                <h1>{project.title}</h1>
            </div>
            
</div>
))}
</div>
<div className="overflow-hidden">
<Transition appear show={selectedProject !== null} as={React.Fragment}>
<Dialog
       as="div"
       className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
       onClose={closeModal}
       
     >
<div className="min-h-screen px-4 text-center">
<Transition.Child
as={React.Fragment}
enter="ease-out duration-300"
enterFrom="opacity-0"
enterTo="opacity-100"
leave="ease-in duration-200"
leaveFrom="opacity-100"
leaveTo="opacity-0"
>
<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
</Transition.Child>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="inline-block h-screen align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1B2430] shadow-xl rounded-2xl z-92">
        <img src={selectedProject?.image} alt={selectedProject?.title} />
  
  <Dialog.Title as="h3" className="text-[30px] leading-6 text-[#D8E9A8] my-4 flex justify-center text-uppercase  ">
    {selectedProject?.title}
  </Dialog.Title>
 <div className="relative flex justify-between items-center content-center w-full py-1">
        <div className="flex justify-start flex  ">
    {selectedProject?.logo.map((logo,logoIndex) => (
      <img className=" border-4 border-[#A3F7BF]  bg-[#1B2430] rounded-full mr-2 p-1 " 
       style={{
        zIndex: index + logoIndex + 1,
        height: "auto",
        maxWidth: "10%",
        maxHeight: "5%",
        left: `${logoIndex * 35 - 20}px`,
      }}
      src={logo} />
      
       
      ))}
      </div>
      </div> 
  
  <div className="mt-2">
    <Dialog.Description className="text-sm text-white">
      {selectedProject?.description}
    </Dialog.Description>
  </div>
            <div className="mt-4 flex space-x-2">
              {selectedProject?.tech.map((t) => (
                <h5
                  key={t}
                  className="text-sm text-white border-[#A3F7BF] border border-2 rounded-md px-2 py-1"
                >
                  {t}
                </h5>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={selectedProject?.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A3F7BF] text-[#1B2430] font-bold py-2 px-4 rounded w-[100%] justify-center flex items-center"
              >
                <FontAwesomeIcon icon={faGithub}  />
                <p className="ml-4">Demo</p>
              </a>
              <a
                href={selectedProject?.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[#A3F7BF] border text-white border-[2px] font-bold py-2 px-4 rounded ml-4 w-[100%] hover:bg-[#A3F7BF] justify-center flex items-center hover:text-[#1B2430]"
              >
                <FontAwesomeIcon icon={faCodepen}  />
                <p className="ml-4">Code</p>
                
              </a>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
</div>

</div>
);
};

export default SectionWrapper(MyPortfolio,"portofolio")
