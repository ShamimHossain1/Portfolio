import React from 'react';

const Title = ({ title }) => {
    return (
        <div data-aos="fade-up
        ">
            <div className='font-semibold text-blue-500  text-center md:my-24 my-8'>
                <h1 className='md:text-4xl text-xl '>{title} </h1>
                <hr className='bg-blue-500 border-0 h-0.5 rounded-lg mt-2 md:mt-6 w-1/3 mx-auto  md:mb-20 ' />
            </div>
        </div>
    );
};

export default Title;