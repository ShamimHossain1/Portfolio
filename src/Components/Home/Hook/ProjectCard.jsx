import React, { useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import { GiJusticeStar } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";

import { FaTools, FaServer } from "react-icons/fa";

const ProjectCard = ({ data }) => {
    const { image, title, About, githubLink, serverLink, liveLink, keyFeatures, tools } = data;


    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        setVisible(!visible)
    }



    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className="card shadow-gray-900 shadow-xl">
            <figure><img className='hover:scale-110 duration-1000 opacity-80' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title md:text-2xl md:font-bold">{title}</h2>
                <p className='md:text-base text-xs'>{About}</p>


                <div className="font-sans">
                    <div className=" justify-center ">
                        <button onClick={toggleVisible} className="btn w-full border-blue-500 hover:text-slate-300  px-2 py-2 rounded-lg mt-3  text-blue-500 md:font-bold" >View Details</button>
                    </div>
                    <Modal className='max-w-6xl scale-75 duration-1000 p-10' open={visible}>
                        <Modal.Header className="font-bold">
                            <h1 className='md:text-3xl text-gray-200'>{title}</h1>
                            <p className='md:text-base text-sm mt-3 font-normal text-gray-300'>{About}</p>
                        </Modal.Header>

                        <Modal.Body>
                            <div className='flex md:justify-evenly gap-8 md:pr-20 '>
                                <div>
                                    <h2 className='md:text-xl'>Key Features</h2>
                                    <hr className='bg-blue-500 border-0 md:h-1 h-0.5 rounded-lg mb-4 mt-2 w-3/4 ' />
                                    <ul>
                                        {keyFeatures.map((data) =>
                                            <li key={data} className='mb-2 flex md:text-base text-xs  gap-3 text-gray-300'><GiJusticeStar className='text-blue-500 text-xl'></GiJusticeStar>{data}</li>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                <h2 className='md:text-xl'>Tools Used</h2>
                                    <hr className='bg-blue-500 border-0 md:h-1 h-0.5 rounded-lg mb-4 mt-2 ' />
                                    <ul>
                                        {tools.map((data) =>
                                            <li key={data} className='mb-2 flex items-center md:text-base text-xs gap-3 text-gray-300'><FaTools className='text-blue-500 '></FaTools>{data}</li>
                                        )}
                                    </ul>

                                </div>
                            </div>


                        </Modal.Body>
                        <div className='flex justify-center gap-4'>
                            <button className="btn border-blue-500   px-2 py-2 rounded-lg my-5 hover:text-slate-300 text-blue-500 font-bold"> <a className='flex items-center gap-2 ' href={liveLink} target="_blank"><CgWebsite></CgWebsite> Live Website</a></button>
                            <button className="btn border-blue-500 hover:text-slate-300   px-2 py-2 rounded-lg my-5  text-blue-500 font-bold">   <a className='flex items-center gap-2 ' href={githubLink} target="_blank"><AiOutlineGithub></AiOutlineGithub>GitHub</a></button>
                            {serverLink && <button className="btn border-blue-500 hover:text-slate-300  px-2 py-2 rounded-lg my-5  text-blue-500 font-bold"><a className='flex items-center gap-2 ' href={serverLink} target="_blank"> <FaServer></FaServer>Server</a></button>}
                        </div>

                        <Modal.Actions>
                            <button className="btn px-4 text-blue-500 mt-3 border-blue-500 font-bold" onClick={toggleVisible}>Exit</button>
                        </Modal.Actions>
                    </Modal>
                </div>




            </div >



        </div >
    );
};

export default ProjectCard;