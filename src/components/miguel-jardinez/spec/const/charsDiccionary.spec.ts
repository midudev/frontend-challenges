import { passwordGenerator } from '../../const/charsDictionary'

describe('Char Diccionary Generator', () => {
	it('should return a password with 20 characters when limit is 20', () => {
		const data = passwordGenerator(20, 'UPPER')
		expect(data.length).toBeGreaterThanOrEqual(20)
	})
})
