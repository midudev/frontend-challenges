import React from 'react'

import { getCheckboxLabel } from '../utils'

import styles from './styles.module.css'

const Checkbox = ({ id, checked, onCheck }) => (
	<div className='flex items-center'>
		<input type='checkbox' className={`${styles.checkboxInput} hidden`} checked={checked} />
		<label>
			<span
				onClick={() => onCheck(id)}
				style={{ border: '1px solid #d97706' }}
				className={`${styles.checkbox} h-4 w-4 cursor-pointer rounded inline-block relative`}
			/>
		</label>
		<span onClick={() => onCheck(id)} className='cursor-pointer text-sm text-amber-600 h-6 ml-2'>
			{getCheckboxLabel[id]}
		</span>
	</div>
)

export default Checkbox
