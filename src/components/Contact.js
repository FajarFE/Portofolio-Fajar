import React from "react";
import { styles } from "../styles";

const ContactCard = () => {
    return (
        <>
            <div className="w-[70%] h-auto container justify-start flex flex-col">
                <form className="flex gap-4 container justify-start">
                    <label className="w-1/2 flex-mx-auto justify-center my-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            First Name
                        </span>
                        <input type="firstname" name="firstname" className="mt-1 px-3 pr-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First Name" />
                    </label>
                    <label className="w-1/2 flex-mx-auto justify-center my-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            First Name
                        </span>
                        <input type="firstname" name="firstname" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First Name" />
                    </label>
                </form>
                <form action="" className="w-[100%] flex-mx-auto container justify-start my-2">
                    <label>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            First Name
                        </span>
                        <input type="firstname" name="firstname" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First Name" />
                    </label>
                </form>
                <form action="">
                    <label for="">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"> Send Messenger </span>
                        <textarea rows="4" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your text here"></textarea>
                    </label>
                </form>
            </div>
        </>
    );
};


const Contact =()=>{
    return(<>
     <div className="justify-center content-start container mx-auto pt-10 pb-32">
        <h5 className={`${styles.heroSubText} text-center`}>
        Are you looking for a programmer or designer? <br />
        <span className={`${styles.sectionHeadText4}`}>You've come to the right person</span> 
        </h5>
        <div className="flex justify-center py-10">
            <button className="bg-[#A3F7BF] w-32 h-12 text-[20px] text-[#1B2430]">Hire Me</button>
            <a href="#" className="items-center flex">
            <h1 className="flex text-[17px] lg:text-sm md:text-sm text-[#A3F7BF] text-center  ml-20 ">
                Let's Talk
            </h1>
            </a>
            
        </div>
        <div className=" grid grid-cols-2 gap-4 justify-center container mx-auto items-center content-center h-96">
        <h1 className={`${styles.heroSubText} text-center items-center text-[#A3F7BF] `}>
        You have an amazing project?<br />
        <span className={`${styles.sectionHeadText4} `}>
        let’s work together
            </span>
        </h1>
        <div className="flex container mx-auto justify-center">
        <ContactCard />
        </div>
        
     </div>
     </div>
     
    </>
              
    )

}

export default Contact