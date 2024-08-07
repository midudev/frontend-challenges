import { useState } from 'react'
import { CharacterType } from './types'

export default function Characters({ onChangeHandler }: CharacterType) {
	const [charactersList, setCharactersList] = useState(['uppercaseLetters', 'lowercasesLetters'])
	const onChange = (type: string) => {
		const isOnCharactersList = charactersList.includes(type)
		setCharactersList((oldList) => {
			const newlist = isOnCharactersList
				? oldList.filter((item) => item !== type)
				: [...oldList, type]
			onChangeHandler(newlist)
			return newlist
		})
	}
	return (
		<ul className='mt-4'>
			<Item>
				<CkeckBox defaultChecked={true} name='uppercaseLetters' onChangeHandler={onChange}>
					capital letters
				</CkeckBox>
			</Item>
			<Item>
				<CkeckBox defaultChecked={true} name='lowercasesLetters' onChangeHandler={onChange}>
					lowercases
				</CkeckBox>
			</Item>
			<Item>
				<CkeckBox name='num' onChangeHandler={onChange}>
					numbers
				</CkeckBox>
			</Item>
			{/* <Item>
				<CkeckBox name='special' onChangeHandler={onChange} />
				special characters
			</Item> */}
		</ul>
	)
}

const Item = (props) => {
	return <li className='my-1 flex items-center justify-start '>{props.children}</li>
}
const CkeckBox = (props) => {
	return (
		<div className='form-check'>
			<input
				defaultChecked={props.defaultChecked}
				className='form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
				type='checkbox'
				value=''
				id='flexCheckDefault'
				onChange={() => props.onChangeHandler(props.name)}
			/>
			<label className='form-check-label inline-block text-gray-800'>{props.children}</label>
		</div>
	)
}
