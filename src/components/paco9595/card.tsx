export default function Card({ children }) {
	return (
		<div className='rounded-md w-[400px] h-[600px] bg-[#467852] p-5 text-white shadow-2xl'>
			{children}
		</div>
	)
}
