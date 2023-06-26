import React from "react";
import { About } from "../constant/index";
import { SectionWrapper } from "../hoc";

const  AboutPage=()=> {
  return (
    <>
    <div className="container mx-auto my-2 lg:my-20 gap-10 flex justify-center items-center flex-col">

    <h2 className="text-white font-bold text-[40px]">About Me</h2>
      <div className="grid flex grid-cols-12 gap-2 justify-center items-center">
        {About.map((item, index) => (
          <React.Fragment key={item.id}>
            <div  className="col-span-6 h-full w-full md:col-span-6 lg:col-span-6 hidden sm:flex justify-center items-center">
                <div  className=" w-full border-l-4 border-b-8 rounded-lg overflow-hidden relative border-[#A3F7BF] h-ful " >
                <img src={item.images} alt="" style={{width:'300px'}}/>
                <span className="h-56 w-56 absolute bottom-20 left-10 bg-[#A3F7BF] rounded-full opacity-[100%] background-blur-1 -z-20" ></span>
                <span className="h-34 w-34 absolute top-[200px] left-0 bg-[#A3F7BF] rounded-full opacity-[50%] background-blur-2" ></span>
                <span
  className="absolute top-[200px] left-[268px] h-4 w-full text-white -z-10 uppercase text-[90px] font-bold"
>Fajar</span>
                <span
  className="absolute top-[210px] left-[268px] h-4 w-full text-[#1B2430] -z-[15] uppercase text-[90px] font-bold"
>Fajar</span>
<span
  className="absolute top-[300px] left-[295px] h-4 w-full text-white -z-10 uppercase text-[40px] font-bold"
>Fernandi</span>
<span
  className="absolute top-[310px] left-[295px] h-4 w-full text-[#1B2430] -z-[15] uppercase text-[40px] font-bold"
>Fernandi</span>
                <span
  className="absolute top-[0px] h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[20px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[40px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[60px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[80px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[100px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[120px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[140px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[160px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[180px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[200px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[220px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[240px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[260px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[280px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[300px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[320px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[340px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[360px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>
<span
  className="absolute top-[380px] -z-20 h-4 w-full bg-white"
  style={{
    background: "linear-gradient(70deg, #A3F7BF,20%, transparent)",
  }}
></span>

                

                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:px-10 px-2 flex gap-6 flex-col justify-center lg:justify-between items-center lg:items-start w-full">
              <p className="md:text-[20px] text-sm w-full text-white break-words text-[20px] ">
              {item.isi}
              </p>
            <a className="flex justify-center w-[180px] h-10 rounded-md bg-[#A3F7BF] items-center" href={item.file}> <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>clip</title>
<path d="M5.469 16.688l8.75-8.75c0.094-0.094 0.844-0.844 2.031-1.25 1.656-0.531 3.344-0.094 4.688 1.25 1.375 1.344 1.781 3 1.25 4.656-0.375 1.188-1.156 2-1.25 2.094l-9.406 9.406c-1.625 1.625-5.688 3.719-9.438 0-3.719-3.719-1.594-7.813 0-9.406l10.094-10.125c0.375-0.375 0.969-0.375 1.344 0s0.375 0.969 0 1.344l-10.063 10.125c-0.156 0.125-3.313 3.406 0 6.719 3.219 3.219 6.375 0.344 6.719 0l9.406-9.438s0.531-0.531 0.781-1.281c0.313-1 0.094-1.875-0.781-2.75-1.875-1.875-3.688-0.313-4.031 0l-8.75 8.719c-0.313 0.313-0.531 0.844 0 1.375s1.031 0.281 1.344 0l6.063-6.063c0.375-0.344 1-0.344 1.344 0 0.375 0.375 0.375 1 0 1.375l-6.063 6.031c-0.844 0.813-2.563 1.469-4.031 0-1.5-1.469-0.844-3.219 0-4.031z"></path>
</svg> <p className="font-bold bg-transparent">Download CV</p></a>
           
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
}

export default SectionWrapper(AboutPage, "about");
