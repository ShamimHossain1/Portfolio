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

            <div className='px-44 py-44'>
                <div className='font-semibold text-lg  '>
                    <h2>HELLO, MY NAME IS</h2>
                    <hr className='w-14 bg-blue-500 border-0 h-1 rounded-lg mt-3 ' />
                </div>
                <div className='font-bold mt-10  '>
                    <h1 className='text-5xl text-gray-300'>Shamim Hossain Srabon</h1>
                    <h1 className='text-2xl mt-4 text-gray-400 '>MERN Stack Developer</h1>
                </div>
                <div className='font-semibold mt-10 text-xl '>
                    <div className='flex items-center gap-2 '>< MdEmail className='text-blue-500'></MdEmail>   <h2 className='mb-2'>shamimhossainsrabon7@gmail.com</h2></div>
                    <div className='flex items-center gap-2 '><MdAddCall className='text-blue-500'></MdAddCall>  <h2>+8801881801409</h2></div>

                    <div className='flex gap-2 items-center text-3xl text-blue-500 mt-3'>

                        <a href="https://www.facebook.com/Shamim.0188" target='_blank'><FaSquareFacebook></FaSquareFacebook></a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B8801881801409&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsappSquare></FaWhatsappSquare></a>
                        <a href="https://github.com/ShamimHossain1" target='_blank'><FaGithubSquare></FaGithubSquare></a>
                        {/* <a href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillTwitterSquare></AiFillTwitterSquare></a>
                        <a href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillLinkedin></AiFillLinkedin></a> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;