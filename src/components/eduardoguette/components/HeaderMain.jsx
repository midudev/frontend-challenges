
import logoHack from '../assets/logo.jpg'
export const HeaderMain = () => {
	return (
		<header className='mt-4  self-start '>
			<a
				href='/'
				className='group header-logo-eduardoguette font-mono  saturate-50 flex items-center text-white gap-4 hover:saturate-100'
			>
				<img src={logoHack.src} alt='Logo hacktober fest' width={50} />
				<h1 className='tracking-wide	text-lg shadow-eduardoguette'>HACKTOBERFEST</h1>
			</a>
		</header>
	)
}
