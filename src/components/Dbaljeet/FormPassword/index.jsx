import { useState } from 'react'
import Button from '../Button'
import CopyPassword from '../CopyPassword'
const FormPassword = () => {
	const [valuePassword, setValuePassword] = useState('')

	const [filters, setFilters] = useState({
		length: 8
	})

	return (
		<>
			<form className='flex justify-items-center flex-col text-white gap-y-5 w-2/3 max-w-2xl m-auto'>
				<label
					className='bg-gradient-to-r from-indigo-500 p-4 rounded-2xl'
					htmlFor='Dbaljeet-range'
				>{`Length of password: ${filters.length}`}</label>
				<input
					onChange={(ev) => {
						setFilters({ ...filters, [ev.target.name]: ev.target.value })
					}}
					id='Dbaljeet-range'
					name='length'
					type='range'
					min='8'
					max='16'
					defaultValue='8'
				/>

				<Button setValuePassword={setValuePassword} filters={filters} />
				<div className='flex w-full  flex-col max-w-2xl m-auto'>
					<input
						className='w-full bg-slate-100 font-semibold p-5 rounded-2xl focus:bg-violet-50 text-black my-20'
						value={valuePassword}
						placeholder='Click generate password'
						readOnly='readonly'
					/>
					<CopyPassword password={valuePassword} />
				</div>
			</form>
		</>
	)
}
export default FormPassword
