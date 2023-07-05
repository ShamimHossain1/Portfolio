import React from 'react';
import { Footer } from 'react-daisyui';
import { MdEmail, MdAddCall, MdLocationOn } from 'react-icons/Md';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Foooter = () => {
    return (
        <div>
            <Footer className="md:px-96 px-5  py-10 md:rounded-t-lg bg-neutral flex md:justify-between">
                <div>
                    <Footer.Title className='md:text-xl'>Shamim Hossain Srabon</Footer.Title>

                    <div className='flex items-center gap-2 md:text-lg text-xs'>< MdLocationOn className='text-blue-500'></MdLocationOn>   <h2>Dhaka, Bangladesh</h2></div>
                    <div className='flex items-center gap-2 md:text-lg text-xs'>< MdEmail className='text-blue-500'></MdEmail>   <h2>shamimhossainsrabon7@gmail.com</h2></div>
                    <div className='flex items-center gap-2 md:text-lg text-xs'><MdAddCall className='text-blue-500'></MdAddCall>  <h2>+8801881801409</h2></div>
                </div>

                <div>
                    <Footer.Title className='md:text-lg'>Social</Footer.Title>
                    <div className='md:text-xl text-blue-500'>

                        <a className='flex items-center gap-2 hover:text-white mb-2' href="https://www.facebook.com/Shamim.0188" target='_blank'><FaSquareFacebook></FaSquareFacebook> <span className='text-gray-400 hover:text-white md:font-semibold md:text-sm text-xs'>Facebook</span></a>
                        <a className='flex items-center hover:text-white gap-2 mb-2' href="https://api.whatsapp.com/send/?phone=%2B8801881801409&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsappSquare></FaWhatsappSquare> <span className='text-gray-400 hover:text-white md:font-semibold md:text-sm text-xs'>Whatsapp</span></a>
                        {/* <a className='flex items-center hover:text-white gap-2 mb-2' href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillTwitterSquare></AiFillTwitterSquare><span className='text-gray-400 hover:text-white md:font-semibold md:text-sm text-xs'>Twitter</span></a> */}
                        <a className='flex items-center hover:text-white gap-2 mb-2' href="https://github.com/ShamimHossain1" target='_blank'><FaGithubSquare></FaGithubSquare><span className='text-gray-400 hover:text-white md:font-semibold md:text-sm text-xs'>GitHub</span></a>
                        {/* <a className='flex items-center gap-2 hover:text-white mb-2' href="https://demo.strixdevs.com/shamim/#" target='_blank'><AiFillLinkedin></AiFillLinkedin><span className='text-gray-400 md:font-semibold hover:text-white md:text-sm text-xs'>Linkedin</span></a> */}
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foooter;