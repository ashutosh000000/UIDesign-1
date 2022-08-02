import React from 'react';
import './cards.css';
import '../Object.js';
import data from '../Object.js';
export default function cards() {
  


return (
  <>
  <div className='card-container-heading'><h2>How Does It <span>Work?</span></h2></div>
  <div className='cards-container'>
      {
        data.map((ele) =>{
          return(
          <div className='card' key = {ele.id}> 
      <div className="card-heading">
          <div className='card-heading-img'><img src={`${ele.image}`} alt =""/></div>
          <div className='card-heading-heading'><h3>{ele.titel}</h3></div>
      </div>
      <div className='card-list'>
        <ul>
          <li>{ele.li1}</li>
          <li>{ele.li2}</li>
        </ul>
      </div>
      </div>
          )
          })

      }
      

  </div>
  </>
)
}