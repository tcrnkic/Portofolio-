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
        <h1 id="skills" className="text-5xl itmes-center text-white border-b-2 pb-4 my-6 ">API Hub </h1>
     
            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={secControl}
         ref={sec} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <a href="https://tcrnkic1.web.app" target="/blank" aria-label="First project">
                <div className="w-72 flex flex-col md:flex-row border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div>
                      <h1 className="text-4xl pb-5">Weather App</h1>
                      <p>Stay informed with real-time weather updates using my Weather App. Built with the OpenWeatherMap API, this application provides accurate and detailed weather information for any location worldwide.</p>
                 </div>
                  <div className="md:px-2 ">
                    <p className="text-sm pt-8  md:pt-2">tcrnkic1.web.app</p>
                  </div>
                </div>
                </a>
            </motion.div>


            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={firstControl}
         ref={first} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <a href="https://tcrnkic4.web.app" target="/blank" aria-label="First project">
                <div className="w-72 flex flex-col md:flex-row  border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div>
                      <h1 className="text-4xl pb-5">Photo Library</h1>
                      <p>Immerse yourself in a captivating Photo Library experience, fueled by the Unsplash API. Explore a diverse collection of visuals, effortlessly curated for your inspiration and enjoyment.</p>
                  </div>
                  <div className="md:px-2 ">
                    <p className="text-sm pt-8  md:pt-2">tcrnkic4.web.app</p>
                  </div>
                </div>
                </a>
            </motion.div>

         
            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={thirdControl}
         ref={third} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <a href="https://tcrnkic5.web.app" target="/blank" aria-label="third project">
                <div className="w-72 flex flex-col md:flex-row  border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div>
                      <h1 className="text-4xl pb-5">Quizzer</h1>
                      <p>Dive into the world of knowledge with Quizzer, a trivia game designed for both fun and learning. Featuring many diverse categories and mulitple thought-provoking questions.</p>
                  </div>
                  <div className="md:px-2 ">
                    <p className="text-sm pt-8  md:pt-2">tcrnkic5.web.app</p>
                  </div>
                </div>
                </a>
            </motion.div>
        </div>
    </div>
    );
}
 
export default Projects;