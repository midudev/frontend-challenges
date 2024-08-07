import React, { useState, useRef } from 'react';
import BtnCopyClipboard from './BtnCopyClipboard.jsx';
import LabelCopied from './LabelCopied.jsx';
import Square from './Square.jsx';

export default function PasswordContainer({ password, showSquare, setShowSquare }) {
  const [showText, setShowText] = useState(false)
  const inputRef = useRef()

	// This fn is neccesary to handle the copy
	// When the browser not accepts the ClipBoard API (Was tested)
  const fallbackCopyTextToClipboard = () => {
    document.queryCommandSupported('copy')
    return
  }

  const handleAnimations = (passwordRef) => {
    // Prevent multiples executions when the copy button is pressed once
    if(showText === true) return
    // Show the Square only in ONE condition
    if(passwordRef.length === 85) {
      setShowSquare(true)
    }

    // Resize the width of the password to add the word 'COPIED'
    setShowText((prev) => !prev)
    inputRef.current.className = 'codseb3s-resize'
    // Execute the original width of the password 3s later
    setTimeout(() => {
      setShowSquare(false)
      setShowText((prev) => !prev)
      inputRef.current.className = 'codseb3s-current-size'
    }, 3000)
  }

  const handleCopy = () => {
    const passwordRef = inputRef.current.innerText
    if(!navigator.clipboard) {
      fallbackCopyTextToClipboard()
      handleAnimations(passwordRef)
      return
    }
    navigator.clipboard.writeText(passwordRef)
      .then(() => {
        handleAnimations(passwordRef)
      })
  }

  return (
    <>
      <div className='relative flex p-4 sm:p-7 bg-[#1F232B] mb-3'>
        <div
          className='codseb3s-current-size' 
          ref={inputRef}
        >
          <span id='codseb3s-pw' className='font-sans'>{password}</span>
        </div>
        {/* Show a RECTANGLE for design purposes only in length MAX value */}
        { showSquare === true
          ? <Square />
          : ''
        }
        {/* Show the text 'COPIED' when the user click the button */}
        { showText === true 
          ? <LabelCopied />
          : ''
        }
        <BtnCopyClipboard 
          handleCopy={handleCopy}
        />
      </div>
    </>
  )
}