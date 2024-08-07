import { usePasswordLogic } from './hooks/usePasswordLogic'
import { useFiltersLogic } from './hooks/useFiltersLogic'
import { SettingsSwitchItem } from './components/SettingsSwitchItem'
import { SLIDER_VALUES, FILTERS_VALUES } from './constants/defaultValues'

import './styles/index.css'

export const PassWordGenerator = () => {
	const { lowercase, numbers, symbols, uppercase } = FILTERS_VALUES
	const { onFilterChane, filters, passwordLength, onSliderChange } = useFiltersLogic()
	const { password, generatePassword, copyPassword, tooltipRef } = usePasswordLogic({
		passwordLength,
		filters
	})
	return (
		<div className='relative bg-[#EBF5FC] h-[700px] flex justify-center flex-col rounded-[55px] p-8 jh-custom-shadow border-8 border-white'>
			<div className='absolute top-0 left-[27%] bg-white w-40 h-7 rounded-b-[15px]' />
			<h1 className='text-center font-bold text-xl mb-6'>Password Generator</h1>
			<div className='w-full flex bg-[#EBF5FC] justify-between items-center gap-4 mb-4 rounded-md'>
				<input
					type='text'
					disabled
					value={password}
					className='w-full h-9 px-2 border-b border-[#32A3B1] bg-[#EBF5FC] text-lg tracking-wide py-1 font-medium text-[#32A3B1] outline-none'
				/>
				<button
					onClick={copyPassword}
					className='relative bg-[#EBF5FC] w-9 h-9 p-2 rounded-lg cursor-pointer jh-custom-shadow-button'
				>
					<span ref={tooltipRef} className='jh-tooltip'>
						Copied!
					</span>
					<img
						className='w-5 h-5'
						src='https://icongr.am/fontawesome/copy.svg?size=128&color=32A3B1'
						alt='copy-icon'
					/>
				</button>
			</div>
			<button
				onClick={generatePassword}
				className='w-full h-9 bg-[#EBF5FC] rounded-lg mb-4 cursor-pointer jh-custom-shadow-button'
			>
				Generate password
			</button>
			<div className='w-72 flex flex-col items-center'>
				<div className='w-full flex flex-col justify-start gap-2 mt-2 jh-custom-shadow p-4 rounded-lg'>
					<p className='font-semibold'>Settings:</p>
					<SettingsSwitchItem type={lowercase} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={uppercase} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={numbers} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={symbols} filters={filters} onFilterChane={onFilterChane} />
					<div className='flex gap-2'>
						<p>Length:</p>
						<span className='font-bold text-[#32a3b1]'>{passwordLength}</span>
					</div>
					<div className='w-auto flex items-center justify-between'>
						<p>{SLIDER_VALUES.minLength}</p>
						<input
							className='jh-input-range w-full mx-4'
							type='range'
							min={SLIDER_VALUES.minLength}
							max={SLIDER_VALUES.maxLength}
							value={passwordLength}
							onChange={onSliderChange}
						/>
						<p>{SLIDER_VALUES.maxLength}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
