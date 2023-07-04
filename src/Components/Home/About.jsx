import React from 'react';
import Title from './Hook/Title';
import { FiDownload } from "react-icons/fi";
const About = () => {
    return (
        <div  id='about'>
            <Title
                title={'About Me'}
            ></Title>

            <div className='flex '>
                <div className='w-1/2 '><img  className='opacity-80 rounded-3xl' src="me.jpg" alt="" /></div>
                <div className='w-1/2 px-5'>
                    <p className='text-lg font-semibold  mt-10'>
                        <p className='font-bold text-xl mb-2'>Hello, I am Shamim Hossain Srabon. I am a Web developer based in Bangladesh.</p>
                        I Have a solid foundation in MERN (MongoDB, Express.js, React, Node.js) development. Having recently completed a Web Development course with a specialization in full-stack web development, I am excited to kick-start my career in a dynamic and fast-paced organization. Throughout my learning journey and personal projects, I have gained proficiency in HTML, CSS, JavaScript and React JS Which are the core technologies used in web development. I can design and develop responsive websites that work well on different devices and browsers. I pay close attention to details and strive for clean, efficient and optimized code. I am experienced in ReactJS Tailwind and comfortable with Express Js, Next Js, MongoDB and Node Js. I keep myself updated with the latest trends and best practices in front-end development to deliver high-quality results.


                    </p>
                    <a className="btn bg-blue-600 text-white text-lg mt-5" href='https://drive.google.com/file/d/1v5Do8jl6zQrLAk5bFDq0d0OWkczONcrF/view' target='_blank'>Resume <FiDownload></FiDownload></a>


                </div>
            </div>

        </div>
    );
};

export default About;