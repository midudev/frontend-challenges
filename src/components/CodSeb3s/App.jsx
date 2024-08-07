import './style/styles.css'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import PasswordContainer from './PasswordContainer.jsx'
import LengthContainer from './LengthContainer.jsx'
import CustomContainer from './CustomContainer.jsx'
import BtnPrincipal from './BtnPrincipal.jsx'

export default function App() {
  // Importants STATES to track
  // Pw String / Pw Length / Options selected 
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [options, setOptions] = useState({
    'uppercase': true,
    'lowercase': false,
    'numbers': false,
    'symbols': false
  })
  // Color Strength / Name Strength
  const [colorStrength, setColorStrength] = useState([
    'empty',
    'empty',
    'empty',
    'empty',
  ])
  const [nameStrength, setNameStrength] = useState('weak')
  const [showSquare, setShowSquare] = useState(false)

  // Make an random uppercase password when the user enter the first time
  useEffect(() => {
    passwordGenerator()
  }, [])

  // GLOBALS VARIABLES //
  const UPPERCASE = 'ABCDEFHIJKLMNOPQRSTUVWXYZ' // Avl = Availables
  const LOWERCASE= 'abcdefghijklmnopqrstuvwxyz'
  const NUMBERS = '0123456789'
  const SYMBOLS = '~&+@_*/.=$#'
  
  // Array of TRUE/FALSE options selected by the user
  const arrOptionsSelected = Object.values(options)

  // Evaluate if there is at leats ONE TRUE option selected by the user
  let allOptionsSelected = arrOptionsSelected.some(val => val === true)
  
  // FUNCTION - Generate the random String
  const getRandomStr = ({uppercase, lowercase, numbers, symbols}) => {
    const strUppercase = uppercase === true ? UPPERCASE : ''
    const strLowercase = lowercase === true ? LOWERCASE : ''
    const strNumbers = numbers === true ? NUMBERS : ''
    const strSymbols = symbols === true ? SYMBOLS : ''

    const strOptionsSelected = 
      strUppercase + strLowercase + strNumbers + strSymbols

    return strOptionsSelected
  }

  // FUNCTION - Generate the random password
  const passwordGenerator = (pwLength=passwordLength) => {
    if(allOptionsSelected === false) return alert('Please enter at least one option')
    const strOptionsSelected = getRandomStr(options)
    let password = ''
    for (let i = 0; i < pwLength; i++) {
      const randomNumber = Math.floor(Math.random() * strOptionsSelected.length)
      password += strOptionsSelected.charAt(randomNumber)
    }

    setPassword(password)
    handleStrength(pwLength)
  }

  // FUNCTION - Count the checkeds boxes by the user
  const countTrues = (arrOptsSel=arrOptionsSelected) => {
    return arrOptsSel.reduce((acc, val) => {
      return val === true ? acc + 1 : acc
    }, 0)
  }

  // FUNCTION - Handle the strength indicator
  // based on the quantity and length of the password
  const handleStrength = (pwLength=passwordLength) => {
    const numTrues = countTrues(arrOptionsSelected)

    // Verify the options selected by the user 
    const fourOpts = numTrues === 4 // Opts = Options
    const threeOtps = numTrues === 3
    const twoOneOtps = numTrues === 2 || numTrues === 1

    if(
        ((fourOpts) && pwLength <= 20) || 
        ((threeOtps) && pwLength <= 25) ||
        ((twoOneOtps) && pwLength <= 30)
      ) 
    {
      setColorStrength(
		colorStrength.fill('codseb3s-too-weak', 0, 1).fill('empty', 1, 4)
	  )
      setNameStrength('TOO WEAK!')
    }
    else if(
        ((fourOpts) && pwLength <= 32) || 
        ((threeOtps) && pwLength <= 37) ||
        ((twoOneOtps) && pwLength <= 40)
      ) 
    {
      setColorStrength(
		colorStrength.fill('codseb3s-weak', 0, 2).fill('empty', 2, 4)
	  )
      setNameStrength('WEAK')
    }
    else if(
        ((fourOpts) && pwLength <= 48) || 
        ((threeOtps) && pwLength <= 57) ||
        ((twoOneOtps) && pwLength <= 64)
      ) 
    {
      setColorStrength(
		colorStrength.fill('codseb3s-medium', 0, 3).fill('empty', 3, 4)
	  )
      setNameStrength('MEDIUM')
    }
    else if(
        ((fourOpts) && pwLength >= 49) || 
        ((threeOtps) && pwLength >= 58) ||
        ((twoOneOtps) && pwLength >= 65)
      ) 
    {
      setColorStrength(colorStrength.fill('codseb3s-strong', 0, 4))
      setNameStrength('STRONG')
    }
  }

	return (
		<> 
      <main className='relative flex flex-col justify-center min-w-[300px] min-h-[100vh] pb-10 bg-[#191D24]'>
        <Header />
        <div className='w-[18.75rem] min-h-[540px] sm:w-[21.875rem] m-auto'>
          <PasswordContainer 
            password={password}
            showSquare={showSquare}
            setShowSquare={setShowSquare}
          />
          <div className='mb-3'>
            <LengthContainer 
              allOptionsSelected={allOptionsSelected}
              passwordLength={passwordLength}
              setPasswordLength={setPasswordLength}
              passwordGenerator={passwordGenerator}
              showSquare={showSquare}
            />
            <CustomContainer 
              options={options}
              setOptions={setOptions}
              colorStrength={colorStrength}
              nameStrength={nameStrength}
            />
          </div>
          <BtnPrincipal
            passwordGenerator={passwordGenerator}
          />
        </div>
      </main>
		</>
	)
}