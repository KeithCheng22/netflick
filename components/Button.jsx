'use client'
import React from 'react'
import Image from 'next/image';
import upArrow from '../public/up-arrow.png'

const Button = () => {

        const handleClick = () => {
          const targetElement = document.getElementById('header');
      
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        };

  return (
    <Image src={upArrow} className="fixed bottom-5 right-5 text-white cursor-pointer hover:opacity-60" onClick={handleClick} width={50} alt='return to top'/>
  )
}

export default Button