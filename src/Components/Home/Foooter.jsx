import React from 'react';
import { Footer } from 'react-daisyui';
import { MdEmail, MdAddCall, MdLocationOn } from 'react-icons/Md';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Foooter = () => {
    return (
        <div>
            <Footer className="px-96 py-10 rounded-t-lg bg-neutral flex justify-between">
                <div>
                    <Footer.Title className='text-xl'>Shamim Hossain Srabon</Footer.Title>

                    <div className='flex items-center gap-2 text-lg'>< MdLocationOn className='text-blue-500'></MdLocationOn>   <h2>Dhaka, Bangladesh</h2></div>
                    <div className='flex items-center gap-2 text-lg'>< MdEmail className='text-blue-500'></MdEmail>   <h2>shamimhossainsrabon7@gmail.com</h2></div>
                    <div className='flex items-center gap-2 text-lg'><MdAddCall className='text-blue-500'></MdAddCall>  <h2>+8801881801409</h2></div>
                </div>

                <div>
                    <Footer.Title className='text-lg'>Social</Footer.Title>
                    <div className='text-xl text-blue-500'>

                        <a className='flex items-center gap-2 mb-2' href="https://www.facebook.com/Shamim.0188" target='_blank'><FaSquareFacebook></FaSquareFacebook> <span className='text-gray-400 font-semibold text-sm'>Facebook</span></a>
                        <a className='flex items-center gap-2 mb-2' href="https://api.whatsapp.com/send/?phone=%2B8801881801409&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsappSquare></FaWhatsappSquare> <span className='text-gray-400 font-semibold text-sm'>Whatsapp</span></a>
                        {/* <a className='flex items-center gap-2 mb-2' href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillTwitterSquare></AiFillTwitterSquare><span className='text-gray-400 font-semibold text-sm'>Twitter</span></a> */}
                        <a className='flex items-center gap-2 mb-2' href="https://github.com/ShamimHossain1" target='_blank'><FaGithubSquare></FaGithubSquare><span className='text-gray-400 font-semibold text-sm'>GitHub</span></a>
                        {/* <a className='flex items-center gap-2 mb-2' href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillLinkedin></AiFillLinkedin><span className='text-gray-400 font-semibold text-sm'>Linkedin</span></a> */}
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foooter;