import './styles.css'
import ShopInterface from '../ShopInterface'
import sellerImg from './media/snowdinSeller.png'

export default function Shop() {
	return (
		<div id='mrvega01'>
			<div className='card'>
				<img src={sellerImg.src} alt='snowdin-seller'/>
				<ShopInterface/>
			</div>
		</div>
	)
}