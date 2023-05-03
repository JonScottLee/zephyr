module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // transform tsx files so they can run in jest. Importantly, this uses > ts 4.1,
  // which includes the new JSX transform, which is why we don't need to import React
  // in every module and test. Without this line, we WOULD need to import React in
  // every module
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
