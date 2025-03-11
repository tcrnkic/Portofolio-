import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = () => {
    
    const first = useRef(null);
    const sec = useRef(null);
    const third = useRef(null);

    const firstIsInView = useInView(first, {once: true});
    const secisInView = useInView(sec, {once: true});
     const thirdisInView = useInView(third, {once: true});

    const firstControl = useAnimation();
    const secControl = useAnimation();
    const thirdControl = useAnimation();

    useEffect(()=>{
       if (firstIsInView){
        firstControl.start("visible");
       }
      
       if (secisInView){
        secControl.start("visible");
       }
       if (thirdisInView){
        thirdControl.start("visible");
       }
      
      
    },[firstIsInView, secisInView, thirdisInView])
    return ( 
        <div >
    
        <div className="md:flex-1 h-full bg-main flex flex-col py-20 items-center gap-5 md:pl-64">
       <Link to="/"> <img src="./assets/home.svg" className="w-10 h-10 opacity-75" alt="home icon" /> </Link>
        <h1 id="skills" className="text-5xl itmes-center text-white border-b-2 pb-4 my-6 ">Database Hub </h1>
     
            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={secControl}
         ref={sec} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <a href="https://tcrnkic6.web.app" target="/blank" aria-label="First project">
                <div className="w-72 flex flex-col md:flex-row border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div>
                      <h1 className="text-4xl pb-5">Do It!</h1>
                      <p>Elevate your productivity with 'Do It!' – a to-do list empowered by Google authentication. Streamline your tasks securely, enjoying a personalized and efficient way to manage your day. 'Do It!' is your go-to companion for simplicity and productivity</p>
                 </div>
                  <div className="md:px-2 ">
                    <p className="text-sm pt-8  md:pt-2">tcrnkic6.web.app</p>
                  </div>
                </div>
                </a>
            </motion.div>


        
        </div>
    </div>
    );
}
 
export default Projects;