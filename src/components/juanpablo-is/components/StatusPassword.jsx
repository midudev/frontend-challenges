import useStatusPassword from '../hooks/useStatusPassword'

const StatusPassword = () => {
	const { message, icon: Icon, width, color } = useStatusPassword()

	return (
		<div className='w-full'>
			<div className='bg-white h-2 rounded-br-md'>
				<div className='h-full' style={{ width, backgroundColor: color }} />
			</div>

			{message && (
				<p
					className='w-fit flex items-center text-xl p-2 text-white rounded-bl-md rounded-br-md'
					style={{ backgroundColor: color }}
				>
					{Icon && <Icon />} <b>{message}</b>
				</p>
			)}
		</div>
	)
}

export default StatusPassword
