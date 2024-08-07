import { useState, FC } from 'react'
import { CustomPassword } from '@components/cmglezpdev/CustomPassword'
import { AdvancedPassword } from '@components/cmglezpdev/AdvancedPassword'

type layouts = '1' | '2';

interface PropsLayout {
	layout: layouts;
}

export const Layout:FC<PropsLayout> = ({ layout }) => {
	switch (layout) {
	case '1':
		return <CustomPassword />
	case '2':
		return <AdvancedPassword />
	default:
		return null
	}
}


export const PasswordGenerator = () => {
	const [showLayout, setShowLayout] = useState<layouts>('1')

	const handleLayout = (layout:layouts) => {
		setShowLayout(layout)
	}

	return (
		<section className='w-full flex flex-col items-center'>
			<h1 className='uppercase font-bold text-4xl text-white text-center my-8'>Password Generator</h1>
			<div className='w-[350px] sm:container md:w-[600px] bg-[#0c2f46] rounded mb-2'>

				<div className='w-full bg-[#0c2f46] grid grid-cols-2'>
					<span className='text-center p-2 cursor-pointer text-white font-bold' onClick={() => handleLayout('1')} style={{ backgroundColor: (showLayout !== '1') ? '#0e3e5e' : 'transparent' }}>
						Custom Password
					</span>
					<span className='text-center p-2 cursor-pointer text-white font-bold' onClick={() => handleLayout('2')} style={{ backgroundColor: (showLayout !== '2') ? '#0e3e5e' : 'transparent' }} >
						Advanced Password
					</span>
				</div>

				<div className='py-8 w-full'>
					<Layout layout={showLayout} />
				</div>
			</div>
		</section>

	)
}