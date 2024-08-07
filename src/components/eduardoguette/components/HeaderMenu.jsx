import { useState } from 'react'
import { BtnList } from './BtnList'
import { ButtonCopy } from './ButtonCopy'
import { Menu } from './Menu'

export const HeaderMenu = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<div className='absolute right-0 pr-3 pl-1 flex items-center top-0 bottom-0 my-auto bg-[rgb(36,35,44)]'>
			<ButtonCopy />
			<BtnList setState={setShowMenu}/>
			<Menu state={showMenu} setState={setShowMenu}/>
		</div>
	)
}
