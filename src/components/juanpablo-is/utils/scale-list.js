// Icons
import IconFaceEnraged from '../components/common/icons/IconFaceEnraged'
import IconFaceAnguished from '../components/common/icons/IconFaceAnguished'
import IconFaceUnamused from '../components/common/icons/IconFaceUnamused'
import IconFaceSmiling from '../components/common/icons/IconFaceSmiling'
import IconFaceParty from '../components/common/icons/IconFaceParty'

export default {
	very_bad: {
		scale: 1,
		values: { width: '10%', color: '#f27a7c', icon: IconFaceEnraged, message: 'Very bad' }
	},
	poor: {
		scale: 2,
		values: { width: '30%', color: '#fca927', icon: IconFaceAnguished, message: 'Poor' },
		validates: [
			{ length: 7, options: 2 },
			{ length: 6, options: 4 },
			{ length: 7 }
		]
	},
	medium: {
		scale: 3,
		values: { width: '50%', color: '#ffca0a', icon: IconFaceUnamused, message: 'Medium' },
		validates: [
			{ length: 8, options: 3 },
			{ length: 12 }
		]
	},
	good: {
		scale: 4,
		values: { width: '80%', color: '#8ad2d1', icon: IconFaceSmiling, message: 'Good' },
		validates: [
			{ length: 15, options: 3 },
			{ length: 20 }
		]
	},
	excellent: {
		scale: 5,
		values: { width: '100%', color: '#7ec99e', icon: IconFaceParty, message: 'Excellent' },
		validates: [
			{ length: 20, options: 4 },
			{ length: 30, options: 3 },
			{ length: 30 }
		]
	},
	undefined: {
		values: { width: '100%', color: 'white' }
	}
}
