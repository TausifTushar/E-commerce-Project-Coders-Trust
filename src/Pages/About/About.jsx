import React from 'react';
import image from '../../assets/Image/1.jpg'

const About = () => {
    return (
        <div>
            <h1>Helo From About Page</h1>

            <img className='h-[300px] w-[400px]' src={image} alt="" />
        </div>
    );
};

export default About;