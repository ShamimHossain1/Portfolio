import React from 'react';

const Card = ({data}) => {
    // console.log(data)
    return (
        <div>
            <button  className="btn  md:text-slate-300 md:w-44 w-full text-xs md:text-sm md:mt-0 mt-3  hover:text-blue-500">{data}</button>
        </div>
    );
};

export default Card;