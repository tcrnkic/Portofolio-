import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = () => {
    
    const first = useRef(null);
    const sec = useRef(null);
    const thr = useRef(null);

    const firstIsInView = useInView(first, {once: true});
    const secisInView = useInView(sec, {once: true});
    const thrisInView = useInView(thr, {once: true});

    const firstControl = useAnimation();
    const secControl = useAnimation();
    const thrControl = useAnimation();

    useEffect(()=>{
       if (firstIsInView){
        firstControl.start("visible");
       }
      
       if (secisInView){
        secControl.start("visible");
       }
       if (thrisInView){
        thrControl.start("visible");
       }
      
    },[firstIsInView, secisInView, thrisInView])
    return ( 
        <div >
            
        <div className="md:flex-1 h-full bg-main flex flex-col py-20 items-center gap-5 md:pl-64">
        <h1 id="projects" className="text-5xl itmes-center text-white border-b-2 pb-4 my-6 ">My projects</h1>
            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={firstControl}
         ref={first} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <a href="https://tcrnkic0.web.app" target="/blank" aria-label="First project">
                <div className="w-72 flex flex-col md:flex-row  border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div>
                      <h1 className="text-4xl pb-5">Javascript Games</h1>
                      <p>Explore a collection of interactive JavaScript games designed to entertain and challenge. From classic favorites to innovative creations, this project showcases my coding skills in delivering engaging and dynamic web experiences.</p>
                  </div>
                  <div className="md:px-2 ">
                    <p className="text-sm pt-8  md:pt-2">tcrnkic0.web.app</p>
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
        animate={secControl}
         ref={sec} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <Link to="/APIs"  aria-label="First project">
                <div className="w-72 flex flex-col md:flex-row border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div className="w-[80%]">
                      <h1 className="text-4xl pb-5">API Projects</h1>
                      <p>Discover a series of completed projects where API integration takes center stage. From real-time data magic to dynamic web experiences, explore the diverse showcase of my work heavily influenced by APIs.  </p>
                 </div>
             
                </div>
                </Link>
            </motion.div>


            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={thrControl}
         ref={thr} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <Link to="/Databases"  aria-label="Database projects">
                <div className="w-72 flex flex-col md:flex-row border-s-[1px] ps-6  md:w-[33rem] mx-auto my-10">
                  <div className="w-[80%]">
                      <h1 className="text-4xl pb-5">Database Projects</h1>
                      <p>Embark on a journey through my completed projects, where the spotlight is on database integration. From efficient data management to dynamic web experiences, these projects showcase the seamless fusion of technology and database solutions. </p>
                 </div>
             
                </div>
                </Link>
            </motion.div>   
        </div>
    </div>
    );
}
 
export default Projects;