export const ButtonTimes = ({ onClickEvent, params, classStyle }) => {
	const style = `absolute  my-auto  text-lg p-2 rounded-full h-7 w-7 place-content-center ${classStyle}`
	const handleOnClick = () => {
		onClickEvent(params)
	}
	return (
		<button onClick={handleOnClick} className={style} >
			&times;
		</button>
	)
}
