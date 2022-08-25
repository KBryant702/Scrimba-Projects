import React from 'react'
import Github from '../assets/GitHub_Icon.png'
import Facebook from '../assets/Facebook_Icon.png'
import Instagram from '../assets/Instagram_Icon.png'
import LinkedIn from '../assets/Linkedin_Icon.png'
import Twitter from '../assets/Twitter_Icon.png'

function Footer() {
  return (
    <div className='footer'>

    <a href='https://twitter.com/Kimberl67383458' ><img className="social-media"src={Twitter} /></a>
    <a href='https://www.facebook.com/1NuttyMama/' > <img className="social-media"src={Facebook} /></a>
      <a href='https://www.instagram.com/onenuttymama/?hl=en'><img className="social-media"src={Instagram} /></a>
     <a href='https://www.linkedin.com/in/kimberly-bryant702/' ><img className="social-media"src={LinkedIn}/></a>
      <a href='https://github.com/KBryant702'><img className="social-media"src={Github} /></a>

    </div>
  )
}

export default Footer
