import React from 'react'

const Hero = () => {
  return (
    <main className='hero'>
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat ex tempora sed maxime necessitatibus asperiores quis ipsa officiis adipisci?</p>
            <div className='hero-btn'>
                <button className='btn btn1'>Shop now</button>
                <button className='btn secondary-btn'>Categery</button>
            </div>
            <div className='shoping'>
                <p> Also Available ON</p>
                <div className='brand-icons'>
                    <img src="./images/amazon.png" alt="amazon-logo" />
                    <img src="./images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
        <img src="./images/hero-image.png" alt="hero-img" />
        </div>
    </main>
  )
}

export default Hero
