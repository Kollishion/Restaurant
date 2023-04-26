import React from 'react'
import {main_body} from '../assets'
const Hero = () => {
  return (
    <div className="">
      <picture>
      <img src={main_body} alt="main_body"  className="w-full" />
      <h1 className="text-shadow: 0 0 25px black absolute text-center">Welcome <br /> To <br /> The <br /> Restaurant </h1>
      </picture>
    </div>
  )
}

export default Hero
