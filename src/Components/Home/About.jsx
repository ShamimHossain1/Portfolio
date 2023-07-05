import React, { useState } from 'react';
import Title from './Hook/Title';
import { FiDownload } from "react-icons/fi";

const About = () => {
   
    return (
        <div className='px-2'  id='about'>
            <Title
                title={'About Me'}
            ></Title>

            <div className='md:flex '>
                <div data-aos="zoom-in" className='md:w-1/2 '><img  className='opacity-80 rounded-3xl' src="me.jpg" alt="" /></div>

             

                <div data-aos="zoom-in-left" className='md:w-1/2 px-5'>
                    <p className='md:text-lg text-xs mt-10'>
                        <p className='md:font-bold font-semibold md:text-2xl text-lg mb-2'>Hello, I am Shamim Hossain Srabon. I am a Web developer based in Bangladesh.</p>
                      
                        <p className='md:leading-8 leading-5' >
                       I Have a solid foundation in MERN (MongoDB, Express.js, React, Node.js) development. Having recently completed a Web Development course with a specialization in full-stack web development, I am excited to kick-start my career in a dynamic and fast-paced organization. Throughout my learning journey and personal projects, I have gained proficiency in HTML, CSS, JavaScript and React JS Which are the core technologies used in web development. I can design and develop responsive websites that work well on different devices and browsers. I pay close attention to details and strive for clean, efficient and optimized code. I am experienced in ReactJS Tailwind and comfortable with Express Js, Next Js, MongoDB and Node Js. I keep myself updated with the latest trends and best practices in front-end development to deliver high-quality results.
                        </p>
                        
                       </p>
                     


                   
                    <a className="btn flex justify-center w-40 mx-auto md:mx-0  border-blue-500 hover:text-slate-300  px-4 md:text-lg py-2 rounded-lg my-5  text-blue-500 font-bold" href='https://drive.google.com/file/d/1v5Do8jl6zQrLAk5bFDq0d0OWkczONcrF/view' target='_blank'>Resume <FiDownload></FiDownload></a>


                </div>
              
            </div>

        </div>
    );
};

export default About;