import React from 'react'

const Navigation = () => {
  return (
    <div>
        <nav>
      <div className = "logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>Login</button>
     </nav>

      
    </div>
  )
}

export default Navigation
