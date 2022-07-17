import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <>
    <div className = 'header-container'>
        <div className="image-logo">
            <img src = '../../images/header/pepc_logo.png' alt= "pepcode logo"/>
        </div>
        <div className="l">Trainings</div>
        <div className="l header-gjp">Garanteed Job Program</div>
        <div className="l">NADOS</div>
        <div className="l">Resousces</div>
        <div className="l header-login">Login</div>
    </div>
    <div className="form-section">
        <div className='about'>
            <h1><span>Become a</span> Full Stack<br/>Developer</h1>
            <div className='about-p2'>Learn. Earn. It's Your Turn.<br/>0% Upfront fee</div>
            <div className='about-p3'>
                <div>
                    <h3>Guaranteed placement</h3>
                </div>
            </div>
            <div className='about-btn'>
                <button>APPLY NOW</button>
            </div>
        </div>
        <div className='free-trial-form'></div>
    </div>
    </>
  )
}

