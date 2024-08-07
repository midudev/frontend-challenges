module.exports = {
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	testMatch: ['**/*.spec.{js,ts}'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
