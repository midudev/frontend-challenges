import React from 'react'
import Notes from './Notes'
import TitleWindow from './TitleWindow'


// handleCloseWindow={handleCloseWindow('terminal')}
// addCommand={addCommand}
// commands={commands}

const WindowNotes = ({ addCommand, commands, handleCloseWindow }) => {
  return (
	<div className='absolute w-64 bottom-32 left-24 rounded-lg overflow-hidden diegocadavid_animation-open  '>
		<TitleWindow  handleCloseWindow={handleCloseWindow} name="Notas"/>
		<Notes />
	</div>
  )
}

export default WindowNotes