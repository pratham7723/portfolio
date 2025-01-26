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
            <br /> A Passionate Developer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="As a Full Stack Developer, I use my passion to create web applications that challenge existing standards."
            link="/about"
            btnText="Learn More"

        />
    ),
    3: (
        <InfoBox
            text="Within my journey I have developed multiple projects. Want to check them out?"
            link="/projects"
            btnText="Visit my Portfolio"

        />
    ),
    4: (
        <InfoBox
            text="Got a project in mind?. Let's work together."
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