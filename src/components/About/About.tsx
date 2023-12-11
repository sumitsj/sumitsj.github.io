import React from 'react'
import Skills from '../Skills/Skills';
import './About.scss';
import Timeline from '../Timeline/Timeline';

export const About: React.FC = () => {
    return (
        <div className='about-page'>
            <div className='section-title'>My Skills</div>
            <Skills />
            <hr className='separator separator--dots' />
            <div className='section-title'>Work Experience & Education</div>
            <Timeline />
        </div>
    )
}

export default About;