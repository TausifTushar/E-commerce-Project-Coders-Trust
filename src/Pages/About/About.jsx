import React from 'react';
import image from '../../assets/Image/1.jpg'
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <h1>Helo From About Page</h1>

            <img className='h-[300px] w-[400px]' src={image} alt="" />
        </div>
    );
};

export default About;