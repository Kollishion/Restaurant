import React from 'react'
import {main_body} from '../assets'
const Hero = () => {
  return (
    <div className="">
      <picture className=" w-40 h-40 rounded-full overflow-hidden">
      <img src={main_body} alt="main_body"  className="w-full
      md:w-50% h-50%" />
      <h1 className="absolute w-full py-2.5 bottom-0
       inset-x-0  
        text-xs text-center 
      leading-4"> <p>Welcome</p> <p>To</p> <p>The</p> 
      <p>Restaurant</p> </h1>
      </picture>
    </div>
  )
}

export default Hero
