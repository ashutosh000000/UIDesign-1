import React from 'react'
import './midsection.css';
import Lmidsection from './midsectionsubcomp/Lmidsection';
import Rmidsection from './midsectionsubcomp/Rmidsection';
export default function Midsection() {
  return (
    <>
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
