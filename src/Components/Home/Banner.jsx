import React from 'react';
import { MdEmail, MdAddCall } from 'react-icons/Md';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Banner = () => {
    return (
        <div  className='rounded-2xl' style={{
            backgroundImage: `url(${'Banner.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>

            <div className='md:px-44 px-5 md:py-44 py-10 '>
                <div className='font-semibold md:text-lg text-xs   '>
                    <h2>HELLO, MY NAME IS</h2>
                    <hr className='md:w-14 w-9 bg-blue-500 border-0 md:h-1 h-0.5 rounded-lg mt-3 ' />
                </div>
                <div className='md:font-bold font-semibold md:mt-10 mt-2  '>
                    <h1 className='md:text-5xl text-xl text-gray-300'>Shamim Hossain Srabon</h1>
                    <h1 className='md:text-2xl text-sm md:mt-4 text-gray-400 '>MERN Stack Developer</h1>
                </div>
                <div className='font-semibold md:mt-10 mt-4 md:text-xl text-xs '>
                    <div className='flex items-center gap-2 '>< MdEmail className='text-blue-500'></MdEmail>   <h2 className='md:mb-2 mb-1'>shamimhossainsrabon7@gmail.com</h2></div>
                    <div className='flex items-center gap-2 '><MdAddCall className='text-blue-500'></MdAddCall>  <h2>+8801881801409</h2></div>

                    <div className='flex gap-2 items-center md:text-3xl text-xl text-blue-500 mt-3'>

                        <a className='hover:text-slate-300 ' href="https://www.facebook.com/Shamim.0188" target='_blank'><FaSquareFacebook></FaSquareFacebook></a>
                        <a className='hover:text-slate-300 ' href="https://api.whatsapp.com/send/?phone=%2B8801881801409&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsappSquare></FaWhatsappSquare></a>
                        <a className='hover:text-slate-300 ' href="https://github.com/ShamimHossain1" target='_blank'><FaGithubSquare></FaGithubSquare></a>
                        {/* <a href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillTwitterSquare></AiFillTwitterSquare></a>
                        <a href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillLinkedin></AiFillLinkedin></a> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;