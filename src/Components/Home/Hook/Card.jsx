import React from 'react';

const Card = ({data}) => {
    // console.log(data)
    return (
        <div>
            <button className="btn text-slate-300 w-44 hover:text-blue-500">{data}</button>
        </div>
    );
};

export default Card;