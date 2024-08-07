import React from 'react'
import TitleWindow from './TitleWindow'
import Terminal from './Terminal'

const WindowTerminal = ({ addCommand, commands, handleCloseWindow }) => {
  return (
	<div className='bg-[#111111] h-[700px] absolute top-12 inset-x-48 rounded-lg overflow-hidden diegocadavid_animation-open'>
		<TitleWindow  handleCloseWindow={handleCloseWindow} name="Terminal"/>
		<Terminal addCommand={addCommand} commands={commands} />
	</div>
  )
}

export default WindowTerminal