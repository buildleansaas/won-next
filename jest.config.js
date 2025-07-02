// Jest configuration for Next.js 8 with older Jest version
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/api/(.*)$': '<rootDir>/api/$1',
    // Mock CSS imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-scrollable-anchor)/)',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverageFrom: [
    'pages/**/*.{js,jsx}',
    'components/**/*.{js,jsx}',
    'api/**/*.{js,jsx}',
    'lib/**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/coverage/',
  ],
}
