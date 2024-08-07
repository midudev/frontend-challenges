import React from 'react';
import Options from './Options.jsx'
import Strength from './Strength.jsx'

export default function CustomContainer({ options, setOptions, colorStrength, nameStrength }) {
  const arrayOptions = Object.keys(options)
  const arrBooleanOptions = Object.values(options)

  // Setting the options selected by the user
  const handleOptions = (e) => {
	console.log(e.target.checked)
	setOptions({ 
	  ...options, 
	  [e.target.value]: e.target.checked,
	})
  }

  return (
	<div className='p-4 sm:p-7 bg-[#1F232B] mb-5'>
	  <h3 id='codseb3s-container-title' className='font-sans mb-1'>Custom</h3>
	  <p id='codseb3s-container-sub-title' className='font-sans mt-2 mb-3'>Make custom password</p>
	  <div onChange={(e) => handleOptions(e)} id='codseb3s-container-checkboxs' className='mb-3'>
		{/* <!-- Optionals Checkbox for the Password --> */}
		{
		  arrayOptions.map((option, i) => {
			return (
			  <Options 
				key={i}
				strBooleanOption={arrBooleanOptions[i]}
				option={option}
			  />
			)
		  })
		
		}
	  </div>
	  <div className='flex p-3 bg-[#18171F]'>
		<p id='codseb3s-strength-title' className='font-sans mt-[.0625rem] mr-auto text-[#817D92]'>STRENGTH</p>
		<div className='relative flex'>
		  <div className='absolute flex w-[4.7rem] mt-[.0625rem] justify-center left-[-5rem]'>
			<label id='codseb3s-strength-lvl-title' className='font-sans ml-auto'>  
			  {nameStrength}
			</label>
		  </div>
		  {/* <!-- Strength of the Password --> */}
		  {
			colorStrength.map((strength, i) => {
			  return (
				<Strength 
				  key={i}
				  strength={strength}
				/>
			  )
			})
		  }
		</div>
	  </div>
	</div>
  )
}