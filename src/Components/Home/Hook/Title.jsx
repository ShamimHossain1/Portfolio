import React from 'react';

const Title = ({ title }) => {
    return (
        <div>
            <div className='font-semibold text-blue-500  text-center my-24'>
                <h1 className='text-4xl '>{title} </h1>
                <hr className='bg-blue-500 border-0 h-1 rounded-lg mt-6 w-1/2 mx-auto mb-20 ' />
            </div>
        </div>
    );
};

export default Title;