import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import { BrowserRouter } from 'react-router-dom';
import Foooter from './Foooter';

const Layout = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className=' absolute'>
                <div className='px-36 mt-16' >
                    <Banner></Banner>
                    <About></About>
                    <Skills></Skills>
                    <Projects></Projects>
                    <Contact></Contact>

                <Foooter></Foooter>
                </div>
            </div>
        </div>

    );
};

export default Layout;