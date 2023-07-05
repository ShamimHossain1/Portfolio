import React, { useEffect, useState } from 'react';
import Title from './Hook/Title';
import Card from './Hook/Card';

const Skills = () => {

    const [Expertise, setExpertise] = useState([])
    const [Comfortable, setComfortable] = useState([])
    const [Tools, setTools] = useState([])

    useEffect(() => {
        fetch('skills.json')
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                setExpertise(data.Expertise)
                setTools(data.tools)
                setComfortable(data.Comfortable)
            })
            ;
    }, [])
    // console.log(Expertise)
    // console.log(Tools)
    // console.log(Comfortable)
    return (
        <div id='skills'>
            <Title
                title={'My Skills'}
            ></Title>

            <div className='md:flex justify-between  items-center shadow-lg md:mx-72 md:my-10 my-5  md:px-28 px-2 mx-2 py-7 rounded-lg'>
                <div>
                    <h2 className='md:text-3xl text-xl text-blue-500 font-bold'>Expertise:</h2>
                </div>
                <div className='grid grid-cols-3 md:gap-3 gap-1'>
                    {
                        Expertise.map(data =>
                            <Card
                                data={data.name}
                                key={data.name}
                            ></Card>



                        )
                    }

                </div>
            </div>
            <div className='md:flex justify-between  items-center shadow-lg md:mx-72 md:my-10 my-5 md:px-28 px-2 mx-2 py-7 rounded-lg'>
                <div>
                    <h2 className='md:text-3xl text-xl text-blue-500 font-bold'>Comfortable:</h2>
                </div>
                <div className='grid  grid-cols-3 md:gap-3 gap-1'>
                    {
                        Comfortable.map(data =>
                            <Card
                                data={data.name}
                                key={data.name}
                            ></Card>



                        )
                    }

                </div>
            </div>
            <div className='md:flex justify-between  items-center shadow-lg md:mx-72 md:my-10 my-5 md:px-28 px-2 mx-2 py-7 rounded-lg'>
                <div>
                    <h2 className='md:text-3xl text-xl text-blue-500 font-bold'>Tools:</h2>
                </div>
                <div className='grid  grid-cols-3 md:gap-3 gap-1'>
                    {
                        Tools.map(data =>
                            <Card
                                data={data.name}
                                key={data.name}
                            ></Card>



                        )
                    }

                </div>
            </div>



        </div>
    );
};

export default Skills;