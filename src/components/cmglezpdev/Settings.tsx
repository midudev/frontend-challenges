import { ChangeEvent, FC } from 'react'
import { useSettings, SettingsOption } from '@hooks/cmglezpdev'

interface Props {
	initalSettings: SettingsOption[];
	getValues: (values:SettingsOption[]) => void;
}

export const Settings:FC<Props> = ({ getValues, initalSettings }) => {
	const { handleInputChange, findByName, checkAll } = useSettings(initalSettings)

	const handleSettings = (e:ChangeEvent<HTMLInputElement>) => {
		const upd = handleInputChange(e)
		getValues(upd)
	}

	const handleCheckAll = () => {
		const upd = checkAll(true)
		getValues(upd)
	}

	return (
		<div className='mt-6'>
			<h2 className='text-3xl text-center mb-2 text-white font-bold'>Settings</h2>

			<div className='grid grid-cols-2 w-60'>
				<button
					className='text-cyan-600 text-xl col-span-full transition-colors outline-none hover:text-cyan-300'
					onClick={handleCheckAll}
				>
					Strong Password
				</button>

				<label htmlFor='letters' className='text-gray-400 text-xl' >
					<input type='checkbox' name='letters' checked={findByName('letters').checked} className='mr-2 outline-none' onChange={handleSettings} />
					Letters
				</label>

				<label htmlFor='numbers' className='text-gray-400 text-xl'>
					<input type='checkbox' name='numbers' checked={findByName('numbers').checked} className='mr-2 outline-none' onChange={handleSettings} />
					Numbers
				</label>

				<label htmlFor='div_in_groups' className='text-gray-400 text-xl'>
					<input type='checkbox' name='divide' checked={findByName('divide').checked} className='mr-2 outline-none' onChange={handleSettings} />
					Divide
				</label>

				<label htmlFor='special_characters' className='text-gray-400 text-xl'>
					<input type='checkbox' name='special' checked={findByName('special').checked} className='mr-2 outline-none' onChange={handleSettings} />
					#%!@
				</label>
			</div>
		</div>
	)
}
