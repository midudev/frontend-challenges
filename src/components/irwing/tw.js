/* eslint-disable camelcase */
const tw_class = {
	wrapper: [
		'flex',
		'flex-col',
		'min-h-[100vh]',
		'items-center',
		'justify-center',
		'bg-sky-200',
		'gap-5'
	],
	title: [
		'font-extrabold',
		'text-center',
		'text-transparent',
		'text-6xl',
		'bg-clip-text',
		'bg-gradient-to-r',
		'from-sky-900',
		'to-cyan-700'
	],
	box: [
		'm-auto',
		'bg-sky-900',
		'text-white',
		'p-6',
		'rounded-md',
		'shadow-xl',
		'flex',
		'flex-col',
		'gap-3'
	],
	box_message: ['p-2', 'rounded-md', 'bg-green-500', 'text-sm', 'text-white'],
	pass_container: [
		'p-4',
		'bg-white',
		'flex',
		'items-center',
		'rounded-md',
		'text-gray-900',
		'cursor-pointer'
	],
	pass_text: ['flex-1', 'text-lg'],
	pass_btn: [
		'flex',
		'items-center',
		'gap-1',
		'hover:text-blue-400',
		'active:opacity-[.8]',
		'relative'
	],
	slide_container: ['py-3', 'rounded-md'],
	slide_value: ['mb-2'],
	slide_wrapper: ['flex', 'items-center', 'gap-3'],
	slide_wrapper_numb: [
		'text-white',
		'font-bold',
		'grid',
		'place-content-center',
		'bg-sky-500',
		'w-12',
		'h-6',
		'text-[12px]',
		'rounded-full'
	],
	slide_wrapper_input: [
		'w-full',
		'h-1',
		'bg-sky-600',
		'rounded-md',
		'appearance-none',
		'cursor-pointer',
		'accent-blue-200'
	],
	button_copy: [
		'w-full',
		'bg-sky-500',
		'py-3',
		'rounded-lg',
		'hover:opacity-[.8]',
		'active:opacity-[.9]',
		'text-xl'
	]
}

const tw = (styles) => tw_class[styles].join(' ')

export default tw
