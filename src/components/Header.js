import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <>
    <div className = 'header-container'>
        <div className="image-logo">
            <img src = '../../images/header/pepc_logo.png'/>
        </div>
        <div className="l">Trainings</div>
        <div className="l">Garanteed Job Program</div>
        <div className="l">NADOS</div>
        <div className="l">Resousces</div>
        <div className="l header-login">Login</div>
    </div>
    </>
  )
}

