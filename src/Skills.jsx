import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const Skills = () => {
    
    const html = useRef(null);
    const js = useRef(null);
    const react = useRef(null);
    const other = useRef(null);
    const HtmlsInView = useInView(html, {once: true});
 
    const JSisInView = useInView(js, {once: true});
    const ReactisInView = useInView(react, {once: true});
    const OtherisInView = useInView(other, {once: true});
    const htmlControl = useAnimation();
   
    const jsControl = useAnimation();
    const reactControl = useAnimation();
    const otherControl = useAnimation();
    useEffect(()=>{
       if (HtmlsInView){
        htmlControl.start("visible");
       }
      
       if (JSisInView){
        jsControl.start("visible");
       }
       if (ReactisInView){
        reactControl.start("visible");
       }
       if (OtherisInView){
        otherControl.start("visible");
       }
    },[HtmlsInView, JSisInView, ReactisInView, OtherisInView])
    return ( 
        <div >
            
        <div className="md:flex-1 h-full bg-main flex flex-col py-20 items-center gap-5 md:pl-64">
        <h1 id="skills" className="text-5xl itmes-center text-white border-b-2 pb-4 my-6 ">My skills</h1>
            <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={htmlControl}
         ref={html} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <div><img src="./assets/check.svg" alt="" className="w-10 h-10" /></div>
                <div className="w-72  border-s-[1px] ps-6  md:w-96 mx-auto my-10">
                    <h1 className="text-5xl">HTML & CSS</h1>
                    <p>I possess a solid foundation in the HTML markup language, utilizing its power to structure and organize content seamlessly on the web. Aside from that also a deep understanding of CSS, I specialize in crafting responsive web designs. My proficiency extends to popular front-end frameworks like Bootstrap and Tailwind. </p>
                </div>
            </motion.div>
           
            <motion.div  variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={jsControl}
         ref={js} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <div><img src="./assets/check.svg" alt="" className="w-10 h-10" /></div>
                <div className="w-72 border-s-[1px] ps-6 md:w-96  mx-auto my-10">
                    <h1 className="text-5xl">JAVASCRIPT</h1>
                    <p>I show solid knowladge in JavaScript, the dynamic and versatile programming language that breathes interactivity into web applications. I also have knowladge in some common javascript libraries.</p>
                </div>
            </motion.div>
            <motion.div   variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={reactControl}
         ref={react} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <div><img src="./assets/check.svg" alt="" className="w-10 h-10" /></div>
                <div className="w-72  border-s-[1px] ps-6  md:w-96  mx-auto my-10">
                    <h1 className="text-5xl">REACT</h1>
                    <p>I am well-versed in ReactJS, a powerful JavaScript library for building user interfaces. With React, I streamline the development process by creating reusable components that efficiently update and render data and usage of libraries. </p>
                </div>
            </motion.div>
            <motion.div   variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.5, delay: 0.25} }
        initial="hidden"
        animate={otherControl}
         ref={other} className="box items-center flex gap-8 text-white bg-main  hover:shadow hover:scale-105 transition-transform ease-out px-5 ">
                <div><img src="./assets/check.svg" alt="" className="w-10 h-10" /></div>
                <div className="w-72  border-s-[1px] ps-6  md:w-96  mx-auto my-10">
                    <h1 className="text-5xl">OTHER SKILLS</h1>
                    <p>I have some experience working with databases, and also dipped my toes into build tools like Vite to make projects run smoother. Beyond coding, I bring an eye for design by using software like Figma, Photoshop and Illustrator, ensuring that my projects are both functional and visually appealing.  </p>
                </div>
            </motion.div>
        </div>
    </div>
     );
}
 
export default Skills;