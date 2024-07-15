import React from 'react'
import {Link } from 'react-router-dom'
import {arrow} from'../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)
 
const rendercontent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue ру-4 px-8 text-white mx-3">
            Hi, I am <span className="font-semibold">Yeswanth Kola</span>👋
            <br />
            A Software Engineer from India.
        </h1>
    ),
    
    2: (
        <InfoBox
        text="I am a Full Stack Developer with a passion for building web applications"
        link='/about'
        btnText='Know More'
        />
    ),
    3: (
        <InfoBox
        text='I am a Full Stack Developer with a passion for building web applications'
        link='/projects'
        btnText='View Projects'
        />
    ),
    4:(
   <InfoBox
     text= "Need a project done or looking for a dev? I'm just a few keystrokes away"
     link="/contact"
     btnText="Let's talk"
    />
    ),
 
};
 
const Homeinfo =    ({currentStage}) => {
  return (
   rendercontent[currentStage] || null 
  )
}

export default Homeinfo
