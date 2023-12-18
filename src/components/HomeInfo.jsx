import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className=' neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Alireza</span>
            <br />
            A Junior Front-End Developer from Iran
        </h1>
    ),
    2: (
        <InfoBox text="I have hands-on experience with JavaScript, HTML, and CSS, and I'm eager to contribute my skills to create engaging user interfaces. Excited to learn and grow within a collaborative team environment. " link="/about" btnText="Learn more" />
    ),
    3: (
        <InfoBox text="I have hands-on experience with JavaScript, HTML, and CSS, and I'm eager to contribute my skills to create engaging user interfaces. Excited to learn and grow within a collaborative team environment. " link="/projects" btnText="My Projects" />
    ),
    4: (
        <InfoBox text="I have hands-on experience with JavaScript, HTML, and CSS, and I'm eager to contribute my skills to create engaging user interfaces. Excited to learn and grow within a collaborative team environment. " link="/contact" btnText="Contact Me!" />
    ),
}
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo