import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ContactCard = () => {
  const [toEmail, setToEmail] = useState("fajarfernandi123123@gmail.com");
  const [ccEmail, setCCEmail] = useState(" ");
  const [subject, setSubject] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `mailto:${toEmail}?`;
    if (ccEmail.trim() !== "") {
      url += `&cc=${ccEmail}`;
    }
    url += `&subject=${subject}&body=${message}`;
    window.location.href = url;
  };
  

  return (
    <div className="w-[70%] h-auto container justify-start flex flex-col" id="contact-button ">
     <form onSubmit={handleSubmit} className="flex  gap-4 flex-col container justify-start">
        <label className="w-full flex-mx-auto gap-2 justify-center my-2">
          <span className="after:ml-4  after:content-['(Opsional)'] block text-sm font-medium text-white">
            CC Email
          </span>
          <input
            value={ccEmail}
            onChange={(e) => setCCEmail(e.target.value)}
            type="email"
            name="ccEmail"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="CC Email"
          />
        </label>
   
        <label  className="w-[100%] flex-mx-auto container justify-start my-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white text-bold">
            Subject
          </span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            type="text"
            name="subject"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject"
          />
        </label>
         <label htmlFor="">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white text-bold">
            Message Email
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your text here"
          ></textarea>
        </label>
        <button className="w-full h-[45px] my-4 bg-[#A3F7BF] rounded-md" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  const [button, setButton] = React.useState(false);
  const handleClick = () => {
    setButton(!button);
  };

  return (
    <div className="pt-[65px]">
      <div className="justify-center content-start container mb-[200px] lg:mb-0 mx-auto ">
        <h5 className={`${styles.heroSubText} text-center`}>
          Are you looking for a programmer or designer? <br />
          <span className="text-[#A3F7BF]">You've come to the right person</span>
        </h5>
        <div className="flex justify-center my-10">
          <button
            className="bg-[#A3F7BF] w-32 h-12 text-[15px] lg:text-md md:text-[20px] text-[#1B2430] rounded-md mx-5"
            id="contact-button"
            onClick={handleClick}
          >
            Hire Me
          </button>
          <a href="#" className="items-center flex">
            <h1 className="flex text-[15px] lg:text-md md:text-[20px] text-[#A3F7BF] text-center mx-5">
              Let's Talk
            </h1>
          </a>
        </div>

        {button && (
          <div className="grid grid-cols-2 gap-4 justify-center container mx-auto items-center content-center h-96 my-32 mb-10">
            <h1 className={`${styles.heroSubText} text-center items-center text-[#A3F7BF] `}>
              You have an amazing project?<br />
              <span className={`${styles.sectionHeadText4} `}>let’s work together</span>
            </h1>
            <div className="flex container mx-auto justify-center">
              <ContactCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
