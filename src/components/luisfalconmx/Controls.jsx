import './Controls.css'

export default function Controls({ passwordLength, updatePasswordLength, options, updateOptions }) {
	return (
		<div className='Controls w-full max-w-[700px] min-h-[80px] mx-auto shadow-lg rounded-lg text-white relative gap-x-4 px-4 py-4'>
			<b className='block text-2xl font-semibold mb-2'>Customize your password</b>
			<hr className='block mb-4 opacity-10' />
			<form className='grid grid-cols-2 gap-x-7'>
				<div>
					<div className='flex items-start mb-3'>
						<input
							className='accent-purple-800 mr-2 mt-2'
							type='checkbox'
							name='uppercase'
							defaultChecked={options.uppercase}
							onChange={() => {
								updateOptions({
									uppercase: !options.uppercase
								})
							}}
						/>
						<div>
							<label className='font-semibold mb-1 block'>Uppercase</label>
							<p className='text-sm'>Enables the use of uppercase characters</p>
						</div>
					</div>
					<div className='flex items-start mb-3'>
						<input
							className='accent-purple-800 mr-2 mt-2'
							type='checkbox'
							name='lowercase'
							defaultChecked={options.lowercase}
							onChange={() => {
								updateOptions({
									lowercase: !options.lowercase
								})
							}}
						/>
						<div>
							<label className='font-semibold mb-1 block'>Lowercase</label>
							<p className='text-sm'>Enables the use of lowercase characters</p>
						</div>
					</div>
					<div className='flex items-start mb-3'>
						<input
							className='accent-purple-800 mr-2 mt-2'
							type='checkbox'
							name='numbers'
							defaultChecked={options.numbers}
							onChange={() => {
								updateOptions({
									numbers: !options.numbers
								})
							}}
						/>
						<div>
							<label className='font-semibold mb-1 block'>Numbers</label>
							<p className='text-sm'>Enables the use of numbers from 0 to 9</p>
						</div>
					</div>
					<div className='flex items-start mb-3'>
						<input
							className='accent-purple-800 mr-2 mt-2'
							type='checkbox'
							name='symbols'
							defaultChecked={options.symbols}
							onChange={() => {
								updateOptions({
									symbols: !options.symbols
								})
							}}
						/>
						<div>
							<label className='font-semibold mb-1 block'>Symbols</label>
							<p className='text-sm'>Enables the use of special characters like #&%</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col'>
					<label className='font-semibold block mb-3'>Password Length</label>
					<p className='text-sm mb-3'>Specify the number of characters your password will have.</p>
					<input
						className='accent-purple-800'
						type='range'
						name='length'
						min='1'
						max='32'
						defaultValue={passwordLength}
						onChange={(e) => updatePasswordLength(e.target.value)}
					/>
				</div>
			</form>
		</div>
	)
}
