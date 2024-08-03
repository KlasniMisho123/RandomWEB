import React from 'react'

export default function Main() {
  return (
    <div className='imgContainer'>
        <div className='img-wrap'>
            <img className='bgImage' src='heroesBg.jpg' />
        </div>
        <div className='content-wrap'>
            <div className='content-div' > 
                <input placeholder='Enter Hero Name ...' id='heroInput'/>
                <button className='submitHero'>
                    <p>Search For hero</p>
                    <i className="fa-solid fa-gavel hammerIcon"></i>
                </button>
            </div>
        </div>
    </div>
  )
}
