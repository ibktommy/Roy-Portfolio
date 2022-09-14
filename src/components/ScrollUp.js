import React from 'react'
import 'animate.css'

const ScrollUp = () => {
  // Function to Scroll Up
  const hideModal = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button className='scroll-up animate__animated animate__bounceInDown' onClick={hideModal}>
      <i className="fas fa-chevron-up"></i>
    </button>
  )
}

export default ScrollUp