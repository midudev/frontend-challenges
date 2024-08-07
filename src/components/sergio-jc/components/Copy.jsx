import { useCopy } from 'src/hooks/sergio-jc'
import { CheckIcon, CopyIcon } from '../assets'

const Copy = ({ value }) => {
	const [toggle, handleToggle] = useCopy(value)

	return <>{toggle ? <CheckIcon /> : <CopyIcon change={handleToggle} />}</>
}

export default Copy
