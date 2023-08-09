import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='maindiv'>

      <div className='heads'>
        <h1>Learn to code - for free.</h1>
        <h1>Build projects</h1>
        <h1>Earn Certifications</h1>
      </div>

      <div className='desc'>
        <p>Since 2014 , more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including</p>
        <div className='imgDiv'>
          <img className='img' src="https://i.postimg.cc/HsnmJxFp/Untitled.png" alt="" />
        </div>
      </div>



      <div>
        <button className='GetStarted'>Get Started ( it's free )</button>
      </div>
    </div>
  )
}

export default Home