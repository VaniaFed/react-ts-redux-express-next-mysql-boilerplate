module.exports = {
    setupFiles: ['<rootDir>/enzyme.config.js'],
    modulePathIgnorePatterns: ['enzyme.config.js', '\\\\node_modules\\\\'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^containers(.*)$': '<rootDir>/src/containers$1',
        '^actions(.*)$': '<rootDir>/src/actions$1',
        '^constants.ts(.*)$': '<rootDir>/src/constants.ts$1',
        '^src(.*)$': '<rootDir>/src$1',
        '^selectors(.*)$': '<rootDir>/src/selectors$1',
        '^reducers(.*)$': '<rootDir>/src/reducers$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^lib(.*)$': '<rootDir>/src/lib$1',
        '^services(.*)$': '<rootDir>/src/services$1',
        '^sagas(.*)$': '<rootDir>/src/sagas$1',
        '^types(.*)$': '<rootDir>/src/types$1',
        '^.+\\.js(jsx)$': 'babel-jest',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub'
    },
    verbose: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/src/sagas/*',
        '!<rootDir>/src/**/*stories.jsx'
    ]
};
