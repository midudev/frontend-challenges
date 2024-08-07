import React, { useState } from 'react'

export default function LengthContainer({ allOptionsSelected, passwordGenerator, passwordLength, setPasswordLength, showSquare }) {

  // Make the design dynamic and easy to change
  const [sizePwGenerator, ] = useState({
    'min': 8,
    'max': 85
  })

  const {min, max} = sizePwGenerator
	
	  // FUNCTION - Handle the value and color of the slider
	const handleSlide = (e) => {
	  // Don't allow the user move the slide 
	  // if the user COPY the text at the last max number allow it
	  if(showSquare === true) {
		return e.target.value = max
	  }
	  // Don't allow the user move the slide if nothing is selected
	  if(allOptionsSelected === false) {
		return e.target.value =  passwordLength
	  }
	  const bgSize = Number(e.target.value)
	  setPasswordLength(bgSize)
  
	  // Formula - (val - min) * 100) / (max - min))
	  const value = ( ((bgSize - min) * 100) / (max - min))
	  e.target.style.background = `linear-gradient(
      to right, 
      #A4FFAF 0%, 
      #A4FFAF ${value}%, 
      #18171F ${value}%, 
      #18171F 100%
	  )`
  
	  passwordGenerator(bgSize)
	}
    
	return (
		<div className='p-4 sm:p-7 mb-3 bg-[#1F232B]'>
			<h3 id='codseb3s-container-title' className='font-sans mb-1'>Length</h3>
			<div className='flex mb-3 sm:mb-[.875rem]'>
				<p id='codseb3s-container-sub-title' className='font-sans my-auto mr-auto'>Character Length</p>
				<p id='codseb3s-quantity-length' className='font-sans'>
						{passwordLength}
				</p>
			</div>
			{/* Slider container */}
			<div className='mb-1'>
				<input id='codseb3s-slider' className='w-[100%]' onChange={(e) => handleSlide(e)} type='range' min={min} max={max} defaultValue={passwordLength} step={1}/>
			</div>
		</div>
	)
}