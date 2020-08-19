module.exports = {
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json',
			skipBabel: true
		}
	},
	moduleFileExtensions: [
		'ts',
		'js', 
		'json'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/*.test.(ts|js)'
	],
	testEnvironment: 'node',
};
