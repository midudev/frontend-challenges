export const Button = ({ onClick, label = 'Submit', fullWidth = false, disabled = false }) => (
	<button className={`bg-green-400 p-3 rounded font-semibold disabled:opacity-30 ${fullWidth ? 'w-full' : 'w-auto'}`} onClick={onClick} disabled={disabled}>{label}</button>
)