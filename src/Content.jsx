// Content.js
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const Content = () => {
  const content = useRef(null);
  const isInView = useInView(content, {once: true});
  const mainControl = useAnimation();

  useEffect(()=>{
    if (isInView){
     mainControl.start("visible");
    }
 },[isInView])

    return (

     <div>
         <div className="md:flex-1 h-[43rem] md:h-screen bg-main flex flex-col items-center md:pl-64">
           
           <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: -20},
        }}
        transition={{duration: 0.5, delay: 0.1} }
        initial="hidden"
        animate={mainControl}
         ref={content} className="flex justify-center items-center w-full h-full">
             <h2 id="about" className="text-white w-80 md:w-[39rem] text-xl 2xl:w-[48rem] 2xl:text-3xl">
               Born and raised in the scenic landscapes of Bosnia and Herzegovina, I discovered my love for web development at an early age. At 19, I'm on a mission to make a mark in the digital realm as a front-end developer. 
             </h2>
           </motion.div>
           
         </div>
     </div>
    );
  };
  
  export default Content;
  