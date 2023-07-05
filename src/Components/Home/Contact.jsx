import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Title from './Hook/Title';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm('service_gnd9pne', 'template_7weoa14', form.current, 'OAi03uCBqF4V8nTZa')
            .then((result) => {
                console.log(result.text);
                e.target.reset();

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your message has been sent successfully.',
                    padding: '3em',
                    width: 600,
                    showConfirmButton: false,
                    timer: 1800
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact'>
            <Title title={'Contact Me'}></Title>

            <div className='md:flex justify-evenly md:mb-20 mb-10 '>
                <div className='md:w-1/3 flex justify-center flex-col md:gap-7 gap-2 px-5 md:px-0'>
                        <h1 className='md:text-5xl text-2xl font-semibold text-slate-400'>Send me a message</h1>
                        <p className='md:text-lg text-sm md:font-semibold text-slate-400'>Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
                </div>

                <form className='flex flex-col gap-2 md:w-4/12 shadow-xl p-10  rounded-xl shadow-gray-900' ref={form} onSubmit={sendEmail}>
                    <label className='font-semibold md:text-lg'>Name</label>
                    <input required className='border border-blue-500 py-2 px-4 rounded-lg text-lg placeholder:font-normal font-semibold  ' placeholder='Your Name' type="text" name="user_name" />
                    <label className='font-semibold md:text-lg'>Email</label>
                    <input required className='border border-blue-500 py-2 px-4 rounded-lg text-lg placeholder:font-normal font-semibold ' placeholder='Your Email' type="email" name="user_email" />
                    <label  className='font-semibold md:text-lg'>Message</label>
                    <textarea required className='border border-blue-500 py-2 px-4 rounded-lg h-52  ' placeholder='Write Your Message.....' name="message" />
                    <button className='btn text-blue-500 mt-3 hover:text-slate-300 border-blue-500' type="submit" value="Send">Send</button>
                </form>
                   
            </div>



        </div>
    );
};

export default Contact;