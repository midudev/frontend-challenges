import { useContext } from 'react'
import { AppContext } from '../context'
import { ButtonTimes } from './ButtonTimes'
import { ItemPassList } from './ItemPassList'

export const ListPasswords = () => {
	const {
		state: { savedPasswords, onHiddenModals }
	} = useContext(AppContext)
	return (
		<div className='inset-0 fixed flex justify-center flex-col items-center z-20 px-4'>
			<div
				className='inset-0 fixed bg-[rgb(36,35,44)] bg-opacity-5 backdrop-blur'
				onClick={() => onHiddenModals()}
			/>
			<section className='bg-[rgb(36,35,44)] relative z-20 pt-2 pb-8 px-8 w-[min(600px,100%)] gap-2 flex flex-col rounded border border-violet-200 shadow shadow-violet-500'>
				<ul className='flex flex-col gap-3'>
					<ButtonTimes
						onClickEvent={onHiddenModals}
						params={false}
						classStyle='right-5 grid top-5 hover:bg-[rgb(124,127,255,.3)]'
					/>
					<h2 className='text-2xl tracking-wider mt-6 mb-2 '>Saved passwords</h2>
					{savedPasswords.map((pass) => (
						<ItemPassList key={pass.id} {...pass} />
					))}
					{savedPasswords.length <= 0 && <p>No saved passwords 😢</p>}
				</ul>
			</section>
		</div>
	)
}
