import React from 'react'

export default function Main(props) {

    const {chooseHero} = props


  return (
    <div className='imgContainer'>
        <div className='img-wrap'>
            <img className='bgImage' src='heroesBg.jpg' />
        </div>
        <div className='content-wrap'>
            <div className='content-div' > 
                <input placeholder='Enter Hero Name ...' id='heroInput'/>
                <button className='submitHero' onClick={chooseHero}>
                    <p>Search For hero</p>
                    <i className="fa-solid fa-gavel hammerIcon"></i>
                </button>
            </div>
        </div>
    </div>
  )
}
