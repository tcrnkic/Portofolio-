
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from '@emailjs/browser'
const Form = () => {
    const form = useRef()
    const send = useRef();

    const [successText, setSuccessText] = useState("");
    const resetForm = () => {
        form.current.reset();
       
      };
    const removeSuccess = ()=>{
       setSuccessText("");
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
           ????
            )
          .then((result) => {
              console.log(result.text);
              setSuccessText("Message has been sent!")
              setTimeout(removeSuccess, 3000);
              resetForm();
          }, (error) => {
              console.log(error.text);
          });
      };
      
      const content = useRef(null);
      const isInView = useInView(content, {once: true});
      const mainControl = useAnimation();
      useEffect(()=>{
        if (isInView){
         mainControl.start("visible");
        }
     },[isInView])
    return ( 
        <div >
            
        <div className="md:flex-1 h-full bg-main flex flex-col py-10 items-center gap-5 md:pl-64">
        <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y: -20},
        }}
        transition={{duration: 0.5, delay: 0.1} }
        initial="hidden"
        animate={mainControl}
         ref={content} className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center text-white">Contact me now!</h1>
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm mx-auto bg-white bg-opacity-10 p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" for="user_name">Name</label>
        <input required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="user_name" placeholder="Tarik C"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" for="user_email">Email</label>
        <input required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="user_email" placeholder="tarik@example.com"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" for="message">Your Message</label>
        <textarea required name="message" className="w-full rounded-md px-3 py-2" rows="8" id="" placeholder="I really like your site!"></textarea>
      </div>
      <button ref={send}
        className="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        type="submit">Send message</button>
        {successText &&  <h2 className="text-center  mt-4 text-green-400 bg-maindark py-3">{successText}</h2>}
    </form>
  </motion.div>
        </div>

        </div>
     );
}
 
export default Form;
