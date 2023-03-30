import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tailwind } from "../assets";
import {Tilt} from 'react-tilt';
import { Portfolio } from '../constant';
import { styles } from "../styles";

// Import modals from @tailwindcss/ui
import { Dialog, Transition } from "@headlessui/react";

const MyPortfolio = () => {
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
    <div className="container mx-auto py-8">
      <h1 className={`${styles.sectionHeadText} text-center`}>My Portfolio</h1>
      <div className="flex space-x-4 mb-2 justify-center py-4">
        <button
          className={`border border-[#A3F7BF] rounded text-sm lg:text-[20px] py-2 px-4 ${
            selectedTags.includes("Front End")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          } `}
          onClick={() => handleTagClick("Front End")}
        >
          Front End
        </button>
        <button
          className={`border border-[#A3F7BF] rounded text-sm lg:text-[20px] py-2 px-4 ${
            selectedTags.includes("Back End")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          }`}
          onClick={() => handleTagClick("Back End")}
        >
          Back End
        </button>
        <button
          className={`border border-[#A3F7BF] rounded text-sm lg:text-[20px] py-2 px-4 ${
            selectedTags.includes("Graphic Design")
              ? "bg-[#A3F7BF] text-[#1B2430]"
              : "text-[#A3F7BF]"
          }`}
          onClick={() => handleTagClick("Graphic Design")}
        >
          Graphic Design
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPortfolio.map((project) => (
          <div key={project.id} className="p-4 rounded-[20px]">
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
<Transition appear show={selectedProject !== null} as={React.Fragment}>
<Dialog
       as="div"
       className="fixed inset-0 z-10 overflow-y-auto"
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
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
  <img src={selectedProject?.image} alt={selectedProject?.title} />
  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
    {selectedProject?.title}
  </Dialog.Title>
  <div className="mt-2">
    <Dialog.Description className="text-sm text-gray-500">
      {selectedProject?.description}
    </Dialog.Description>
  </div>
            <div className="mt-4 flex space-x-2">
              {selectedProject?.tech.map((t) => (
                <h5
                  key={t}
                  className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1"
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
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Demo
              </a>
              <a
                href={selectedProject?.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
              >
                Code
              </a>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
</div>
);
};

export default MyPortfolio;
