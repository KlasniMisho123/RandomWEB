import React from 'react'

export default function Main() {
  return (
    <div className='imgContainer'>
        <div className='img-wrap'>
            <img className='bgImage' src='heroesBg.jpg' />
        </div>
        <div className='content-wrap'>
            <div className='content-div' > 
                <input placeholder='Enter Hero Name ...'/>
                <button>
                    submit
                </button>
            </div>
        </div>
    </div>
  )
}
