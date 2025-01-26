import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (

    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrrow" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderConent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-gradient py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Swapnil</span>👋
            <br /> A Full Stack Developer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a Full Stack Developer with a passion for creating innovative and user-friendly web applications."
            link="/about"
            btnText="Learn More"

        />
    ),
    3: (
        <InfoBox
            text="Created many projects along the way. Want to see them?"
            link="/projects"
            btnText="Visit my Portfolio"

        />
    ),
    4: (
        <InfoBox
            text="Looking for a Full Stack Developer? Would love to work with you."
            link="/contact"
            btnText="Let's Talk"

        />
    )
}


const HomeInfo = ({ currentStage }) => {
    // null IF NO STAGE NUMBER THEN NOT DISPLAY A POPUP
    return renderConent[currentStage] || null
}

export default HomeInfo