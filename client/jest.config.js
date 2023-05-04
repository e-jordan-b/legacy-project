/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  // Other configuration options...
  transformIgnorePatterns: ['/node_modules/(?!(somePkg)|react-dnd|core-dnd|@react-dnd)'],
  setupFiles: ['./jest.setup.js'], // Or './jest.setup.ts' if you're using TypeScript
  // transformIgnorePatterns: [
  //   '/node_modules/(?!(somePkg)|react-dnd|core-dnd|@react-dnd)',
};
