import React from 'react'
import TitleWindow from './TitleWindow'
import CliForm from './CliForm'

const CliTerminal = ({addCommand, handleCloseWindow, handleOpenTerminal}) => {
  return (
	<div className='block top-32 right-24 w-64 absolute rounded-lg overflow-hidden ring-2 ring-slate-400 diegocadavid_animation-open'>
		<TitleWindow handleCloseWindow={handleCloseWindow} name='Password CLI' dark={false}/>
		<CliForm handleOpenTerminal={handleOpenTerminal} addCommand={addCommand}/>
	</div>
  )
}

export default CliTerminal