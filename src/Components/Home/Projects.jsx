import React, { useEffect, useState } from 'react';
import Title from './Hook/Title';
import ProjectCard from './Hook/ProjectCard';

const Projects = () => {
    const[data, setData]=useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(response=> response.json())
        .then((result) =>{
          
            setData(result)
        })
    },[])

    return (
        <div id='projects'>

            <Title title={'My Projects'}></Title>

            <div className='grid grid-cols-2 gap-14 px-52'>
                {
                    data.map(data=>
                       
                        <ProjectCard
                        data={data}
                        key={data.title}
                        ></ProjectCard>
                    )
                }
            </div>
            
        </div>
    );
};

export default Projects;