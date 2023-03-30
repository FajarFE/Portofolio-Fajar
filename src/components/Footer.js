import { logo,instagram,facebook,twitter,linkedin,tailwind } from "../assets"

const Footer = () =>{
    return (
        <footer className=" mx-auto container flex flex-col  h-20 items-center mb-5 p-5">
            <div className="flex container justify-between p-5">
            <div className="items-center text-white font-bold text-center">
                <div className="flex flex-shrink-0 items-center text-center">
                    <img className="block h-12 w-auto lg:hidden" src={logo} alt="Your Company"/>
                    <img className="hidden h-10 w-auto lg:block" src={logo} alt="Your Company" />
                    <h1 className="lg:text-1xl sm:text-2xl tracking-wider ">FAJAR</h1></div>
                </div>
            <div className="my-2 items-center flex justify-between">
            <div className="sm:block ">
                    <div className="flex lg:space-x-8 md:space-x-1  text-center">
                    <a href="#" className="text-white  hover:text-white px-1 py-2 text-sm sm:text-[5px] font-md hover:font-bold xs:py-1">Home</a>
                    <a href="#" className="text-white  hover:text-white px-1 py-2 text-sm sm:text-[5px] font-md hover:font-bold xs:py-1">About</a>
                    <a href="#" className="text-white  hover:text-white px-1 py-2 text-sm sm:text-[5px] font-md hover:font-bold xs:py-1">Skill</a>
                    <a href="#" className="text-white  hover:text-white px-1 py-2 text-sm sm:text-[5px] font-md hover:font-bold xs:py-1">Timeline</a>
                    <a href="#" className="text-white  hover:text-white px-1 py-2 text-sm sm:text-[5px] font-md hover:font-bold xs:py-1">Portofolio</a>
                    </div>
                </div>
            </div>
            </div>
            
           <div className="flex container justify-between py-4 border-[#333e4d] border-t-2">
            <div className="flex container justify-start items-center">
            <p className="text-white text-sm xs:text-xs">
            © 2023 Create By Fajar Fernandi.
            </p>
            </div>


            <div className="flex container justify-end"> 
            <a href="" ><img className="mr-6" src={facebook} alt="" style={{width:"25px",color:"white"}} /></a>
            
            <a href="" ><img className="mr-6" src={twitter} alt="" style={{width:"25px",color:"white"}} /></a>
             
            
            <a href="" ><img className="mr-6" src={instagram} alt="" style={{width:"25px",color:"white"}} /></a>
             
            
            <a href="" ><img className="p-1" src={linkedin} alt="" style={{width:"25px",color:"white"}} /></a>
             
            </div>
          
                      
                      
                     
           </div>
        </footer>
    )
}

export default Footer;