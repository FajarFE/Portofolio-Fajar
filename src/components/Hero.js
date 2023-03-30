import React from "react";
import colors from "tailwindcss/colors";
import { photoshop,html,javascript,reactjs,header,instagram,facebook,twitter,linkedin,tailwind } from "../assets/index";
import { styles } from "../styles";




const Hero =()=>{
    return(
        <div className="container mx-auto overflow-hidden md:container md:mx-auto pt-20 ">
            <div className="flex grid grid-cols-2 content-center sm:mx-5  justify-center lg:text-left text-center sm:text-lg">
                <div className="sm:px-2 px-2 py-20 items-center xs:text-[20]">
                <h5 className={` font-bold leading-tight text-white ${styles.heroHeadText}`}>I’m Fajar Fernandi A<br/>
                <span className="text-[#A3F7BF]">Programer</span> In <br/>Indonesia</h5>
                <div className="flex justify-center lg:justify-start my-4 items-center ">
                      <a href="#contact" class="bg-[#A3F7BF] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#6cff9d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F7BF] rounded-md ">Hire Me</a>
                      <a href="" ><img className="px-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" src={facebook} alt="" style={{height:"25px",color:"white"}} /></a>
                      <a href="" ><img className="px-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" src={twitter} alt="" style={{height:"25px",color:"white"}} /></a>
                      <a href="" ><img className="px-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" src={instagram} alt="" style={{height:"25px",color:"white"}} /></a>
                      <a href="" ><img className="px-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" src={linkedin} alt="" style={{height:"25px",color:"white"}} /></a>
                </div>
                </div>
                <div className=" hidden sm:block md:block py-24 box-content h-96 w-auto " >
                    <div className="hero-content z-55 drop-shadow-2xl">
                    <img  style={{ width: '75%', height: 'auto' }} src={header} alt=""/>
                    </div>
                    <div className="absolute logo-1 bg-[#fb923c]  p-2 items-center content-center -z-20 rounded-full animate-bounce ">
                    <img className="" src={html} alt="" style={{ width: '40px', height: '40px' }}/>
                    </div>
                    <div className="absolute logo-2 bg-white p-0 items-center content-center rounded-full z-0">
                    <img className="rounded-full" src={photoshop} alt="" style={{ width: '50px', height: '50px' }}/>
                    </div>
                    <div className="absolute logo-3 bg-white p-2 items-center content-center rounded-full z-0 -z-50">
                    <img className="rounded-full" src={tailwind} alt="" style={{ width: '30px', height: '30px' }}/>
                    </div>
                    <span className="absolute background-blur-1 bg-[#b2ffcc] items-center content-center rounded-full -z-50 brightness-125 contrast-125">
                    </span>
                    <span className="absolute background-blur-2 bg-[#b2ffcc] p-0.5 items-center content-center rounded-full -z-50 brightness-125 contrast-125">
                    </span>
                    <div className=" absolute background-outline-1 border-8 h-40 w-40 border-[#b2ffcc] rounded-full opacity-25 -z-50  "></div>
                    <div className=" absolute background-outline-2 border-8 h-40 w-40 border-[#b2ffcc] rounded-full opacity-10 -z-50  "></div>
                    
                </div>
            </div>
          
        </div>
        
    );
};

export default Hero;