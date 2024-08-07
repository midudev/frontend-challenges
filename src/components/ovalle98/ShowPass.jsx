import React from 'react'
import CopyPassBtn from './CopyPassbtn'
const ShowPass = ({ password, copiedPass }) => {
	return (
		<div className='ovalle98-pg-pass'>
			<span className='ovalle98-pass'>{password}</span>
			<CopyPassBtn copiedPass={copiedPass}/>
		</div>
	)
}

export default ShowPass