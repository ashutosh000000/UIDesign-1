import React from 'react'
import './midsection.css';
// import Lmidsection from './midsectionsubcomp/Lmidsection';
// import Rmidsection from './midsectionsubcomp/Rmidsection';
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

                <div className='free-trial-form-container'>
                    <div className='free-trial-form'>
                        <div className='free-trial-form-heading'><h1>Book a <span className='red-c'>FREE</span> trial class.</h1>
                        </div>
                        <div className="free-trial-form-email">
                            <label>Email ID <span className='red-c'>*</span></label>
                            <input type = "email" />
                        </div>
                        <div className="free-trial-form-graduation">
                            <label>Graduation Year <span className='red-c'>*</span></label>
                            <input type = "number" />
                        </div>
                        <div className="free-trial-form-mobile">
                            <label>Mobile Number <span className='red-c'>*</span></label>
                            <div><input type = "number" className='free-trial-form-mobile-code' value="+91"/>
                            <input type = "number" className='free-trial-form-mobile-no'/>
                            </div>
                            
                        </div>
                        <button className='free-trial-form-button'>
                            BOOK YOUR LIVE SESSION
                        </button>
                    </div>
                </div>
    </div>


    </>
  )
}
